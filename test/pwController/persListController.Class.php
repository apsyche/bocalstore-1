<?php
class persListController extends PwController {
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
		$listPersonnel = PwPersonnel::getFullList();
		$smarty->assign( 'listPersonnel',$listPersonnel );
		$smarty->assign( 'per_id','' );
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
		
		
	}
	
	
	
	
}