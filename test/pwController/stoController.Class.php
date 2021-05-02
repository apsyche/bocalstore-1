<?php
class stoController extends PwController {
	protected $checkConnexion = true;
	
	protected $subViews = array (
			'stoInventaire',
			'stoStock',
			'stoRestCmd'
	);
	
	/**
	 * actionInit
	 */
	public function actionInit() {
		if ($_SESSION['usr_right_sto'] != 1){
			header ( "Location: " . "!home!index" );
		}
		
		include_once '../app/pwController/stoInventaireController.Class.php';
		include_once '../app/pwController/stoStockController.Class.php';
		include_once '../app/pwController/stoRestCmdController.Class.php';
	
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
			$frame = "stoInventaire";
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

