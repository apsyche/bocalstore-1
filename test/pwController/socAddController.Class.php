<?php
class socAddController extends PwController {
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
		
		
		$listVillages =PwVillage::getSelecVillages();		
		$smarty->assign ( 'listVillages', $listVillages );
		
		$listProff=PwList::getInstance()->getList("profession");
		$smarty->assign ( 'listProff', $listProff );
		
		
		$listTypeDoc=PwList::getInstance()->getList("typeDoc");
		$smarty->assign ( 'listTypeDoc', $listTypeDoc );
		
		$listGend = PwList::getInstance()->getList("gender");
		$smarty->assign('listGend', $listGend);
		
		$listYesNo = PwList::getInstance()->getList("yesNo");
		$smarty->assign('listYesNo', $listYesNo);
		
		$listDoc = array();
		$id_res = $_SESSION ['PwGet'][1];
		
		$listDoc= PwSocialDoc::getListBySocial($id_res);
		$smarty->assign ( 'listDoc', $listDoc );
		
		$res= new PwResident($id_res);
		$smarty->assign ( 'resRow', $res->getRow());
		
		$listSoc = PwSocial::getListByResident($id_res);
		$smarty->assign ( 'listSoc', $listSoc );
		
	
		$aideSocial= PwList::getInstance()->getList("aideSocial");
		$smarty->assign ( 'aideSocial', $aideSocial);
		
		
		
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
		
		
	}
	
	
	public function actionSaveDisplay() {
		
	
	}
	
	public function actionDelete() {
		$soc_id = $_POST['soc_id'];
		$obj = new PwSocial($soc_id);
		$obj->delete();
		echo "Suppsocsion terminée !";
	}
	
	
	public function actionDeleteDoc() {
		$soc_doc_id = $_POST['soc_doc_id'];
		$obj = new PwSocialDoc($soc_doc_id);
		$obj->delete();
		echo "Suppsocsion terminée !";
	}
	

	

	
	
	public function actionAddFile() {
		$form = $_POST;
		$id = $form['rdoc_id'];

		$obj="";
		if($id==''){
			$obj = new PwSocialDoc();
		}else{
			$obj = new PwSocialDoc($id);
		}
		
		
		$obj->rdoc_soc_id = $form['rdoc_soc_id'];
		$obj->rdoc_type   = $form['rdoc_type'];
		$obj->rdoc_nom   = $form['rdoc_nom'];
		$obj->rdoc_description  = $form['rdoc_description'];
		
		
		$id = $obj->save();
		
		
		$ret = false;
		$img_blob = '';
		$img_taille = 0;
		$img_type = '';
		$img_nom = '';
		$taille_max = 2500000;
		
		if(isset($_FILES['rdoc_file'])){
			$img_taille = $_FILES['rdoc_file']['size'];
			if ( $img_taille > $taille_max )
			{
				echo "Fichier trop grand !";
				return false;
			}
		
			$img_type = $_FILES['rdoc_file']['type'];
			$img_nom = $_FILES['rdoc_file']['name'];
				
				
			$ret = is_uploaded_file ($_FILES['rdoc_file']['tmp_name']);
			if ( $ret == true ){
				$file = $_FILES['rdoc_file']['tmp_name'];
	
				PwSocialDoc::saveFile($id, $img_nom, $img_type, $img_taille, $file);
			}
		}
		
		
		
	}
	
	
	public function actionReadFile(){
		
		$url = $_SERVER ['REDIRECT_URL'];
		$tab = explode ( '!', $url );
		$id = $tab [2];
		$obj = new PwSocialDoc($id);
		

		header ("Content-type: ".$obj->rdoc_type_file);
		header ("Content-length: ".$obj->rdoc_size_file);
		header('Content-Type: application/octet-stream');
		header("Content-disposition: attachment; filename=\"". $obj->rdoc_nom_file."\"");
		echo $obj->rdoc_data_file;;
		
	}
	
	
	
	public function actionAddAide() {

		$obj = new PwSocial();

		$obj->soc_res_id = $_POST['res_id']; 
		$obj->soc_date= $_POST['soc_date'];
		$obj->soc_type= $_POST['soc_type'];
		$obj->soc_commentaire= $_POST['soc_commentaire'];
		$obj->soc_montant= $_POST['soc_montant'];
		$obj->save();
		echo $_POST['res_id']; 
	}
	
	public function actionDeleteAide() {
	
		$obj = new PwSocial( $_POST['soc_id']);
		$obj->delete();
		echo  "Suppression Terminée ! ";
	}
	
	
	
	
	
}