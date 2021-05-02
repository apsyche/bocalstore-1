<?php
class gedListController extends PwController {
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
	
		$listTypeDoc=PwList::getInstance()->getList("typeDocGed");
		$smarty->assign ( 'listTypeDoc', $listTypeDoc );
		
		
		$listDoc = PwGedDoc::getFullList();
		$smarty->assign ( 'listDoc', $listDoc );
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
		
		
	}
	
	
	public function actionDeleteDoc() {
		$doc_id = $_POST['ddoc_id'];
		$obj = new PwGedDoc($doc_id);
		$obj->delete();
		echo "Suppression terminée !";
	}
	
	
	public function actionAddFile() {
		$form = $_POST;
		$id = $form['gedd_id'];
	
		$obj="";
		if($id==''){
			$obj = new PwGedDoc();
		}else{
			$obj = new PwGedDoc($id);
		}

		$obj->gedd_type   = $form['gedd_type'];
		$obj->gedd_nom   = $form['gedd_nom'];
		$obj->gedd_description  = $form['gedd_description'];
	
	
		$id = $obj->save();
	
	
		$ret = false;
		$img_blob = '';
		$img_taille = 0;
		$img_type = '';
		$img_nom = '';
		$taille_max = 2500000;
	
		if(isset($_FILES['gedd_file'])){
			$img_taille = $_FILES['gedd_file']['size'];
			if ( $img_taille > $taille_max )
			{
				echo "Fichier trop grand !";
				return false;
			}
	
			$img_type = $_FILES['gedd_file']['type'];
			$img_nom = $_FILES['gedd_file']['name'];
	
	
			$ret = is_uploaded_file ($_FILES['gedd_file']['tmp_name']);
			if ( $ret == true ){
				$file = $_FILES['gedd_file']['tmp_name'];
	
				PwGedDoc::saveFile($id, $img_nom, $img_type, $img_taille, $file);
			}
		}
	
	
	
	}
	
	
	public function actionReadFile(){
	
		$url = $_SERVER ['REDIRECT_URL'];
		$tab = explode ( '!', $url );
		$id = $tab [2];
		$obj = new PwGedDoc($id);
	
		header ("Content-type: ".$obj->gedd_type_file);
		header ("Content-length: ".$obj->gedd_size_file);
		header('Content-Type: application/octet-stream');
		header("Content-disposition: attachment; filename=\"". $obj->gedd_nom_file."\"");
		echo $obj->gedd_data_file;;
	
	}
	
}