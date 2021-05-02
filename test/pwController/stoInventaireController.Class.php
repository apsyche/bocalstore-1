<?php
class stoInventaireController extends PwController {
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
		
		
		$lisFournisseurs = PwFournisseur::getSelecFournisseur();
		$smarty->assign ( 'lisFournisseurs', $lisFournisseurs);
		

	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
		
		
	}
	
	
	public function actionGetListInventaire() {
		$typeFilter = "";
		if (isset ($_POST['typeFilter'])){
			
		}

		$lst = PwStock::getEtatInventaire($typeFilter);
		
		$text = json_encode($lst);
		$search  = array('\\r', '\\n','null',"'");
		$replace = array('', "\\\\n", '""',"\\\\'");
		$text = str_replace($search, $replace, $text);
		echo $text;
	}
	
	
	

	
	
}