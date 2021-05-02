<?php
class PwFournisseur extends PwModel {
	const TABLE_NAME = 'fournisseur';
	const TABLE_ID = 'fur_id';
	
	const USR_CREATE_ID = 'fur_usr_create';
	const USR_UPDATE_ID = 'fur_usr_mod';
	const USR_CREATE_DATE = 'fur_date_create';
	const USR_UPDATE_DATE = 'fur_date_mod';
	const ROW_STATUS = 'fur_del';

	function __construct($i = '') {
		parent::__construct ( $i );
	}
	
	public static function getFullList() {
		
		$cmd = "SELECT * from fournisseur
				WHERE fur_del = '0' order by  fur_raison_social ";
		$prep = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
		$prep->execute ();
		$list = $prep->fetchAll ( PDO::FETCH_ASSOC );
		return $list;
	}
	
	
	public static function getSelecFournisseur() {
	
		$list = self::getFullList();
		$lst[0]="-";
		foreach ( $list as $row ) {
			$lst [$row ['fur_id']] = $row ['fur_raison_social'];
		}

		return $lst;
	}
	
	
	protected $fur_id = "";
	protected $fur_raison_social  = "";
	protected $fur_adresse = "";
	protected $fur_ville = "";
	protected $fur_cp = "";
	protected $fur_tel_1 = "";
	protected $fur_tel_2 = "";
	protected $fur_mail = "";
	protected $fur_site_internet = "";
	protected $fur_nom_corresp = "";
	protected $fur_prenom_corresp = "";
	protected $fur_tel_corresp = "";
	protected $fur_mail_corresp = "";
	protected $fur_iban = "";
	protected $fur_rib = "";
	protected $fur_usr_create = "";
	protected $fur_date_create = "";
	protected $fur_usr_mod= "";
	protected $fur_date_mod = "";
	protected $fur_del = "";

	
}










