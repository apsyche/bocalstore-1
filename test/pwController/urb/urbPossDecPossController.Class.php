<?php
class urbPossDecPossController extends PwController {
	protected $checkConnexion = true;
	
	/**
	 * Exécuté à chque appel du controleur
	 */
	public function actionInit() {
		$smarty = PwSmarty::getInstance ();
		$date_day = array ();
		$date_moth = array ();
		$date_year = array ();
		$date_day [] = '';
		$date_moth [] = '';
		$date_year [] = '';
		

		for($i=0;$i<200;$i++){
		
			$date_year[$i+1900]=$i+1900;
		
			if($i<31){ $date_day[]=$i+1;  }
		
			if($i<12){ $date_moth[]=$i+1; }
		
		}
		
		$smarty->assign ( 'date_day',  $date_day  );
		$smarty->assign ( 'date_moth', $date_moth );
		$smarty->assign ( 'date_year', $date_year );
		
		$listVillages =PwVillage::getSelecVillages();
		$smarty->assign ( 'listVillages', $listVillages );
		
		$listProff=PwList::getInstance()->getList("profession");
		$smarty->assign ( 'listProff', $listProff );
		
		
		$listTypeDoc=PwList::getInstance()->getList("typeDoc");
		$smarty->assign ( 'listTypeDoc', $listTypeDoc );
		
		$listTypePi=PwList::getInstance()->getList("typePi");
		$smarty->assign ( 'listTypePi', $listTypePi );
		
		for($i = 0; $i < 200; $i ++) {
			
			$date_year [$i + 1900] = $i + 1900;
			
			if ($i < 31) {
				$date_day [] = $i + 1;
			}
			
			if ($i < 12) {
				$date_moth [] = $i + 1;
			}
		}

		$listDoc = array ();
		if (isset ( $_SESSION ['PwGet'] [2] )) {
			$pos_id = $_SESSION ['PwGet'][2];
			
			$listDoc= PwPossessionDoc::getListByPoss($pos_id);
			
			$pos= new PwPossession($pos_id);
			
			$smarty->assign ( 'pos_id', $pos_id );
			$smarty->assign ( 'pos_sexe', $pos->pos_sexe);
			$smarty->assign ( 'pos_nom', $pos->pos_nom);
			$smarty->assign ( 'pos_nom_jf', $pos->pos_nom_jf);
			$smarty->assign ( 'pos_prenom', $pos->pos_prenom);
			
			$ddn = date_parse($pos->pos_ddn);
			$smarty->assign ( 'pos_ddn_j', $ddn['day']);
			$smarty->assign ( 'pos_ddn_m', $ddn['month']);
			$smarty->assign ( 'pos_ddn_a', $ddn['year']);
			
	
			$smarty->assign ( 'pos_lieu_naissance', $pos->pos_lieu_naissance);
			$smarty->assign ( 'pos_adresse', $pos->pos_adresse);
			$smarty->assign ( 'pos_village', $pos->pos_village);
			$smarty->assign ( 'pos_nom_pere', $pos->pos_nom_pere);
			$smarty->assign ( 'pos_nom_mere', $pos->pos_nom_mere);
			$smarty->assign ( 'pos_profession', $pos->pos_profession);
			$smarty->assign ( 'pos_type_pi', $pos->pos_type_pi);
			$smarty->assign ( 'pos_numero_pi', $pos->pos_numero_pi);
			
			$datePi = date_parse($pos->pos_date_deliv_pi);
			$smarty->assign ( 'pos_date_pi_j', $datePi['day']);
			$smarty->assign ( 'pos_date_pi_m', $datePi['month']);
			$smarty->assign ( 'pos_date_pi_a', $datePi['year']);
			
			$smarty->assign ( 'pos_deliv_par_pi', $pos->pos_deliv_par_pi);
			$smarty->assign ( 'pos_tem1_nom', $pos->pos_tem1_nom);
			$smarty->assign ( 'pos_tem1_nom_jf', $pos->pos_tem1_nom_jf);
			$smarty->assign ( 'pos_tem1_prenom', $pos->pos_tem1_prenom);
			$smarty->assign ( 'pos_tem1_sexe', $pos->pos_tem1_sexe);
			$smarty->assign ( 'pos_tem1_nom_pere', $pos->pos_tem1_nom_pere);
			$smarty->assign ( 'pos_tem1_nom_mere', $pos->pos_tem1_nom_mere);
			$smarty->assign ( 'pos_tem1_proff', $pos->pos_tem1_proff);
			
			$ddnTem1 = date_parse($pos->pos_tem1_ddn);
			$smarty->assign ( 'pos_tem1_ddn_j', $ddnTem1['day']);
			$smarty->assign ( 'pos_tem1_ddn_m', $ddnTem1['month']);
			$smarty->assign ( 'pos_tem1_ddn_a', $ddnTem1['year']);
			
			$smarty->assign ( 'pos_tem1_lieu_naiss', $pos->pos_tem1_lieu_naiss);
			$smarty->assign ( 'pos_tem1_address', $pos->pos_tem1_address);
			$smarty->assign ( 'pos_tem1_village', $pos->pos_tem1_village);
			$smarty->assign ( 'pos_tem1_type_pi', $pos->pos_tem1_type_pi);
			$smarty->assign ( 'pos_tem1_numero_pi', $pos->pos_tem1_numero_pi);
			$datePiTem1 = date_parse($pos->pos_tem1_date_deliv_pi);
			$smarty->assign ( 'pos_tem1_date_deliv_pi_j', $datePiTem1['day']);
			$smarty->assign ( 'pos_tem1_date_deliv_pi_m', $datePiTem1['month']);
			$smarty->assign ( 'pos_tem1_date_deliv_pi_a', $datePiTem1['year']);
			$smarty->assign ( 'pos_tem1_deliv_par_pi', $pos->pos_tem1_deliv_par_pi);
			$smarty->assign ( 'pos_tem2_nom', $pos->pos_tem2_nom);
			$smarty->assign ( 'pos_tem2_nom_jf', $pos->pos_tem2_nom_jf);
			$smarty->assign ( 'pos_tem2_prenom', $pos->pos_tem2_prenom);
			$smarty->assign ( 'pos_tem2_sexe', $pos->pos_tem2_sexe);
			$smarty->assign ( 'pos_tem2_nom_pere', $pos->pos_tem2_nom_pere);
			$smarty->assign ( 'pos_tem2_nom_mere', $pos->pos_tem2_nom_mere);
			$smarty->assign ( 'pos_tem2_proff', $pos->pos_tem2_proff);
			$ddnTem2 = date_parse($pos->pos_tem2_ddn);
			$smarty->assign ( 'pos_tem2_ddn_j', $ddnTem2['day']);
			$smarty->assign ( 'pos_tem2_ddn_m', $ddnTem2['month']);
			$smarty->assign ( 'pos_tem2_ddn_a', $ddnTem2['year']);
			$smarty->assign ( 'pos_tem2_lieu_naiss', $pos->pos_tem2_lieu_naiss);
			$smarty->assign ( 'pos_tem2_address', $pos->pos_tem2_address);
			$smarty->assign ( 'pos_tem2_village', $pos->pos_tem2_village);
			$smarty->assign ( 'pos_tem2_type_pi', $pos->pos_tem2_type_pi);
			$smarty->assign ( 'pos_tem2_numero_pi', $pos->pos_tem2_numero_pi);
			$datePiTem2 = date_parse($pos->pos_tem2_date_deliv_pi);
			$smarty->assign ( 'pos_tem2_date_deliv_pi_j', $datePiTem2['day']);
			$smarty->assign ( 'pos_tem2_date_deliv_pi_m', $datePiTem2['month']);
			$smarty->assign ( 'pos_tem2_date_deliv_pi_a', $datePiTem2['year']);
			$smarty->assign ( 'pos_tem2_deliv_par_pi', $pos->pos_tem2_deliv_par_pi);
			$smarty->assign ( 'pos_ter_natur', $pos->pos_ter_natur);
			$smarty->assign ( 'pos_ter_superficie', $pos->pos_ter_superficie);
			$smarty->assign ( 'pos_ter_lieu_dit', $pos->pos_ter_lieu_dit);
			$smarty->assign ( 'pos_ter_quartier', $pos->pos_ter_quartier);
			$smarty->assign ( 'pos_ter_rue', $pos->pos_ter_rue);
			$smarty->assign ( 'pos_ter_village', $pos->pos_ter_village);
			$smarty->assign ( 'pos_ter_Nord', $pos->pos_ter_Nord);
			$smarty->assign ( 'pos_ter_sud', $pos->pos_ter_sud);
			$smarty->assign ( 'pos_ter_est', $pos->pos_ter_est);
			$smarty->assign ( 'pos_ter_ouest', $pos->pos_ter_ouest);
		} else {
			$smarty->assign ( 'pos_id', "" );
			$smarty->assign ( 'pos_sexe', "");
			$smarty->assign ( 'pos_nom', "" );
			$smarty->assign ( 'pos_nom_jf', "" );
			$smarty->assign ( 'pos_prenom', "" );
			
			$smarty->assign ( 'pos_ddn', "" );
			$smarty->assign ( 'pos_ddn_j', '');
			$smarty->assign ( 'pos_ddn_m', '');
			$smarty->assign ( 'pos_ddn_a', '');
			$smarty->assign ( 'pos_lieu_naissance', "" );
			$smarty->assign ( 'pos_adresse', "" );
			$smarty->assign ( 'pos_village', "" );
			$smarty->assign ( 'pos_nom_pere', "" );
			$smarty->assign ( 'pos_nom_mere', "" );
			$smarty->assign ( 'pos_profession', "" );
			$smarty->assign ( 'pos_type_pi', "" );
			$smarty->assign ( 'pos_numero_pi', "" );
			$smarty->assign ( 'pos_date_deliv_pi', "" );
			$smarty->assign ( 'pos_date_pi_j', '');
			$smarty->assign ( 'pos_date_pi_m', '');
			$smarty->assign ( 'pos_date_pi_a', '');
			$smarty->assign ( 'pos_deliv_par_pi', "" );
			$smarty->assign ( 'pos_tem1_nom', "" );
			$smarty->assign ( 'pos_tem1_prenom', "" );
			$smarty->assign ( 'pos_tem1_sexe', "" );
			$smarty->assign ( 'pos_tem1_nom_pere', "" );
			$smarty->assign ( 'pos_tem1_nom_mere', "" );
			$smarty->assign ( 'pos_tem1_nom_jf', "");
			$smarty->assign ( 'pos_tem1_proff', "" );
			$smarty->assign ( 'pos_tem1_ddn', "" );
			$smarty->assign ( 'pos_tem1_ddn_j', "");
			$smarty->assign ( 'pos_tem1_ddn_m', "");
			$smarty->assign ( 'pos_tem1_ddn_a', "");
			$smarty->assign ( 'pos_tem1_lieu_naiss', "" );
			$smarty->assign ( 'pos_tem1_address', "" );
			$smarty->assign ( 'pos_tem1_village', "" );
			$smarty->assign ( 'pos_tem1_type_pi', "" );
			$smarty->assign ( 'pos_tem1_numero_pi', "" );
			$smarty->assign ( 'pos_tem1_date_deliv_pi', "" );
			
			$smarty->assign ( 'pos_tem1_date_deliv_pi_j', "");
			$smarty->assign ( 'pos_tem1_date_deliv_pi_m', "");
			$smarty->assign ( 'pos_tem1_date_deliv_pi_a', "");
			
			$smarty->assign ( 'pos_tem1_deliv_par_pi', "" );
			$smarty->assign ( 'pos_tem2_nom', "" );
			$smarty->assign ( 'pos_tem2_prenom', "" );
			$smarty->assign ( 'pos_tem2_sexe', "" );
			$smarty->assign ( 'pos_tem2_nom_pere', "" );
			$smarty->assign ( 'pos_tem2_nom_mere', "" );
			$smarty->assign ( 'pos_tem2_nom_jf', "");
			$smarty->assign ( 'pos_tem2_proff', "" );
			$smarty->assign ( 'pos_tem2_ddn', "" );
			$smarty->assign ( 'pos_tem2_ddn_j', "");
			$smarty->assign ( 'pos_tem2_ddn_m', "");
			$smarty->assign ( 'pos_tem2_ddn_a', "");
			$smarty->assign ( 'pos_tem2_date_pi_j', '');
			$smarty->assign ( 'pos_tem2_date_pi_m', '');
			$smarty->assign ( 'pos_tem2_date_pi_a', '');
			$smarty->assign ( 'pos_tem2_lieu_naiss', "" );
			$smarty->assign ( 'pos_tem2_address', "" );
			$smarty->assign ( 'pos_tem2_village', "" );
			$smarty->assign ( 'pos_tem2_type_pi', "" );
			$smarty->assign ( 'pos_tem2_numero_pi', "" );
			$smarty->assign ( 'pos_tem2_date_deliv_pi', "" );
			$smarty->assign ( 'pos_tem2_date_deliv_pi_j', "");
			$smarty->assign ( 'pos_tem2_date_deliv_pi_m', "");
			$smarty->assign ( 'pos_tem2_date_deliv_pi_a', "");
			$smarty->assign ( 'pos_tem2_deliv_par_pi', "" );
			$smarty->assign ( 'pos_ter_natur', "" );
			$smarty->assign ( 'pos_ter_superficie', "" );
			$smarty->assign ( 'pos_ter_lieu_dit', "" );
			$smarty->assign ( 'pos_ter_quartier', "" );
			$smarty->assign ( 'pos_ter_rue', "" );
			$smarty->assign ( 'pos_ter_village', "" );
			$smarty->assign ( 'pos_ter_Nord', "" );
			$smarty->assign ( 'pos_ter_est', "" );
			$smarty->assign ( 'pos_ter_sud', "");
			$smarty->assign ( 'pos_ter_ouest', "");
		}
		$smarty->assign ( 'listDoc', $listDoc );
	}
	
