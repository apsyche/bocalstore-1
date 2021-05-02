<?php
class fourListController extends PwController {
	
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
		$list = PwFournisseur::getFullList();
		$smarty->assign( 'fourList',$list );
		$smarty->assign( 'fur_id','' );
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
		
		
	}
	
	
	
	
}