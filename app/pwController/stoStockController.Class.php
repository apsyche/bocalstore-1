<?php
class stoStockController extends PwController {
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
		$smarty = PwSmarty::getInstance ();
		
		$lisFournisseurs = PwFournisseur::getSelecFournisseur ();
		$smarty->assign ( 'lisFournisseurs', $lisFournisseurs );

		$listService = PwService::getSelectServiceNull();
		$smarty->assign ( 'listService', $listService);
		
		$listPrd = PwProduit::getSelecList();
		$smarty->assign ( 'listPrd', $listPrd);
		
		$listCat = PwCategorie::getSelecList();
		$smarty->assign ( 'listCat', $listCat);
		
		
		$listPrdNull = PwProduit::getSelecListNull();
		$smarty->assign ( 'listPrdNull', $listPrdNull);
		
		$listCatNull = PwCategorie::getSelecListNull();
		$smarty->assign ( 'listCatNull', $listCatNull);
		
		
		$sortieInventaire = array( "" => "Inventaire", "1" => "Hors Inventaire");
		$smarty->assign ( 'sortieInventaire', $sortieInventaire);
		
		$groupByList = array( "" => "-", "sto_libele_prd" => "Produits", "sto_date_achat" => "Date Achat");
		$smarty->assign ( 'groupByList', $groupByList);
		
		$yesNoList= PwList::getInstance()->getList ( "yesNoListNoNull" );
		$smarty->assign ( 'yesNoList', $yesNoList);
		
		$affectList= PwList::getInstance()->getList ( "affectList" );
		$smarty->assign ( 'affectList', $affectList);
		
