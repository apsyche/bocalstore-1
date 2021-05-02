<?php
class paramInfoController extends PwController {
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
		$inf = new PwInformation(1);
		$row = $inf->getRow();
		$smarty->assign( 'rowInfo',$row );
		
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
	}
	
	
	public function actionSave(){
		$obj = new PwInformation(1);
		$obj->inf_nom_apc = $_POST['inf_nom_apc'];
		$obj->inf_adresse = $_POST['inf_adresse'];
		$obj->inf_cp = $_POST['inf_cp'];
		$obj->inf_ville = $_POST['inf_ville'];
		$obj->inf_imp_titre = $_POST['inf_imp_titre'];

		$obj->save();
		
		echo "Enregistrement terminé !";
	}
	
}