<?php
class pretPdfController extends PwController {
	protected $checkConnexion = true;
	
	/**
	 * Exécuté à chque appel du controleur
	 */
	public function actionInit() {

	}
	
	/**
	 * avant affichage
	 */
	public function actionBeforDisplay() {
		
		$type = $_SESSION ['PwGet'] [0];
		switch ($type) {
			
			case "matList" :
				self::printMatList();
				break;
			case "MatListEnCours" :
			    self::printMatListEnCours();
			    break;
			case "MatListEnRetard" :
			    self::printMatListEnRetard();
			    break;
			case "MatListHisto" :
			    self::printMatListHisto();
			    break;
			 
		}
		
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
	}
	
	

	private function printMatList() {
		
		

	    $num_inv 	= (isset ($_POST['num_inv']))? $_POST['num_inv']:"";
	    $nom_prod	= (isset ($_POST['nom_prod']))? $_POST['nom_prod']:"";
	    $fur_id 	= (isset ($_POST['fur_id']))? $_POST['fur_id']:"";
	    $prd_id		= (isset ($_POST['prd_id']))? $_POST['prd_id']:"";
	    $cat_id		= (isset ($_POST['cat_id']))? $_POST['cat_id']:"";
	    $srv_id   	= (isset ($_POST['srv_id']))? $_POST['srv_id']:"";
	    
	    $lst = PwStock::getPretMat($num_inv, $nom_prod , $fur_id, $prd_id, $cat_id, $srv_id);
	    
		
		$pdf = new PwPDF_MC_Table ( 'P', 'mm', 'A4' );
		$pdf->AliasNbPages ();
		$pdf->AddPage ();
		$pdf->Ln ( 8 );
		$pdf->SetFont ( 'arial', '', 20 );
		$pdf->Cell ( 0, 10, utf8_decode("Liste Pret Total"), 0, 0, 'C' );
		
		$pdf->Ln ( 5 );
		$pdf->Ln ();
		
		$pdf->SetWidths(array(20,50,50,50,20));
		$pdf->SetFont ( 'arial', 'B', 10);
		$rowPrint = array(utf8_decode("N° Inv"),utf8_decode("Catégorie"),"Produit","Fournisseur","Salle");
		$pdf->Row($rowPrint);
		$pdf->SetFont ( 'arial', '', 10);
		foreach ($lst as $row){
		    if($row['prt_id']==''){
		        $rowPrint = array($row['sto_num_inventaire'],utf8_decode($row['cat_nom']),utf8_decode($row['prd_nom']),utf8_decode($row['fur_raison_social']),utf8_decode($row['srv_nom']));
			$pdf->Row($rowPrint);
		    }
		}
		
		$pdf->Ln ( 15 );
		
		$pdf->Output ();
	}
	
	
	private function printMatListEnCours() {
	    
	    $lst = PwPret::getListEnCoursDePret();
	   
	    $pdf = new PwPDF_MC_Table ( 'P', 'mm', 'A4' );
	    $pdf->AliasNbPages ();
	    $pdf->AddPage ();
	    $pdf->Ln ( 8 );
	    $pdf->SetFont ( 'arial', '', 20 );
	    $pdf->Cell ( 0, 10, utf8_decode("Liste total des prets en cours"), 0, 0, 'C' );
	    
	    $pdf->Ln ( 5 );
	    $pdf->Ln ();
	    
	    $pdf->SetWidths(array(30,30,30,30,30,30));
	    $pdf->SetFont ( 'arial', 'B', 10);
	    $rowPrint = array(utf8_decode("Nom"),utf8_decode("Prénom"),"Produits",utf8_decode("Date de début"), utf8_decode("Date de retour prévu"), utf8_decode("Téléphone"));
	    $pdf->Row($rowPrint);
	    $pdf->SetFont ( 'arial', '', 10);
	    foreach ($lst as $row){
	        $rowPrint = array($row['prt_nom'],utf8_decode($row['prt_prenom']),utf8_decode($row['prd_nom']),utf8_decode($row['prt_date_pret']),utf8_decode($row['prt_date_retour_prevu']), utf8_decode($row['prt_num_tel']));
	        $pdf->Row($rowPrint);
	    }
	    
	    $pdf->Ln ( 15 );
	    
	    $pdf->Output ();
	}
	
	private function printMatListEnRetard() {
	    
	    $lst = PwPret::getListEnRetard();
	    
	    
	    $pdf = new PwPDF_MC_Table ( 'P', 'mm', 'A4' );
	    $pdf->AliasNbPages ();
	    $pdf->AddPage ();
	    $pdf->Ln ( 8 );
	    $pdf->SetFont ( 'arial', '', 20 );
	    $pdf->Cell ( 0, 10, utf8_decode("Liste total des prets en retard"), 0, 0, 'C' );
	    
	    $pdf->Ln ( 5 );
	    $pdf->Ln ();
	    
	    $pdf->SetWidths(array(30,30,30,30,30,30));
	    $pdf->SetFont ( 'arial', 'B', 10);
	    $rowPrint = array(utf8_decode("Nom"),utf8_decode("Prénom"),"Produits",utf8_decode("Date de début"), utf8_decode("Date de retour prévu"), utf8_decode("Téléphone"));
	    $pdf->Row($rowPrint);
	    $pdf->SetFont ( 'arial', '', 10);
	    foreach ($lst as $row){
	        $rowPrint = array($row['prt_nom'],utf8_decode($row['prt_prenom']),utf8_decode($row['prd_nom']),utf8_decode($row['prt_date_pret']),utf8_decode($row['prt_date_retour_prevu']), utf8_decode($row['prt_num_tel']));
	        $pdf->Row($rowPrint);
	    }
	    
	    $pdf->Ln ( 15 );
	    
	    $pdf->Output ();
	}
	
	private function printMatListHisto() {
	    
	    $lst = PwPret::getListHistorique();
	    
	    
	    $pdf = new PwPDF_MC_Table ( 'P', 'mm', 'A4' );
	    $pdf->AliasNbPages ();
	    $pdf->AddPage ();
	    $pdf->Ln ( 8 );
	    $pdf->SetFont ( 'arial', '', 20 );
	    $pdf->Cell ( 0, 10, utf8_decode("Historique des prets"), 0, 0, 'C' );
	    
	    $pdf->Ln ( 5 );
	    $pdf->Ln ();
	    
	    $pdf->SetWidths(array(30,30,30,30,30,30));
	    $pdf->SetFont ( 'arial', 'B', 10);
	    $rowPrint = array(utf8_decode("Nom"),utf8_decode("Prénom"),"Produits",utf8_decode("Date de début"), utf8_decode("Date de retour") , utf8_decode("Téléphone"));
	    $pdf->Row($rowPrint);
	    $pdf->SetFont ( 'arial', '', 10);
	    foreach ($lst as $row){
	        $rowPrint = array($row['prt_nom'],utf8_decode($row['prt_prenom']),utf8_decode($row['prd_nom']),utf8_decode($row['prt_date_pret']),utf8_decode($row['prt_date_retour']), utf8_decode($row['prt_num_tel']));
	        $pdf->Row($rowPrint);
	    }
	    
	    $pdf->Ln ( 15 );
	    
	    $pdf->Output ();
	}
	
}












