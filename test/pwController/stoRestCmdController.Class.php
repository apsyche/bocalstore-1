<?php
class stoRestCmdController extends PwController {
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
		
		$smarty = PwSmarty::getInstance(); 
		$listProd= PwStock::getListPrdAttente();
		$smarty->assign( 'prdList',$listProd);
		
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
		
	}
	
	
	
}




















