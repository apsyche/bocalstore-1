<?php
class loginController extends PwController {
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
	
	
	public function actionAuthentification() {
		$login = "";
		$pass = "";
		extract ( $_POST, EXTR_OVERWRITE );
		$pass = md5 ( $pass );
		if (PwConnexion::logIn ( $login, $pass )) {
			$user = new PwUser ( PwConnexion::getInstance ()->getUserId () );
			$_SESSION ['userLogin'] = $user->usr_login;
			$_SESSION ['userLName'] = $user->usr_lname;
			$_SESSION ['userFName'] = $user->usr_fname;
			$_SESSION ['userRight'] = $user->usr_right;
			$_SESSION ['userId'] 	= $user->usr_id;
			
			$_SESSION ['usr_right_param'] 	= $user->usr_right_param;
			$_SESSION ['usr_right_four'] 	= $user->usr_right_four;
			$_SESSION ['usr_right_cmd'] 	= $user->usr_right_cmd;
			$_SESSION ['usr_right_inv'] 	= $user->usr_right_inv;
			$_SESSION ['usr_right_pret'] 	= $user->usr_right_pret;
			$_SESSION ['usr_right_ged'] 	= $user->usr_right_ged;
			$_SESSION ['usr_right_lecture'] 	= $user->usr_right_lecture;

			
			echo "1";
		} else {
			echo "0";
		}
	}

}