	/**
	 * avant affichage
	 */
	public function actionBeforDisplay() {
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
	}
	
	public function actionDelete() {
		$pos_id = $_POST['pos_id'];
		$obj = new PwPossession($pos_id);
		$obj->delete();
		echo "Suppression terminée !";
	}
	
	
	
	public function actionSave() {
		
		$pos_id = $_POST['pos_id'];
		$obj;

		
		if($pos_id==''){
			$obj = new PwPossession();
		}else{
			$obj = new PwPossession($pos_id);
		}
		
		
 		$obj->pos_nom= $_POST['pos_nom'];
 		$obj->pos_nom_jf= $_POST['pos_nom_jf'];
 		$obj->pos_nom_pere= $_POST['pos_nom_pere'];
 		$obj->pos_nom_mere= $_POST['pos_nom_mere'];
 		$obj->pos_prenom= $_POST['pos_prenom'];
 		
 		$sexe="";
 		if($_POST['pos_sexe']==1) $sexe = 1;
 		if($_POST['pos_sexe']==2) $sexe = 2;
 		$obj->pos_sexe= $sexe;
 		
 		
 		$obj->pos_ddn= $_POST['pos_ddn_a']."-".$_POST['pos_ddn_m']."-".$_POST['pos_ddn_j'];
 		$obj->pos_lieu_naissance= $_POST['pos_lieu_naissance'];
 		$obj->pos_adresse= $_POST['pos_adresse'];
 		$obj->pos_village= $_POST['pos_village'];
 		$obj->pos_profession= $_POST['pos_profession'];
 		
 		$obj->pos_type_pi= $_POST['pos_type_pi'];
 		$obj->pos_numero_pi= $_POST['pos_numero_pi'];
 		$obj->pos_date_deliv_pi= $_POST['pos_pi_a']."-".$_POST['pos_pi_m']."-".$_POST['pos_pi_j'];
 		$obj->pos_deliv_par_pi= $_POST['pos_deliv_par_pi'];
 		
 		
 		if($_POST['pos_tem1_sexe']==1) $sexe = 1;
 		if($_POST['pos_tem1_sexe']==2) $sexe = 2;
 		$obj->pos_tem1_sexe= $sexe;
 		
 		$obj->pos_tem1_nom= $_POST['pos_tem1_nom'];
 		$obj->pos_tem1_nom_jf= $_POST['pos_tem1_nom_jf'];
 		$obj->pos_tem1_prenom= $_POST['pos_tem1_prenom'];
 		$obj->pos_tem1_nom_pere= $_POST['pos_tem1_nom_pere'];
 		$obj->pos_tem1_nom_mere= $_POST['pos_tem1_nom_mere'];
 		$obj->pos_tem1_proff= $_POST['pos_tem1_proff'];
 		$obj->pos_tem1_ddn= $_POST['pos_tem1_ddn_a']."-".$_POST['pos_tem1_ddn_m']."-".$_POST['pos_tem1_ddn_j'];
 		$obj->pos_tem1_lieu_naiss= $_POST['pos_tem1_lieu_naiss'];
 		$obj->pos_tem1_address= $_POST['pos_tem1_address'];
 		$obj->pos_tem1_village= $_POST['pos_tem1_village'];
 		$obj->pos_tem1_type_pi= $_POST['pos_tem1_type_pi'];
 		$obj->pos_tem1_numero_pi= $_POST['pos_tem1_numero_pi'];
 		$obj->pos_tem1_date_deliv_pi= $_POST['pos_tem1_date_deliv_pi_a']."-".$_POST['pos_tem1_date_deliv_pi_m']."-".$_POST['pos_tem1_date_deliv_pi_j'];
 		$obj->pos_tem1_deliv_par_pi= $_POST['pos_tem1_deliv_par_pi'];

 		$obj->pos_tem2_nom= $_POST['pos_tem2_nom'];
 		$obj->pos_tem2_nom_jf= $_POST['pos_tem2_nom_jf'];
 		$obj->pos_tem2_prenom= $_POST['pos_tem2_prenom'];
 		$obj->pos_tem2_nom_pere= $_POST['pos_tem2_nom_pere'];
 		$obj->pos_tem2_nom_mere= $_POST['pos_tem2_nom_mere'];
 		$obj->pos_tem2_proff= $_POST['pos_tem2_proff'];
 		$obj->pos_tem2_ddn= $_POST['pos_tem2_ddn_a']."-".$_POST['pos_tem2_ddn_m']."-".$_POST['pos_tem2_ddn_j'];
 		$obj->pos_tem2_lieu_naiss= $_POST['pos_tem2_lieu_naiss'];
 		$obj->pos_tem2_address= $_POST['pos_tem2_address'];
 		$obj->pos_tem2_village= $_POST['pos_tem2_village'];
 		$obj->pos_tem2_type_pi= $_POST['pos_tem2_type_pi'];
 		$obj->pos_tem2_numero_pi= $_POST['pos_tem2_numero_pi'];
 		$obj->pos_tem2_date_deliv_pi= $_POST['pos_tem2_date_deliv_pi_a']."-".$_POST['pos_tem2_date_deliv_pi_m']."-".$_POST['pos_tem2_date_deliv_pi_j'];
 		$obj->pos_tem2_deliv_par_pi= $_POST['pos_tem2_deliv_par_pi'];
 			
 		$obj->pos_ter_natur= $_POST['pos_ter_natur'];
 		$obj->pos_ter_superficie= $_POST['pos_ter_superficie'];
 		$obj->pos_ter_lieu_dit= $_POST['pos_ter_lieu_dit'];
 		$obj->pos_ter_quartier= $_POST['pos_ter_quartier'];
 		$obj->pos_ter_rue= $_POST['pos_ter_rue'];
 		$obj->pos_ter_village= $_POST['pos_ter_village'];
 		$obj->pos_ter_Nord= $_POST['pos_ter_Nord'];
 		$obj->pos_ter_sud= $_POST['pos_ter_sud'];
 		$obj->pos_ter_est= $_POST['pos_ter_est'];
 		$obj->pos_ter_ouest= $_POST['pos_ter_ouest'];
 		
		$pos_id = $obj->save();
		echo $pos_id;
	}
	
	
	public function actionAddFile() {
		$form = $_POST;
		$id = $form['possDoc_id'];
	
		$obj="";
		if($id==''){
			$obj = new PwPossessionDoc();
		}else{
			$obj = new PwPossessionDoc($id);
		}
	
	
		$obj->pdoc_pos_id = $form['possDoc_pos_id'];
		$obj->pdoc_type   = $form['possDoc_type'];
		$obj->pdoc_nom    = $form['possDoc_nom'];
		$obj->pdoc_description  = $form['possDoc_description'];
	
	
		$id = $obj->save();
	
	
		$ret = false;
		$img_blob = '';
		$img_taille = 0;
		$img_type = '';
		$img_nom = '';
		$taille_max = 2500000;
	
		if(isset($_FILES['possDoc_file'])){
			$img_taille = $_FILES['possDoc_file']['size'];
			if ( $img_taille > $taille_max )
			{
				echo "Fichier trop grand !";
				return false;
			}
	
			$img_type = $_FILES['possDoc_file']['type'];
			$img_nom = $_FILES['possDoc_file']['name'];
	
	
			$ret = is_uploaded_file ($_FILES['possDoc_file']['tmp_name']);
			if ( $ret == true ){
				$file = $_FILES['possDoc_file']['tmp_name'];
	
				PwPossessionDoc::saveFile($id, $img_nom, $img_type, $img_taille, $file);
			}
		}
	
	
	
	}
	
	
	public function actionReadFile(){
	
		$url = $_SERVER ['REDIRECT_URL'];
		$tab = explode ( '!', $url );
		$id  = $tab [3];
		$obj = new PwPossessionDoc($id);
	
		header ("Content-type: ".$obj->pdoc_type_file);
		header ("Content-length: ".$obj->pdoc_size_file);
		header('Content-Type: application/octet-stream');
		header("Content-disposition: attachment; filename=\"". $obj->pdoc_nom_file."\"");
		echo $obj->pdoc_data_file;;
	
	}
	
	public function actionDeleteDoc() {
		$p_doc_id = $_POST ['p_doc_id'];
		$obj = new PwPossessionDoc ( $p_doc_id );
		$obj->delete ();
		echo "Suppression terminée !";
	}
	
}