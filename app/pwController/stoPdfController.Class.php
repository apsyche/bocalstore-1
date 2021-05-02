<?php
class stoPdfController extends PwController {
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
			
			case "invList" :
				self::printInvList();
				break;
			case "RestList" :
				self::printRestList();
				break;
		}
		
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
	}
	
	
/*	private function printFour($pid) {
		
		
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
		
		$pdf->Output ();
	}
	
	*/
	private function printInvList() {
		
		
		/*
		$lisFournisseurs = PwFournisseur::getSelecFournisseur ();
		$smarty->assign ( 'lisFournisseurs', $lisFournisseurs );
		
		$lisCommandes = PwCommande::getSelecCommande ();
		$smarty->assign ( 'lisCommandes', $lisCommandes );
		
		$listType = array( "SRV" => "Services", "ECL" => "Ecoles");
		$smarty->assign ( 'listType', $listType);
		
		
		$listService = PwService::getSelectServiceNull();
		$smarty->assign ( 'listService', $listService);
		
		$listEcloes = PwSchool::getSelecEcolesNull();
		$smarty->assign ( 'listEcloes', $listEcloes);
		
		$sortieInventaire = array( "" => "Inventaire", "1" => "Hors Inventaire");
		$smarty->assign ( 'sortieInventaire', $sortieInventaire);
		
		*/
		
		$list= PwStock::getEtatInventaire();
		
		$pdf = new PwPDF_MC_Table ( 'P', 'mm', 'A4' );
		$pdf->AliasNbPages ();
		$pdf->AddPage ();
		$pdf->Ln ( 8 );
		$pdf->SetFont ( 'arial', '', 20 );
		$pdf->Cell ( 0, 10, utf8_decode("Liste Inventaire Total"), 0, 0, 'C' );
		
		$pdf->Ln ( 5 );
		$pdf->Ln ();
		
		$pdf->SetWidths(array(20,50,50,50,20));
		$pdf->SetFont ( 'arial', 'B', 10);
		$rowPrint = array(utf8_decode("N° Inv"),"Produit","Date Achat", "Affectation","Total");
		$pdf->Row($rowPrint);
		$pdf->SetFont ( 'arial', '', 10);
		foreach ($list as $row){
			$rowPrint = array($row['sto_num_inventaire'],utf8_decode($row['sto_libele_prd']),utf8_decode($row['sto_date_achat']),utf8_decode($row['srv_nom']),$row['sto_total']);
			$pdf->Row($rowPrint);
		}
		
		
		$pdf->Ln ( 15 );
		
	
		
		$pdf->Output ();
	}
	
	
	private function printRestList() {
		
		$list= PwStock::getListPrdAttente();
		
		$pdf = new PwPDF_MC_Table ( 'P', 'mm', 'A4' );
		$pdf->AliasNbPages ();
		$pdf->AddPage ();
		$pdf->Ln ( 8 );
		$pdf->SetFont ( 'arial', '', 20 );
		$pdf->Cell ( 0, 10, utf8_decode("Liste reste à livrer"), 0, 0, 'C' );
		
		$pdf->Ln ( 5 );
		$pdf->Ln ();
		
		$pdf->SetWidths(array(70,100,20));
		$pdf->SetFont ( 'arial', 'B', 10);
		$rowPrint = array("Fournisseur","Produit","Qte");
		$pdf->Row($rowPrint);
		$pdf->SetFont ( 'arial', '', 10);
		foreach ($list as $row){
			$rowPrint = array(utf8_decode($row['fur_raison_social']),utf8_decode($row['prd_nom']),utf8_decode($row['rest']));
			$pdf->Row($rowPrint);
		}
		
		
		$pdf->Ln ( 15 );
		
		
		
		$pdf->Output ();
	}
}












