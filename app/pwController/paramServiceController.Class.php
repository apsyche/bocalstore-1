<?php
class paramServiceController extends PwController {
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
		$list = PwService::getFullList();
		$smarty->assign( 'srvList',$list );
		
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
	}
	
	
	public function actionSave(){
	
		$mode = $_POST['mode'];
		$id = $_POST['srv_id'];
		if($mode=='N'){
			$id = '';
		}
		
		$obj = new PwService($id);
		$obj->srv_nom = $_POST['srv_nom'];
		$obj->srv_description = $_POST['srv_description'];
		$obj->save();
		
		echo "Enregistrement terminé !";
	}
	
	
	public function actionDelete(){
		$vlg_id = $_POST['srv_id'];
		$obj = new PwService($vlg_id);
		$obj->delete();
		echo "Suppression terminée !";
		
	}
}