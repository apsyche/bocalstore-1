<?php
class resSearchController extends PwController {
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
		

		$date_day = array();
		$date_moth = array();
		$date_year = array();
		$date_day[]='';
		$date_moth[]='';
		$date_year[]='';
		
		for($i=0;$i<200;$i++){
		
			$date_year[$i+1900]=$i+1900;
		
			if($i<31){ $date_day[]=$i+1;  }
		
			if($i<12){ $date_moth[]=$i+1; }
		
		}
		
		$smarty->assign ( 'date_day',  $date_day  );
		$smarty->assign ( 'date_moth', $date_moth );
		$smarty->assign ( 'date_year', $date_year );
		
		
		$typePersonne = PwList::getInstance()->getList("typePersonne");
		$smarty->assign ( 'typePersonne', $typePersonne );
	}
	
	/**
	 * Après affichage
	 */
	public function actionAfterDisplay() {
		
		
	}
	
	
	public function actionSearch() {
		$res_nom = (isset($_POST['res_nom']))?$_POST['res_nom']:"";
		$res_prenom = (isset($_POST['res_prenom']))?$_POST['res_prenom']:"";
		$tSearch =  (isset($_POST['tSearch']))?$_POST['tSearch']:"";
		$ddn_a = (isset($_POST['ddn_a']))?$_POST['ddn_a']:"";   
		$ddn_m = (isset($_POST['ddn_m']))?$_POST['ddn_m']:"";
		$ddn_j = (isset($_POST['ddn_j']))?$_POST['ddn_j']:"";
		
		$date = $ddn_a.'-'.$ddn_m.'-'.$ddn_j ;
		
		if(($ddn_a == 0) ||($ddn_m == 0) ||( $ddn_j == 0)){ 
			$date  = "";
		}
		
		$list = array();
		if($tSearch == 1){
			$list = PwResident::getListSearchPersPh($res_nom,$res_prenom,$date);
		}
		if($tSearch == 2){
			$list = PwResident::getListSearchPersMor($res_nom,$res_prenom,$date);
		}
		
		$text = json_encode ( $list );
		
		echo ($text);

	}
	
	
	
	
}