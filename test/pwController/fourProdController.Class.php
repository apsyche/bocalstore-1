<?php
class fourProdController extends PwController {
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
		
		$fur_id = (isset($_SESSION['PwGet'][1]))?$_SESSION['PwGet'][1]:'';
		$smarty->assign( 'fur_id',$fur_id );

		
		$obj = new PwFournisseur($fur_id);
		$smarty->assign ( 'row', $obj->getRow());
		
		


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
		$four_id = $_POST['four_id'];
		$lst = PwCategorie::getListByFur($four_id);
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
		$obj->cat_fur_id= $_POST['cat_fur_id'];
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
		$obj->prd_fur_id= $_POST['prd_fur_id'];
		$obj->prd_nom= $_POST['prd_nom'];
		$obj->prd_description= $_POST['prd_description'];
		$obj->prd_prix_ht= $_POST['prd_prix_ht'];
		$obj->prd_tva= $_POST['prd_tva'];
		$obj->prd_ref= $_POST['prd_ref'];
		$obj->save();
	}
	
	
	public function actionDelProd() {
		$obj = new PwProduit($_POST['prd_id']);
		$obj->delete();
	}
	
	
	
}