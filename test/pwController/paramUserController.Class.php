<?php
class paramUserController extends PwController {
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
		$user = PwUser::getFullList();
		$smarty->assign( 'user',$user );
		
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
	}
	
	
	public function actionSave(){
	
		$mode = $_POST['mode'];
		$id = $_POST['usr_id'];
		if($mode=='N'){
			$id = '';
		}
		
		$obj = new PwUser($id);
		$obj->usr_lname = $_POST['usr_lname'];
		$obj->usr_fname = $_POST['usr_fname'];
		$obj->usr_login = $_POST['usr_login'];
		$obj->usr_mail  = $_POST['usr_mail'];
		$obj->usr_active = 1;
	
		
		(isset($_POST['usr_right_param']))	? $obj->usr_right_param = 1 :  $obj->usr_right_param= 0;
		(isset($_POST['usr_right_four']))	? $obj->usr_right_four = 1 	:  $obj->usr_right_four= 0;
		(isset($_POST['usr_right_mat']))	? $obj->usr_right_mat  = 1 	:  $obj->usr_right_mat = 0;
		(isset($_POST['usr_right_inv']))	? $obj->usr_right_inv = 1 	:  $obj->usr_right_inv= 0;
		(isset($_POST['usr_right_pret']))	? $obj->usr_right_pret = 1 	:  $obj->usr_right_pret= 0;
		(isset($_POST['usr_right_ged']))	? $obj->usr_right_ged = 1   :  $obj->usr_right_ged= 0;

		
		if($mode=='E'){
			if($_POST['usr_psw'] != ''){
				$obj->usr_psw = md5($_POST['usr_psw']);
			}
		}
		else{
			$obj->usr_psw = md5($_POST['usr_psw']);
		}
	
		$obj->save();
		
		echo "Enregistrement terminé !";
	}
	
	
	public function actionDelete(){
		$usr_id = $_POST['usr_id'];
		$obj = new PwUser($usr_id);
		$obj->delete();
		echo "Suppression terminée !";
		
	}
}