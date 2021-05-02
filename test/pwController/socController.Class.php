<?php
class socController extends PwController {
	protected $checkConnexion = true;

	protected $subViews = array (
			'socAdd',
			'socSearch',

	);
	
	/**
	 * actionInit
	 */
	public function actionInit() {
		
		if ($_SESSION['usr_right_social'] != 1){
			header ( "Location: " . "!home!index" );
		}
		

		include_once '../app/pwController/socAddController.Class.php';
		include_once '../app/pwController/socSearchController.Class.php';
		
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
			$frame = "socSearch";
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

