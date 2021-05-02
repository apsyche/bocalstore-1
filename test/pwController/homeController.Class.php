<?php
class homeController extends PwController {
	protected $checkConnexion = true;
	
	/**
	 * Exécuté à chque appel du controleur
	 */
	public function actionInit() {
		$smarty = PwSmarty::getInstance ();
		$inf=new PwInformation(1);
		$row = $inf->getRow();
		$smarty->assign( 'rowInfo',$row );
	}
	
	/**
	 * avant affichage
	 */
	public function actionBeforDisplay() {
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
	}

}