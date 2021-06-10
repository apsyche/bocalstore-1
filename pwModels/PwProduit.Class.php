<?php
class PwProduit extends PwModel {
	const TABLE_NAME = 'produit';
	const TABLE_ID = 'prd_id';
	
	const ROW_STATUS = 'prd_del';

	function __construct($i = '') {
		parent::__construct ( $i );
	}
	
	public static function getListByCat($cat_id) {
	
		$cmd = "SELECT * from produit
		WHERE prd_del = '0' and prd_cat_id = '$cat_id' order by  prd_nom ";
		
		$prep = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
		$prep->execute ();
		$list = $prep->fetchAll ( PDO::FETCH_ASSOC );
		return $list;
	}
	
	
	public static function getFullList() {
	    
	    $cmd = "SELECT * from produit
				WHERE prd_del = '0' order by  prd_nom ";
	    $prep = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
	    $prep->execute ();
	    $list = $prep->fetchAll ( PDO::FETCH_ASSOC );
	    return $list;
	}
	
	
	public static function getSelecList() {
	    
	    $list = self::getFullList();
	    foreach ( $list as $row ) {
	        $lst [$row ['prd_id']] = $row ['prd_nom'];
	    }
	    return $lst;
	}
	
	public static function getSelecListNull() {
	    
	    $list = self::getFullList();
	    $lst[0]="-";
	    foreach ( $list as $row ) {
	        $lst [$row ['prd_id']] = $row ['prd_nom'];
	    }
	    return $lst;
	}
	
	public static function getSelecListParam($Cat) {
	    
	    $list = self::getFullList();
	    $lst[0]="-";
	    foreach ( $list as $row ) {
	        if($row ['prd_cat_id']==$Cat){
	            $lst [$row ['prd_id']] = $row ['prd_nom'];
	        }
	    }
	    return $lst;
	}
	
	
	
	protected $prd_id = "";
	protected $prd_cat_id = "";
	protected $prd_nom = "";
	protected $prd_description = "";
	protected $prd_prix_ht = "";
	protected $prd_del = "";
	

	
}










