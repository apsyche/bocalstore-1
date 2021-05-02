<?php
class profilController extends PwController {
	protected $checkConnexion = true;

	protected $subViews = array (
			'profilAbout'
	);
	
	/**
	 * actionInit
	 */
	public function actionInit() {
		
		include_once '../app/pwController/profilAboutController.Class.php';
	}
	
	/**
	 * actionBeforDisplay
	 */
	public function actionBeforDisplay() {
		$tab = $_SESSION ['PwGet'];
		$frame = "";
		$active = 0;
		if (isset ( $tab [0] )) {
			$frame = $tab [0];
		} else {
			$frame = "profilAbout";
		}
		
		$smarty = PwSmarty::getInstance ();
		
		$smarty->assign ( 'frame', $frame );
		$smarty->assign ( 'frametpl', $frame . ".tpl" );
		$smarty->assign ( 'filejs', $frame . ".js" );
	}
	
	
	
	

	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
	}
}

