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
class PwPDO {
	const DB_0 = 0;
	const DB_1 = 1;
	const DB_2 = 2;
	private static $instance0 = null;
	private static $instance1 = null;
	private static $instance2 = null;
	private $PDOInstance = null;
	private $dsn = "";
	private $host = "";
	private $port = "";
	private $dataBase = "";
	private $user = "";
	private $password = "";
	private function __construct($numDb) {
		$host = "";
		$usr = "";
		$pass = "";
		$pwPrefs = PwPrefs::getInstance ()->getParamDbConnexion ( $numDb, $host, $usr, $pass );
		try {
			$this->PDOInstance = new PDO ( $host, $usr, $pass );
			$this->PDOInstance->setAttribute ( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
		} catch ( Exception $e ) {
			PwDebug::debug ( $e->getMessage () );
			PwDebug::debugInLogFile ( $e->getMessage () );
		}
	}
	
	/**
	 * Crée et retourne l'objet PwPDO
	 *
	 * @access public
	 * @static
	 *
	 * @param
	 *        	void
	 * @return PwPDO $instance
	 */
	public static function getInstance($db) {
		if ($db == self::DB_0) {
			if (is_null ( self::$instance0 )) {
				self::$instance0 = new PwPDO ( self::DB_0 );
				self::$instance0->exec ( "SET CHARACTER SET utf8" );
				self::$instance0->exec ( "SET SESSION sql_mode='ALLOW_INVALID_DATES'" );
			}
			return self::$instance0;
		} elseif ($db == self::DB_1) {
			if (is_null ( self::$instance1 )) {
				self::$instance1 = new PwPDO ( self::DB_1 );
				self::$instance0->exec ( "SET CHARACTER SET utf8" );
				self::$instance0->exec ( "SET SESSION sql_mode='ALLOW_INVALID_DATES'" );
			}
			return self::$instance1;
		} elseif ($db == self::DB_2) {
			if (is_null ( self::$instance2 )) {
				self::$instance2 = new PwPDO ( self::DB_2 );
				self::$instance0->exec ( "SET CHARACTER SET utf8" );
				self::$instance0->exec ( "SET SESSION sql_mode='ALLOW_INVALID_DATES'" );
			}
			return self::$instance2;
		} else {
			throw ("Unknow database");
		}
	}
	
	/**
	 * Initiates a transaction >> Attention MyIsam non supporté
	 *
	 * @return bool
	 */
	public function beginTransaction() {
		return $this->PDOInstance->beginTransaction ();
	}
	/**
	 * Commits a transaction
	 *
	 * @return bool
	 */
	public function commit() {
		return $this->PDOInstance->commit ();
	}
	/**
	 * Fetch the SQLSTATE associated with the last operation on the database handle
	 *
	 * @return string
	 */
	public function errorCode() {
		return $this->PDOInstance->errorCode ();
	}
	/**
	 * Fetch extended error information associated with the last operation on the database handle
	 *
	 * @return array
	 */
	public function errorInfo() {
		return $this->PDOInstance->errorInfo ();
	}
	/**
	 * Execute an SQL statement and return the number of affected rows
	 *
	 * @param string $statement        	
	 */
	public function exec($statement) {
		return $this->PDOInstance->exec ( $statement );
	}
	/**
	 * Retrieve a database connection attribute
	 *
	 * @param int $attribute        	
	 * @return mixed
	 */
	public function getAttribute($attribute) {
		return $this->PDOInstance->getAttribute ( $attribute );
	}
	
	/**
	 * Return an array of available PDO drivers
	 *
	 * @return array
	 */
	public function getAvailableDrivers() {
		return $this->PDOInstance->getAvailableDrivers ();
	}
	/**
	 * Returns the ID of the last inserted row or sequence value
	 *
	 * @param string $name
	 *        	Name of the sequence object from which the ID should be returned.
	 * @return string
	 */
	public function lastInsertId($name = null) {
		return $this->PDOInstance->lastInsertId ( $name );
	}
	/**
	 * Prepares a statement for execution and returns a statement object
	 *
	 * @param string $statement
	 *        	A valid SQL statement for the target database server
	 * @param array $driver_options
	 *        	Array of one or more key=>value pairs to set attribute values for the PDOStatement obj
	 *        	returned
	 * @return PDOStatement
	 */
	public function prepare($statement, $driver_options = false) {
		if (! $driver_options)
			$driver_options = array ();
		try {
			$stmt = $this->PDOInstance->prepare ( $statement, $driver_options );
		} catch ( Exception $e ) {
			PwDebug::debug ( $e->getMessage (), $e->getCode () );
			PwDebug::debugInLogFile ( $e->getMessage () . " " . $e->getCode () );
		}
		return $stmt;
	}
	/**
	 * Executes an SQL statement, returning a result set as a PDOStatement object
	 *
	 * @param string $statement        	
	 * @return PDOStatement
	 */
	public function query($statement) {
		return $this->PDOInstance->query ( $statement );
	}
	/**
	 * Execute query and return all rows in assoc array
	 *
	 * @param string $statement        	
	 * @return array
	 */
	public function queryFetchAllAssoc($statement) {
		return $this->PDOInstance->query ( $statement )->fetchAll ( PDO::FETCH_ASSOC );
	}
	/**
	 * Execute query and return one row in assoc array
	 *
	 * @param string $statement        	
	 * @return array
	 */
	public function queryFetchRowAssoc($statement) {
		return $this->PDOInstance->query ( $statement )->fetch ( PDO::FETCH_ASSOC );
	}
	/**
	 * Execute query and select one column only
	 *
	 * @param string $statement        	
	 * @return mixed
	 */
	public function queryFetchColAssoc($statement) {
		return $this->PDOInstance->query ( $statement )->fetchColumn ();
	}
	/**
	 * Quotes a string for use in a query
	 *
	 * @param string $input        	
	 * @param int $parameter_type        	
	 * @return string
	 */
	public function quote($input, $parameter_type = 0) {
		return $this->PDOInstance->quote ( $input, $parameter_type );
	}
	/**
	 * Rolls back a transaction
	 *
	 * @return bool
	 */
	public function rollBack() {
		return $this->PDOInstance->rollBack ();
	}
	/**
	 * Set an attribute
	 *
	 * @param int $attribute        	
	 * @param mixed $value        	
	 * @return bool
	 */
	public function setAttribute($attribute, $value) {
		return $this->PDOInstance->setAttribute ( $attribute, $value );
	}
}
