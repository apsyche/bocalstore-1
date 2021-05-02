<?php
class urbPossController extends PwController {
	protected $checkConnexion = true;
	
	protected $subViews = array (
			'urbPossDecPoss',
			'urbPossDecSerch'
	);
	
	/**
	 * actionInit
	 */
	public function actionInit() {
		if ($_SESSION['usr_right_urb'] != 1){
			header ( "Location: " . "!home!index" );
		}
		include_once '../app/pwController/urbPossDecPossController.Class.php';
		include_once '../app/pwController/urbPossDecSerchController.Class.php';
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
			$frame = "urbPossDecPoss";
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

