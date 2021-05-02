<?php
class PwCommande extends PwModel {
	const TABLE_NAME = 'commande';
	const TABLE_ID = 'cmd_id';
	
	const USR_CREATE_ID   = 'cmd_usr_create';
	const USR_UPDATE_ID   = 'cmd_usr_modifay';
	const USR_CREATE_DATE = 'cmd_date_create';
	const USR_UPDATE_DATE = 'cmd_date_modifay';
	const ROW_STATUS 	  = 'cmd_del';

	function __construct($i = '') {
		parent::__construct ( $i );
	}
	
	public static function getFullList() {
		
		$cmd = "SELECT * from commande
				WHERE cmd_del = '0' order by  cmd_date desc";
		$prep = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
		$prep->execute ();
		$list = $prep->fetchAll ( PDO::FETCH_ASSOC );
		return $list;
	}
	
	
	public static function getSelecCommande() {
	
		$list = self::getFullList();
		$lst[0]="--";
		foreach ( $list as $row ) {
			$lst [$row ['cmd_id']] = $row ['cmd_date']. " - ". $row ['cmd_description'];
		}
	
		return $lst;
	}
	
	protected  $cmd_id = "";
	protected  $cmd_fur_id = "";
	protected  $cmd_dvi_id = "";
	protected  $cmd_date = "";
	protected  $cmd_description = "";
	protected  $cmd_usr_create = "";
	protected  $cmd_usr_modifay = "";
	protected  $cmd_date_create = "";
	protected  $cmd_date_modifay = "";
	protected  $cmd_del = "";
	
	
}










