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
	

	public function actionAddPret() {
	    $prd_id 	= (isset ($_POST['prd_id']))? $_POST['prd_id']:"";  // produit 
	    $sto_id = (isset ($_POST['sto_id']))? $_POST['sto_id']:"";
	    
	    $prt_nom = (isset ($_POST['prt_nom']))? $_POST['prt_nom']:"";
	    $prt_prenom = (isset ($_POST['prt_prenom']))? $_POST['prt_prenom']:"";
	    $prt_email = (isset ($_POST['prt_email']))? $_POST['prt_email']:""; 
	    $prt_diplome = (isset ($_POST['prt_diplome']))? $_POST['prt_diplome']:""; 
	    $prt_num_tel = (isset ($_POST['prt_num_tel']))? $_POST['prt_num_tel']:""; 
	    $prt_date_pret = (isset ($_POST['prt_date_pret']))? $_POST['prt_date_pret']:"";
	    $prt_date_retour_prevu = (isset ($_POST['prt_date_retour_prevu']))? $_POST['prt_date_retour_prevu']:""; 
	    $prt_commentaire = (isset ($_POST['prt_commentaire']))? $_POST['prt_commentaire']:""; 
	    
	   
	    $pret = new PwPret();
	    //$pret->$prt_user_id =""; // a voir 
	    $pret->prt_prd_id = $prd_id;
	    $pret->prt_nom = $prt_nom;
	    $pret->prt_sto_id = $sto_id;
	    $pret->prt_prenom =$prt_prenom;
	    $pret->prt_email = $prt_email;
	    $pret->prt_diplome = $prt_diplome;
	    $pret->prt_num_tel = $prt_num_tel;
	    $pret->prt_date_pret = $prt_date_pret;
	    $pret->prt_date_retour_prevu = $prt_date_retour_prevu;
	    $pret->prt_commentaire = $prt_commentaire;
	    
	    $pret->save();
	    echo "Enregistement OK";
	}
	
	public function actionRendu() {
	    if(isset ($_POST['prt_id'])){
	        //$pret = new PwPret();
	        //$pret->prt_id = $_POST['prt_id'];
	        PwPret::setEtat($_POST['prt_id']);
	    }else{
	        $prt_id = (isset ($_POST['prt_id']))? $_POST['prt_id']:"";
	        echo $prt_id;
	    }

	}
	
}