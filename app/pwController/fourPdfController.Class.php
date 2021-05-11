<?php
class fourPdfController extends PwController {
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
			case "fichFour" :
				self::printFour ($_SESSION ['PwGet'][1]);
				break;
			case "fourList" :
				self::printFourList();
				break;
				
		}
		
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
	}
	
	
	private function printFour($pid) {
	    
	    
	    $obj = new PwFournisseur($pid);
	    $pdf = new PwPDF ( 'P', 'mm', 'A4' );
	    $pdf->AliasNbPages ();
	    $pdf->AddPage ();
	    $pdf->Ln ( 30 );
	    $pdf->SetFont ( 'arial', '', 25 );
	    $pdf->Cell ( 0, 10, utf8_decode("Fournisseur"), 0, 0, 'C' );
	    
	    $pdf->Ln ( 5 );
	    $pdf->Ln ();
	    $pdf->SetFont ( 'Arial', '', 15);
	    
	    $pdf->Ln ( 15 );
	    
	    $pdf->Cell ( 60, 10, "      Nom Fournisseur:", 0 );  $pdf->Cell ( 30, 10, utf8_decode($obj->fur_raison_social), 0 );
	    $pdf->Ln ();
	    $pdf->Cell ( 60, 10, "      Adresse :", 0 );  $pdf->Cell ( 30, 10, utf8_decode($obj->fur_adresse), 0 );
	    $pdf->Ln ();
	    $pdf->Cell ( 60, 10, "      Ville :", 0 );  $pdf->Cell ( 30, 10, utf8_decode($obj->fur_ville), 0 );
	    $pdf->Ln ();
	    $pdf->Cell ( 60, 10, "      CP :", 0 );  $pdf->Cell ( 30, 10, utf8_decode($obj->fur_cp), 0 );
	    $pdf->Ln ();
	    $pdf->Cell ( 60, 10, "      Téléphone 1 :", 0 );  $pdf->Cell ( 30, 10, utf8_decode($obj->fur_tel_1 ), 0 );
	    $pdf->Ln ();
	    $pdf->Cell ( 60, 10, "      Mail :", 0 );  $pdf->Cell ( 30, 10, utf8_decode($obj->fur_mail ), 0 );
	    $pdf->Ln ();
	    $pdf->Ln ();
	    $pdf->Ln ();
	    $pdf->Cell ( 60, 10, "      Nom Correspondant :", 0 );  $pdf->Cell ( 30, 10, utf8_decode($obj->fur_nom_corresp ), 0 );
	    $pdf->Ln ();
	    $pdf->Cell ( 70, 10, "      Prénom Correspondant :", 0 ); $pdf->Cell ( 60, 10, utf8_decode($obj->fur_prenom_corresp ), 0 );
	    $pdf->Ln ();
	    $pdf->Cell ( 60, 10, "      Mail Correspondant :", 0 );  $pdf->Cell ( 30, 10, utf8_decode($obj->fur_mail_corresp ), 0 );
	    $pdf->Ln ();
	    $pdf->Cell ( 60, 10, "      Tél Correspondant :", 0 );  $pdf->Cell ( 30, 10, utf8_decode($obj->fur_tel_corresp ), 0 );
	    $pdf->Ln ();
	    
	    
	    $pdf->Output ();
	}
	
	
	private function printFourList() {
		
		$list = PwFournisseur::getFullList();
		
		$pdf = new PwPDF_MC_Table ( 'P', 'mm', 'A4' );
		$pdf->AliasNbPages ();
		$pdf->AddPage ();
		$pdf->Ln ( 20 );
		$pdf->SetFont ( 'arial', '', 25 );
		$pdf->Cell ( 0, 10, utf8_decode("Liste Fournisseurs"), 0, 0, 'C' );
		
		$pdf->Ln ( 5 );
		$pdf->Ln ();
		
		$pdf->SetWidths(array(10,35,35,35,35,35));
		$pdf->SetFont ( 'arial', 'B', 10);
		$rowPrint = array(utf8_decode("Réf"),"Raison Social","Nom du contact",utf8_decode("Prénom du contact"),utf8_decode("Téléphone"),"Mail");
		$pdf->Row($rowPrint);
		$pdf->SetFont ( 'arial', '', 10);
		foreach ($list as $row){
		    $rowPrint = array($row['fur_id'],utf8_decode($row['fur_raison_social']),utf8_decode($row['fur_nom_corresp']),utf8_decode($row['fur_prenom_corresp']),$row['fur_tel_1'],utf8_decode($row['fur_mail']));
			$pdf->Row($rowPrint);
		}
		
		
		$pdf->Ln ( 15 );
		
	
		
		$pdf->Output ();
	}
}












