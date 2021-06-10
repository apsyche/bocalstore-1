<?php
class PwUser extends PwModel {
	const TABLE_NAME = 'user';
	const TABLE_ID = 'usr_id';
	const ROW_STATUS = 'usr_deleted';
	const USR_CREATE_ID = 'usr_usr_create';
	const USR_UPDATE_ID = 'usr_usr_modify';
	const USR_CREATE_DATE = 'usr_date_create';
	const USR_UPDATE_DATE = 'usr_date_modify';
	function __construct($i = '') {
		parent::__construct ( $i );
	}
	
	/**
	 * checkPassword
	 *
	 * @param String $userId        	
	 * @param
	 *        	String MD5 $pass
	 */
	public static function checkPassword($login, $pass, &$usrid = "") {

		$cmd = "SELECT usr_id FROM user
				WHERE 
				user.usr_login=:login
				and user.usr_psw=:pass
				and user.usr_active = '1'
				and user.usr_deleted = '0'
				;";
		$prep = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
		$prep->bindValue ( ':login', $login, PDO::PARAM_STR );// pas compris
		$prep->bindValue ( ':pass', $pass, PDO::PARAM_STR );// pas compris
		$prep->execute ();
		if ($prep->rowCount () >= 1) {
			$obj = $prep->fetch ( PDO::FETCH_OBJ );
			$usrid = $obj->usr_id;
			return true;
		}
		return false;
	}
	
	
	
	public static function checkDeleteRight($login, $pass) {
	
		$cmd = "SELECT usr_right_delete FROM user
				WHERE
				user.usr_login=:login
				and user.usr_psw=:pass
				and user.usr_active = '1'
				and user.usr_deleted = '0'
				;";
		$prep = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
		$prep->bindValue ( ':login', $login, PDO::PARAM_STR );
		$prep->bindValue ( ':pass', $pass, PDO::PARAM_STR );
		$prep->execute ();
		if ($prep->rowCount () >= 1) {
			$obj = $prep->fetch ( PDO::FETCH_OBJ );
			return $obj->usr_right_delete;;
		}
		return 0;
	}
	
	public static function getFullList() {
		$cmd = "select *    from user 
				where USR_DELETED <> 1 order by  
				usr_lname,usr_fname, usr_login;";
		$prep = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
		$prep->execute ();
		$list = $prep->fetchAll ( PDO::FETCH_ASSOC );
		
		return $list;
	}
	
	protected $usr_id = "";
	protected $usr_lname = "";
	protected $usr_fname = "";
	protected $usr_login = "";
	protected $usr_psw = "";
	protected $usr_mail = "";
	protected $usr_active = "";
	
	protected $usr_right_param = "";
	protected $usr_right_four = "";
	protected $usr_right_cmd = "";
	protected $usr_right_inv = "";
	protected $usr_right_pret = "";
	protected $usr_right_ged = "";
	protected $usr_right_lecture = "";

	protected $usr_deleted = "";
	protected $usr_date_create = "";
	protected $usr_date_modify = "";
	protected $usr_usr_create = "";
	protected $usr_usr_modify = "";
	
}




