<?php
class urbPossDecSerchController extends PwController {
	  
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
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
	}
	
	
	public function actionSearch() {

		$pos_nom = (isset($_POST['pos_nom']))?$_POST['pos_nom']:"";
		$pos_prenom = (isset($_POST['pos_prenom']))?$_POST['pos_prenom']:"";
	
		$ddn_a = (isset($_POST['ddn_a']))?$_POST['ddn_a']:"";
		$ddn_m = (isset($_POST['ddn_m']))?$_POST['ddn_m']:"";
		$ddn_j = (isset($_POST['ddn_j']))?$_POST['ddn_j']:"";
	
		$date = $ddn_a.'-'.$ddn_m.'-'.$ddn_j ;
	
		if(($ddn_a == 0) ||($ddn_m == 0) ||( $ddn_j == 0)){
			$date  = "";
		}
	
	
		$list = PwPossession::getListSearch($pos_nom,$pos_prenom,$date);
		$text = json_encode ( $list );

		echo ($text);

	}
	
}