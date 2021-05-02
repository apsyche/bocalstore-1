<?php
class fourAddController extends PwController {
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
		
		
		$fur_id= (isset($_SESSION['PwGet'][1]))?$_SESSION['PwGet'][1]:'';
		$smarty->assign( 'fur_id',$fur_id);
		
	
		$obj = new PwFournisseur($fur_id);
		$smarty->assign ( 'row', $obj->getRow());
		

		
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
		
		
	}
	
	
	public function actionSave() {
		$fur_id = $_POST['fur_id'];
		$obj = new PwFournisseur($fur_id);
		
		$obj->fur_id = $_POST['fur_id'];
		$obj->fur_raison_social  = $_POST['fur_raison_social'];
		$obj->fur_adresse = $_POST['fur_adresse'];
		$obj->fur_ville = $_POST['fur_ville'];
		$obj->fur_cp = $_POST['fur_cp'];
		$obj->fur_tel_1 = $_POST['fur_tel_1'];
		$obj->fur_tel_2 = $_POST['fur_tel_2'];
		$obj->fur_mail = $_POST['fur_mail'];
		$obj->fur_site_internet = $_POST['fur_site_internet'];
		$obj->fur_nom_corresp = $_POST['fur_nom_corresp'];
		$obj->fur_prenom_corresp = $_POST['fur_prenom_corresp'];
		$obj->fur_tel_corresp = $_POST['fur_tel_corresp'];
		$obj->fur_mail_corresp = $_POST['fur_mail_corresp'];
		$obj->fur_iban = $_POST['fur_iban'];
		$obj->fur_rib = $_POST['fur_rib'];
	
		$id = $obj->save();
		echo ($id);
	}
	
	public  function  actionDelete(){
		$fur_id = $_POST['fur_id'];
		$obj = new PwFournisseur($fur_id);
		$id = $obj->delete();
		echo ('Suppression terminée');
	}
	
	
	
}