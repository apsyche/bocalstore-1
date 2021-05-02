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
		
		$lisCommandes = PwCommande::getSelecCommande ();
		$smarty->assign ( 'lisCommandes', $lisCommandes );
		
		$listType = array( "SRV" => "Services", "ECL" => "Ecoles");
		$smarty->assign ( 'listType', $listType);
		
		
		$listService = PwService::getSelectServiceNull();
		$smarty->assign ( 'listService', $listService);
		
		$listEcloes = PwSchool::getSelecEcolesNull();
		$smarty->assign ( 'listEcloes', $listEcloes);
		
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
	
	public function actionGetListProdCommande() {
		$cmd_id = $_POST ['cmd_id'];
		$lst = PwCommandeProduit::getListByDevis ( $cmd_id );
		
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
	
	
	public function actionGetListInventaire() {
		
		$num_inv    = (isset ($_POST['num_inv']))? $_POST['num_inv']:"";
		$num_srv	= (isset ($_POST['num_srv']))? $_POST['num_srv']:"";
		$num_ecole	= (isset ($_POST['num_ecole']))? $_POST['num_ecole']:"";
		$nom_prod	= (isset ($_POST['nom_prod']))? $_POST['nom_prod']:"";
		$groupBy_id = (isset ($_POST['groupBy_id']))? $_POST['groupBy_id']:"";
		$hors_inv	= (isset ($_POST['hors_inv']))? $_POST['hors_inv']:"";	
		$prd_ref = (isset ($_POST['prd_ref']))? $_POST['prd_ref']:"";
		$sto_date_achat_deb = (isset ($_POST['sto_date_achat_deb']))? $_POST['sto_date_achat_deb']:"";
		$sto_date_achat_fin = (isset ($_POST['sto_date_achat_fin']))? $_POST['sto_date_achat_fin']:"";
		$fur_id 	= (isset ($_POST['fur_id']))? $_POST['fur_id']:"";
		$limit		= (isset ($_POST['limit']))? $_POST['limit']:"";
		
		$lst = PwStock::getEtatInventaire($num_inv, $num_srv, $num_ecole , $nom_prod , $groupBy_id , $hors_inv, $prd_ref, $sto_date_achat_deb, $sto_date_achat_fin, $fur_id,$limit);
		
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
	
	/**
	 * SaveRecevCommande
	 */
	public function actionSaveRecevCommande() {
		foreach ( $_POST ['prd_id_sel'] as $prod => $qte ) {
			if ($qte != 0) {
				for($i = 0; $i < $qte; $i ++) {
					$cmd_prd = new PwCommandeProduit ( $prod );
					$objProduit = new PwProduit ( $cmd_prd->cmp_prd_id );
					$objProduitCat = new PwCategorie ( $objProduit->prd_cat_id );
					
					$obj = new PwStock ();
					$obj->sto_cmd_id = $cmd_prd->cmp_cmd_id;
					$obj->sto_fur_id = $cmd_prd->cmp_fur_id;
					$obj->sto_prd_id = $cmd_prd->cmp_prd_id;
					$obj->sto_libele_prd = $objProduit->prd_nom;
					$obj->sto_cat_id = $objProduit->prd_cat_id;
					$obj->sto_libele_cat = $objProduitCat->cat_nom;
					
					$obj->sto_num_inventaire = "0";
					$obj->sto_date_achat = date ( "Y-m-d" );
					
					$obj->sto_prix_achat_ht = $cmd_prd->cmp_prix ;
					$obj->sto_tva = $objProduit->cmp_tva;
					
					$obj->sto_type_srv_ecl = $cmd_prd->cmp_type_srv_ecl;
					$obj->sto_srv_ecl_id = $cmd_prd->cmp_srv_ecl_id;
					
					$obj->save ();
				}
			}
		}
		echo "Enregistrement terminé !";
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

		$obj->sto_cmd_id=$_POST['sto_cmd_id'];
		$obj->sto_fur_id=$_POST['sto_fur_id'];
		$obj->sto_prd_id=$_POST['sto_prd_id'];
		$obj->sto_libele_prd=$_POST['sto_libele_prd'];
		$obj->sto_cat_id=$_POST['sto_cat_id'];
		$obj->sto_libele_cat=$_POST['sto_libele_cat'];
		$obj->sto_num_inventaire=$_POST['sto_num_inventaire'];
		$obj->sto_date_achat=$_POST['sto_date_achat'];
		$obj->sto_prix_achat_ht=$_POST['sto_prix_achat_ht'];
		$obj->sto_prix_achat_ht=$_POST['sto_prix_achat_ht'];
		$obj->sto_tva=$_POST['sto_tva'];
		$obj->sto_type=$_POST['sto_type'];
		$obj->sto_annne_amortissement=$_POST['sto_annne_amortissement'];
	//	$obj->sto_etat_stock=$_POST['sto_etat_stock'];
	//	$obj->sto_date_sorti_stock=$_POST['sto_date_sorti_stock'];
		$obj->sto_affactation=$_POST['sto_affactation'];
		$obj->sto_sorti_inventaire=$_POST['sto_sorti_inventaire'];
		$obj->sto_date_sorti_inventaire=$_POST['sto_date_sorti_inventaire'];
		
		$obj->sto_type_srv_ecl=$_POST['sto_type_srv_ecl'];
		$obj->sto_srv_ecl_id=$_POST['sto_srv_ecl_id'];
	
	
		$obj->save();
		echo "Enregistrement terminé !";
	}
	
	
	public function actionExportCSV() {
		
		$num_inv    = (isset ($_POST['num_inv']))? $_POST['num_inv']:"";
		$num_srv	= (isset ($_POST['num_srv']))? $_POST['num_srv']:"";
		$num_ecole	= (isset ($_POST['num_ecole']))? $_POST['num_ecole']:"";
		$nom_prod	= (isset ($_POST['nom_prod']))? $_POST['nom_prod']:"";
		$groupBy_id = (isset ($_POST['groupBy_id']))? $_POST['groupBy_id']:"";
		$hors_inv	= (isset ($_POST['hors_inv']))? $_POST['hors_inv']:"";
		$prd_ref	= (isset ($_POST['prd_ref']))? $_POST['prd_ref']:"";
		$sto_date_achat_deb = (isset ($_POST['sto_date_achat_deb']))? $_POST['sto_date_achat_deb']:"";
		$sto_date_achat_fin = (isset ($_POST['sto_date_achat_fin']))? $_POST['sto_date_achat_fin']:"";
		$fur_id 	= (isset ($_POST['fur_id']))? $_POST['fur_id']:"";
		
		$lst = PwStock::getEtatInventaire($num_inv, $num_srv, $num_ecole , $nom_prod , $groupBy_id , $hors_inv, $prd_ref, $sto_date_achat_deb, $sto_date_achat_fin, $fur_id);
	
		$csv = new PwCSV ();
 		$csv->Colonne ( "Num Inventaire ; Catégorie ; Réf Produit ; Nom Produit ; Fournisseur ; Date Achat ; Affectation ; Total ; " );
		
		foreach ( $lst as $row ) {
			$csv->Insertion ( $row['sto_num_inventaire'] . ";" . $row['sto_libele_cat'] . ";" . $row['prd_ref'] . ";" . $row['sto_libele_prd'] . ";". $row['fur_raison_social'] . ";". $row['sto_date_achat'] . ";". $row['text_affect'] . ";". $row['sto_total'] . ";");
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




