		$limit= PwList::getInstance()->getList ( "limit" );
		$smarty->assign ( 'limit', $limit);
		
		
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
		
	}
	

	
	
	public function actionGetListInventaire() {
		$num_inv    = (isset ($_POST['num_inv']))? $_POST['num_inv']:"";
		$num_srv	= (isset ($_POST['num_srv']))? $_POST['num_srv']:"";
		$nom_prod	= (isset ($_POST['nom_prod']))? $_POST['nom_prod']:"";
		$groupBy_id = (isset ($_POST['groupBy_id']))? $_POST['groupBy_id']:"";
		$hors_inv	= (isset ($_POST['hors_inv']))? $_POST['hors_inv']:"";	
		$sto_date_achat_deb = (isset ($_POST['sto_date_achat_deb']))? $_POST['sto_date_achat_deb']:"";
		$sto_date_achat_fin = (isset ($_POST['sto_date_achat_fin']))? $_POST['sto_date_achat_fin']:"";
		$fur_id 	= (isset ($_POST['fur_id']))? $_POST['fur_id']:"";
		$limit		= (isset ($_POST['limit']))? $_POST['limit']:"";
		$prd_id		= (isset ($_POST['prd_id']))? $_POST['prd_id']:"";
		$cat_id		= (isset ($_POST['cat_id']))? $_POST['cat_id']:"";
		$srv_id   	= (isset ($_POST['srv_id']))? $_POST['srv_id']:"";
		
		$lst = PwStock::getEtatInventaire($num_inv, $num_srv , $nom_prod , $groupBy_id , $hors_inv, $sto_date_achat_deb, $sto_date_achat_fin, $fur_id,$limit,$prd_id,$cat_id,$srv_id);
		
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

	
	
	
	
	public function actionEditInventaire() {
	    $mode = $_POST['mode'];
	    $obj = "";
	    if ($mode == 'E'){
	        $obj = new PwStock($_POST['sto_id']);
	    }
	    else{
	        $obj = new PwStock();
	    }
	    
	    $obj->sto_fur_id=$_POST['sto_fur_id'];
	    $obj->sto_prd_id=$_POST['sto_prd_id'];
	    $obj->sto_libele_prd=$_POST['sto_libele_prd'];
	    $obj->sto_cat_id=$_POST['sto_cat_id'];
	    $obj->sto_libele_cat=$_POST['sto_libele_cat'];
	    $obj->sto_num_inventaire=$_POST['sto_num_inventaire'];
	    $obj->sto_date_achat=$_POST['sto_date_achat'];
	    $obj->sto_prix_achat_ht=$_POST['sto_prix_achat_ht'];
	    $obj->sto_annne_amortissement=$_POST['sto_annne_amortissement'];
	    $obj->sto_srv_id=$_POST['sto_srv_id'];
	    $obj->sto_sorti_inventaire=$_POST['sto_sorti_inventaire'];
	    $obj->sto_date_sorti_inventaire=$_POST['sto_date_sorti_inventaire'];
	    $obj->sto_pret=$_POST['sto_pret'];
	    $obj->save();
	    echo "Enregistrement terminé !";
	}
	
	
	
	
	public function actionAddMultiplesInventaire() {
	    $nbr_prd = $_POST['nbr_prd'];
		
	    for ($i=0; $i < $nbr_prd ; $i++){
    		$obj = new PwStock();	
    		$obj->sto_fur_id=$_POST['sto_fur_id'];
    		$obj->sto_prd_id=$_POST['sto_prd_id'];
    		$obj->sto_cat_id=$_POST['sto_cat_id'];
    		$obj->sto_libele_prd=$_POST['sto_prd_id2'];
    		$obj->sto_date_achat=$_POST['sto_date_achat'];
    		$obj->sto_annne_amortissement=$_POST['sto_annne_amortissement'];
    		$obj->sto_srv_id=$_POST['sto_srv_id'];
    		$obj->sto_sorti_inventaire=$_POST['sto_sorti_inventaire'];
    		$obj->sto_date_sorti_inventaire=$_POST['sto_date_sorti_inventaire'];
    		$obj->sto_pret=$_POST['sto_pret'];
    		$obj->save();
	    }
		echo "Enregistrement terminé !";
	}
	
	
	public function actionExportCSV() {
		
	    $num_inv    = (isset ($_POST['num_inv']))? $_POST['num_inv']:"";
	    $num_srv	= (isset ($_POST['num_srv']))? $_POST['num_srv']:"";
	    $nom_prod	= (isset ($_POST['nom_prod']))? $_POST['nom_prod']:"";
	    $groupBy_id = (isset ($_POST['groupBy_id']))? $_POST['groupBy_id']:"";
	    $hors_inv	= (isset ($_POST['hors_inv']))? $_POST['hors_inv']:"";
	    $sto_date_achat_deb = (isset ($_POST['sto_date_achat_deb']))? $_POST['sto_date_achat_deb']:"";
	    $sto_date_achat_fin = (isset ($_POST['sto_date_achat_fin']))? $_POST['sto_date_achat_fin']:"";
	    $fur_id 	= (isset ($_POST['fur_id']))? $_POST['fur_id']:"";
	    $prd_id		= (isset ($_POST['prd_id']))? $_POST['prd_id']:"";
	    $cat_id		= (isset ($_POST['cat_id']))? $_POST['cat_id']:"";
	    $srv_id   	= (isset ($_POST['srv_id']))? $_POST['srv_id']:"";
		
	    $lst = PwStock::getEtatInventaire($num_inv, $num_srv , $nom_prod , $groupBy_id , $hors_inv, $sto_date_achat_deb, $sto_date_achat_fin, $fur_id,$prd_id,$cat_id,$srv_id);
	    
		$csv = new PwCSV ();
 		$csv->Colonne ( "Num Inventaire ; Catégorie ; Réf Produit ; Nom Produit ; Fournisseur ; Date Achat ; Affectation ; Total ;" );
		
		foreach ( $lst as $row ) {
		    $csv->Insertion ( $row['sto_num_inventaire'] . ";". $row['cat_nom'] .";" . $row['sto_libele_cat'] . ";" . $row['prd_nom'] . ";". $row['fur_raison_social'] . ";". $row['sto_date_achat'] . ";". $row['srv_nom'] .";". $row['sto_total'] . ";");
		}
		
		$csv->output ('Export_CSV');
		
	}
	
	
	public function actionDelete() {
		$sto_id= $_POST['sto_id'];
		$obj = new PwStock($sto_id);
		$obj->delete();
		echo "Suppression terminée !";
	}
	
}




















