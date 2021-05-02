<?php
class pretListController extends PwController {
	
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
		$list = PwStock::getListMaterialPretable();
		$smarty->assign( 'pretList',$list );
		
		
		$lisFournisseurs = PwFournisseur::getSelecFournisseur ();
		$smarty->assign ( 'lisFournisseurs', $lisFournisseurs );
		
		$listService = PwService::getSelectServiceNull();
		$smarty->assign ( 'listService', $listService);

		
		
		$listPrdNull = PwProduit::getSelecListNull();
		$smarty->assign ( 'listPrdNull', $listPrdNull);
		
		$listCatNull = PwCategorie::getSelecListNull();
		$smarty->assign ( 'listCatNull', $listCatNull);
		
		
		
		$affectList= PwList::getInstance()->getList ( "affectList" );
		$smarty->assign ( 'affectList', $affectList);
		
		$diplome = array( "0" => "L1",  "2" => "L2",  "4" => "L3",  "5" => "M1",  "6" => "M2", );
		$smarty->assign ( 'diplome', $diplome);
		
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
		
		
	}
	
	
	public function actionGetListMateriel() {
	   
	    $num_inv 	= (isset ($_POST['num_inv']))? $_POST['num_inv']:"";
	    $nom_prod	= (isset ($_POST['nom_prod']))? $_POST['nom_prod']:"";
	    $fur_id 	= (isset ($_POST['fur_id']))? $_POST['fur_id']:"";
	    $prd_id		= (isset ($_POST['prd_id']))? $_POST['prd_id']:"";
	    $cat_id		= (isset ($_POST['cat_id']))? $_POST['cat_id']:"";
	    $srv_id   	= (isset ($_POST['srv_id']))? $_POST['srv_id']:"";
	    
	    $lst = PwStock::getPretMat($num_inv, $nom_prod , $fur_id, $prd_id, $cat_id, $srv_id);
	    
	    $text = json_encode ( $lst );
	    $search = array (
	        '\\r',
	        '\\n',
	        'null',
	        "'"
	    );
	    $replace = array (
	        '',
	        "\\\\n",
	        '""',
	        "\\\\'"
	    );
	    $text = str_replace ( $search, $replace, $text );
	    echo $text;
	}
	
	
	
	
	
}