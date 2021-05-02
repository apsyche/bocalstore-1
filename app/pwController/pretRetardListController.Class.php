<?php
class pretRetardListController extends PwController {
	
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
		$list = PwPret::getListEnRetard();
		$smarty->assign( 'pretRetard',$list );
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
		
		
	}
	
	
	
	
}