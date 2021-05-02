<?php
class PwService extends PwModel {
	const TABLE_NAME = 'service';
	const TABLE_ID = 'srv_id';
	const ROW_STATUS = 'srv_del';

	function __construct($i = '') {
		parent::__construct ( $i );
	}
	
	
	
	
	public static function getSelectService() {
		$list = self::getFullList();
		foreach ( $list as $row ) {
			$lst [$row ['srv_id']] = $row ['srv_nom'];
		}
		return $lst;
	
	}
	
	public static function getSelectServiceNull() {
		$list = self::getFullList();
		$lst [""]="-";
		foreach ( $list as $row ) {
			$lst [$row ['srv_id']] = $row ['srv_nom'];
		}
		return $lst;
	
	}
	
	

	
	
	public static function getFullList() {
		
		$cmd = "SELECT * FROM service WHERE srv_del = '0' order by srv_nom";
		$prep = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
		$prep->execute ();
		$list = $prep->fetchAll ( PDO::FETCH_ASSOC );
		return $list;
		
	
	}
	
	protected $srv_id = "";
	protected $srv_nom = "";
	protected $srv_description = "";
	protected $srv_del = "";

	
}










