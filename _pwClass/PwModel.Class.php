<?php
/**
 (C) 2014 DJERROUD Halim.
 
 This file is part of pwit.
 
 Pwit is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.
 
 Pwit is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License
 along with Pwit.  If not, see <http://www.gnu.org/licenses/>.
 */
require_once ("PwSuper.Class.php");
require_once ("PwInOut.Interface.php");
abstract class PwModel extends PwSuper implements PwInOut {
	/**
	 * Obligatoire
	 * Nom de la table dans la base de donnée
	 */
	const TABLE_NAME = 'undefined';
	
	/**
	 * Obligatoire
	 * Colonne de ID de la table
	 */
	const TABLE_ID = 'undefined';
	
	/**
	 * nom de la colonne de table ROW_STATUS
	 * si cette constante n'est pas redéfinie
	 * la méthode delete() suprime l'enregistrement dans la table
	 */
	const ROW_STATUS = 'undefined';
	
	/**
	 *
	 * @var unknown_type
	 */
	const USR_CREATE_ID = 'undefined';
	const USR_UPDATE_ID = 'undefined';
	const USR_CREATE_DATE = 'undefined';
	const USR_UPDATE_DATE = 'undefined';
	
	/**
	 * super constructeur
	 * appelé sans argument il créer un objet vide
	 * sinon il créer un objet avec des valeur dans la base de donnée TABLE_NAME
	 */
	public function __construct() {
		$a = func_get_args ();
		$i = func_num_args ();
		if (method_exists ( $this, $f = '__construct' . $i )) {
			call_user_func_array ( array (
					$this,
					$f 
			), $a );
		}
	}
	
	/**
	 * Constructeur vide pour créer des objet vides
	 */
	public function __construct0() {
	}
	
	/**
	 *
	 * @param String $id        	
	 * @return boolean
	 */
	public function __construct1($id) {
		$del = "";
		if ($this::ROW_STATUS != 'undefined') {
			$del = " and " . $this::ROW_STATUS . "='0'";
		}
		
		$cmd = "SELECT * FROM " . $this::TABLE_NAME . " WHERE " . $this::TABLE_ID . "=:id " . $del . ";";
		$prep = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
		$prep->bindValue ( ':id', $id, PDO::PARAM_STR );
		$prep->execute ();
		
		if ($prep->rowCount () >= 1) {
			$row = $prep->fetch ( PDO::FETCH_ASSOC );
			foreach ( $row as $key => $value ) {
				$this->$key = $value;
			}
			return true;
		} else {
			return false;
		}
	}
	
	/**
	 *
	 * @return multitype:string
	 */
	final public function getRow() {
		$myArray = array ();
		foreach ( $this as $key => $value ) {
			$myArray ["$key"] = "$value";
		}
		return $myArray;
	}
	
	/**
	 * return les attribut de l'obet dans un tableau et mettand
	 * le format Sql
	 */
	final protected function getSqlRow() {
		$myArray = array ();
		foreach ( $this as $key => $value ) {
			$value = addslashes ( $value );
			$myArray ["$key"] = "$value";
		}
		return $myArray;
	}
	
	/**
	 * Enregistrer dans la base
	 * si l'objet contien un ID alors il fait un UPDATE
	 * sinon il fait un insert
	 */
	final public function save() {
		$table_id = $this::TABLE_ID;
		if (strlen ( $this->$table_id ) != 0) {
			return $this->update ();
		}
		
		if ($this::USR_CREATE_ID != 'undefined') {
			$usrid = PwConnexion::getInstance ()->getUserId ();
			$colUsrId = $this::USR_CREATE_ID;
			$this->$colUsrId = $usrid;
		}
		
		if ($this::USR_CREATE_DATE != 'undefined') {
			$objDateTime = new DateTime ( 'NOW' );
			$colUsrDat = $this::USR_CREATE_DATE;
			$usrid = PwConnexion::getInstance ()->getUserId ();
			$this->$colUsrDat = $objDateTime->format ( "Y-m-d H:i:s" );
		}
		
		$this->$table_id = "";
		
		$row = $this->getSqlRow ();
		$k = 0;
		$filds = "";
		foreach ( $row as $key => $value ) {
			if ($k == 0)
				$sep = " ";
			else
				$sep = ",";
			$filds = $filds . $sep . $key;
			$k = 1;
		}
		$k = 0;
		$values = "";
		foreach ( $row as $key => $value ) {
			if ($k == 0)
				$sep = " ";
			else
				$sep = ",";
			$values = $values . $sep . "'" . $value . "'";
			$k = 1;
		}
		$cmd = "insert into " . $this::TABLE_NAME . "(" . $filds . ")values(" . $values . ");";
		$rid = "";
		try {
			$stmt = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
			$stmt->execute ();
			$rid = PwPDO::getInstance ( PwPDO::DB_0 )->lastInsertId ();
		} catch ( Exception $e ) {
			PwDebug::debug ( $e->getMessage (), $cmd );
			PwDebug::debugInLogFile ( $e->getMessage () . " " . $cmd );
			return 0;
		}
		return PwPDO::getInstance ( PwPDO::DB_0 )->lastInsertId ();
	}
	final protected function update() {
		if ($this::USR_UPDATE_ID != 'undefined') {
			$usrid = PwConnexion::getInstance ()->getUserId ();
			$colUsrId = $this::USR_UPDATE_ID;
			$this->$colUsrId = $usrid;
		}
		
		if ($this::USR_UPDATE_DATE != 'undefined') {
			$objDateTime = new DateTime ( 'NOW' );
			$colDatMo = $this::USR_UPDATE_DATE;
			$usrid = PwConnexion::getInstance ()->getUserId ();
			$this->$colDatMo = $objDateTime->format ( "Y-m-d H:i:s" );
		}
		
		$table_id = $this::TABLE_ID;
		$row = $this->getSqlRow ();
		$set = "";
		$k = 0;
		foreach ( $row as $key => $value ) {
			if ($k == 0)
				$sep = " ";
			else
				$sep = ",";
			$set = $set . $sep . $key . "='" . $value . "' ";
			$k = 1;
		}
		$cmd = "UPDATE " . $this::TABLE_NAME . " SET " . $set . " WHERE " . $this::TABLE_ID . " = '" . $this->$table_id . "';";
		try {
			$stmt = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
			$stmt->execute ();
		} catch ( Exception $e ) {
			PwDebug::debug ( $e->getMessage (), $cmd );
			PwDebug::debugInLogFile ( $e->getMessage () . " " . $cmd );
			return 0;
		}
		return $this->$table_id;
	}
	
	/**
	 * met le row_status a 1
	 * si la constante n'est pas défini dans la sous Class alors l'enregistrelent
	 * est suprimé réealement dans la table
	 */
	final public function delete() {
		$tabid = $this::TABLE_ID;
		if (strlen ( $this->$tabid ) == 0) {
			return false;
		}
		if ($this::ROW_STATUS != 'undefined') {
			$rowStatus = $this::ROW_STATUS;
			$this->$rowStatus = '1';
			$this->update ();
		} else {
			$cmd = "DELETE FROM " . $this::TABLE_NAME . " WHERE " . $tabid . "='" . $this->$tabid . "';";
			try {
				$stmt = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
				$stmt->execute ();
			} catch ( Exception $e ) {
				PwDebug::debug ( $e->getMessage (), $cmd );
				PwDebug::debugInLogFile ( $e->getMessage () . " " . $cmd );
				return 0;
			}
		}
		return $this->$tabid;
	}
}
