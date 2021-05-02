<?php
class logOutController extends PwController {
	protected $checkConnexion = false;
	
	
	
	/**
	 * Exécuté à chque appel du controleur
	 */
	public function actionInit() {
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
	

	public function actionLogout() {
		$user = new PwUser ( $_SESSION ['userId'] );

		PwConnexion::getInstance ()->logOut ();
		PwConnexion::checkConnexion ();
	}
	

}
