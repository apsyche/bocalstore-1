<?php
class PwPret extends PwModel {
	const TABLE_NAME = 'pret';
	const TABLE_ID = 'prt_id';
	

	function __construct($i = '') {
		parent::__construct ( $i );
	}
	
	public static function getListEnCoursDePret() {
	    
	    $cmd = "SELECT * FROM pret left outer join produit on (pret.prt_prd_id = produit.prd_id ) where prt_date_retour = '' order by prt_date_pret;";
	    $prep = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
	    $prep->execute ();
	    $list = $prep->fetchAll ( PDO::FETCH_ASSOC );
	    
	    return $list;
	}
	
	
	public static function getListHistorique() {
	    
	    $cmd = "SELECT * FROM pret_histo left outer join produit on (pret_histo.prt_prd_id = produit.prd_id ) where prt_date_retour <> '' order by prt_date_pret ;";
	    $prep = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
	    $prep->execute ();
	    $list = $prep->fetchAll ( PDO::FETCH_ASSOC );
	    
	    return $list;
	    
	}
	
	public static function getListEnRetard() {
	    
	    $date = date("Y-m-d");
	    
	    $cmd = "SELECT * FROM pret left outer join produit on (pret.prt_prd_id = produit.prd_id ) where 
                prt_date_retour = '' and 
                prt_date_retour_prevu < '$date'
                order by prt_date_pret ;";
	    $prep = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
	    $prep->execute ();
	    $list = $prep->fetchAll ( PDO::FETCH_ASSOC );
	    
	    return $list;
	}

	public static function setEtat($prt_id,$date,$com) {//produit rendu
	    //maj date rendu
	    
	    $cmd = "UPDATE pret SET prt_date_retour = :date WHERE prt_id=:id;";
	    $inst = PwPDO::getInstance ( PwPDO::DB_0 );
	    $prep = $inst->prepare ( $cmd );
	    $prep->bindValue( ':id', $prt_id, PDO::PARAM_INT);
	    $prep->bindValue( ':date', $date, PDO::PARAM_STR);
	    $prep->execute ();
	   
	    //change table
	    $cmd = "INSERT INTO pret_histo SELECT * FROM pret WHERE prt_id=:id;";
	    $inst = PwPDO::getInstance ( PwPDO::DB_0 );
	    $prep = $inst->prepare ( $cmd );
	    $prep->bindValue( ':id', $prt_id, PDO::PARAM_INT);
	    $prep->execute ();
	    
	    
	    //add commentaire
	    $cmd = "UPDATE pret_histo SET prt_com_rendu = :com WHERE prt_id=:id;";
	    $inst = PwPDO::getInstance ( PwPDO::DB_0 );
	    $prep = $inst->prepare ( $cmd );
	    $prep->bindValue( ':id', $prt_id, PDO::PARAM_INT);
	    $prep->bindValue( ':com', $com, PDO::PARAM_STR);
	    $prep->execute ();
	    
	    //remove tableau pret en cours
	    $cmd = "DELETE FROM pret WHERE prt_id=:id;";
	    $inst = PwPDO::getInstance ( PwPDO::DB_0 );
	    $prep = $inst->prepare ( $cmd );
	    $prep->bindValue( ':id', $prt_id, PDO::PARAM_INT);
	    $prep->execute ();
	    
	    return "Produit rendu";
	    
	}
	
	protected  $prt_id = "";
	protected  $prt_user_id ="";
	protected  $prt_sto_id = "";
	protected  $prt_prd_id ="";
	protected  $prt_nom ="";
	protected  $prt_prenom ="";
	protected  $prt_email ="";
	protected  $prt_diplome ="";
	protected  $prt_num_tel ="";
	protected  $prt_date_pret ="";
	protected  $prt_date_retour_prevu ="";
	protected  $prt_date_retour ="";
	protected  $prt_commentaire ="";
	
	
	

}










