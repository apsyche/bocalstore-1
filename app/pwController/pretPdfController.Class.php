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
		}
		
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
	}
	
	

	private function printMatList() {
		
		

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
	
	
}












