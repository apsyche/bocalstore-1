<?php
class profilAboutController extends PwController {
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
		
		$smarty = PwSmarty::getInstance ();
		$obj = new PwUser($_SESSION ['userId']);
		
		$smarty->assign ( 'prenom',  $obj->usr_fname  );
		$smarty->assign ( 'nom',  $obj->usr_lname   );
		$smarty->assign ( 'email',  $obj->usr_mail  );
		$smarty->assign ( 'login',  $obj->usr_login );
		$smarty->assign ( 'id_res',  $obj->id_res );
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
		
		
	}
	
	
	public function actionSave() {
		
		$pmail = $_POST['pmail'];
		$ppass = $_POST['ppass'];
		
		$obj = new PwUser($_SESSION ['userId']);
		
		$obj->usr_mail = $pmail;
		
		if(strlen($ppass) > 0 ){
			$obj->usr_psw = md5($ppass);
		}
		$obj->save();
		
		echo "Enregistrement terminé !" ;
		
	}
	
	
	
}