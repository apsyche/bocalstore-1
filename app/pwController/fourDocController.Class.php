<?php
class fourDocController extends PwController {
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
		
		
		$listTypeDoc=PwList::getInstance()->getList("typeDocFournisseur");
		$smarty->assign ( 'listTypeDoc', $listTypeDoc );
		
		
		$listDoc = PwFournisseurDoc::getListByFournisseur($fur_id);
		$smarty->assign ( 'listDoc', $listDoc );
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
		
		
	}
	
	
	public function actionDeleteDoc() {
		$doc_id = $_POST['doc_id'];
		$obj = new PwFournisseurDoc($doc_id);
		$obj->delete();
		echo "Suppression terminée !";
	}
	
	
	public function actionAddFile() {
		$form = $_POST;
		$id = $form['fdoc_id'];
	
		$obj="";
		if($id==''){
			$obj = new PwFournisseurDoc();
		}else{
			$obj = new PwFournisseurDoc($id);
		}
	
	
		$obj->fdoc_fur_id = $form['fdoc_fur_id'];
		$obj->fdoc_type   = $form['fdoc_type'];
		$obj->fdoc_nom   = $form['fdoc_nom'];
		$obj->fdoc_description  = $form['fdoc_description'];
	
	
		$id = $obj->save();
	
	
		$ret = false;
		$img_blob = '';
		$img_taille = 0;
		$img_type = '';
		$img_nom = '';
		$taille_max = 2500000;
	
		if(isset($_FILES['fdoc_file'])){
			$img_taille = $_FILES['fdoc_file']['size'];
			if ( $img_taille > $taille_max )
			{
				echo "Fichier trop grand !";
				return false;
			}
	
			$img_type = $_FILES['fdoc_file']['type'];
			$img_nom = $_FILES['fdoc_file']['name'];
	
	
			$ret = is_uploaded_file ($_FILES['fdoc_file']['tmp_name']);
			if ( $ret == true ){
				$file = $_FILES['fdoc_file']['tmp_name'];
	
				PwFournisseurDoc::saveFile($id, $img_nom, $img_type, $img_taille, $file);
			}
		}
	
	
	
	}
	
	
	public function actionReadFile(){
	
		$url = $_SERVER ['REDIRECT_URL'];
		$tab = explode ( '!', $url );
		$id = $tab [2];
		$obj = new PwFournisseurDoc($id);
	
	
		header ("Content-type: ".$obj->fdoc_type_file);
		header ("Content-length: ".$obj->fdoc_size_file);
		header('Content-Type: application/octet-stream');
		header("Content-disposition: attachment; filename=\"". $obj->fdoc_nom_file."\"");
		echo $obj->fdoc_data_file;;
	
	}
	
}