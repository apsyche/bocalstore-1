<?php
class PwCategorie extends PwModel {
	const TABLE_NAME = 'categorie';
	const TABLE_ID = 'cat_id';
	
	const ROW_STATUS = 'cat_del';

	function __construct($i = '') {
		parent::__construct ( $i );
	}
	
	public static function getFullList() {
		
		$cmd = "SELECT * from categorie
				WHERE cat_del = '0' order by  cat_nom ";
		$prep = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
		$prep->execute ();
		$list = $prep->fetchAll ( PDO::FETCH_ASSOC );
		return $list;
	}
	

	
	public static function getListCat() {
	    $cmd = "SELECT * from categorie
				WHERE cat_del = '0'  order by  cat_nom ";
	    $prep = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
	    $prep->execute ();
	    $list = $prep->fetchAll ( PDO::FETCH_ASSOC );
	    return $list;
	}
	
	
	
	
	public static function getListCatProduit() {
		$cmd = "
				SELECT categorie.*, produit.* from categorie
				left outer join produit on (produit.prd_cat_id = categorie.cat_id)
				WHERE 
				cat_del = '0' and 
				prd_del = '0' and 
				order by  cat_nom, prd_id ";
		
		
		$prep = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
		$prep->execute ();
		$list = $prep->fetchAll ( PDO::FETCH_ASSOC );
		return $list;
	}
	
	
	
	
	public static function getSelecListNull() {
	    $list = self::getFullList();
	    $lst[0]="-";
	    foreach ( $list as $row ) {
	        $lst [$row ['cat_id']] = $row ['cat_nom'];
	    }
	    return $lst;
	}
	
	
	
	
	public static function getSelecList() {
	    
	    $list = self::getFullList();
	    foreach ( $list as $row ) {
	        $lst [$row ['cat_id']] = $row ['cat_nom'];
	    }
	    return $lst;
	}
	
	protected $cat_id = "";
	protected $cat_nom  = "";
	protected $cat_description = "";
	protected $cat_del = "";
	
}










