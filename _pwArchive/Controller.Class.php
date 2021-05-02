<?php
class tmpController extends PwController {
	
	/**
	 *
	 * @var unknown
	 */
	protected $checkConnexion = false;
	
	/**
	 *
	 * @var unknown
	 */
	protected $confSec = array ();
	
	/**
	 *
	 * @var unknown
	 */
	protected $subViews = array ();
	
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
}