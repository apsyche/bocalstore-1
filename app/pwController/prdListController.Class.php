<?php
class prdListController extends PwController {
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
		
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
		
		
	}
	
	/**
	 * actionListCat
	 */
	public function actionListCat() {
		
		$lst = PwCategorie::getListCat();
		$text = json_encode($lst);
		$search  = array('\\r', '\\n','null',"'");
		$replace = array('', "\\\\n", '""',"\\\\'");
		$text = str_replace($search, $replace, $text);
		
		echo $text;
	}
	
	/**
	 * ListProd
	 */
	public function actionListProd() {
		$cat_id = $_POST['cat_id'];
		$lst = PwProduit::getListByCat($cat_id);
		$text = json_encode($lst);
		$search  = array('\\r', '\\n','null',"'");
		$replace = array('', "\\\\n", '""',"\\\\'");
		$text = str_replace($search, $replace, $text);
		echo $text;
	}
	
	/**
	 * actionSaveCat
	 */
	public function actionSaveCat() {
		$obj = new PwCategorie($_POST['cat_id']);
		$obj->cat_nom= $_POST['cat_nom'];
		$obj->cat_description= $_POST['cat_description'];
		$obj->save();
	}
	
	public function actionDelCat() {
		$obj = new PwCategorie($_POST['cat_id']);
		$obj->delete();
	}
	
	
	/**
	 * actionSaveProd
	 */
	public function actionSaveProd() {
		$obj = new PwProduit($_POST['prd_id']);
		$obj->prd_cat_id= $_POST['prd_cat_id'];
		$obj->prd_nom= $_POST['prd_nom'];
		$obj->prd_description= $_POST['prd_description'];
		$obj->prd_prix_ht= $_POST['prd_prix_ht'];
		$obj->save();
	}
	
	
	public function actionDelProd() {
		$obj = new PwProduit($_POST['prd_id']);
		$obj->delete();
	}
	
	
	
}