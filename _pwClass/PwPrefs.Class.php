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
class PwPrefs {
	private static $_instance = null;
	private $project = null;
	private $version = null;
	private $defaultLang = null;
	private $prefix = null;
	private $default_timezone = null;
	private $appPath = null;
	private $rootpath = null;
	private $dsn0 = null;
	private $host0 = null;
	private $port0 = null;
	private $db0 = null;
	private $usr0 = null;
	private $pass0 = null;
	private $dsn1 = null;
	private $host1 = null;
	private $port1 = null;
	private $db1 = null;
	private $usr1 = null;
	private $pass1 = null;
	private $dsn2 = null;
	private $host2 = null;
	private $port2 = null;
	private $db2 = null;
	private $usr2 = null;
	private $pass2 = null;
	private function __construct() {
		$oFichierXml = simplexml_load_file ( '../settings.xml' );
		$this->rootpath = realpath ( "../" );
		$this->appPath = $this->rootpath . "/app";
		
		$this->project = $oFichierXml->prefs->project;
		$this->version = $oFichierXml->prefs->version;
		$this->prefix = $oFichierXml->prefs->prefix;
		$this->default_timezone = $oFichierXml->prefs->default_timezone;
		$this->defaultLang = $oFichierXml->prefs->defaultLang;
		
		$this->dsn0 = $oFichierXml->databases->db0->dsn;
		$this->host0 = $oFichierXml->databases->db0->host;
		$this->port0 = $oFichierXml->databases->db0->port;
		$this->db0 = $oFichierXml->databases->db0->dataBase;
		$this->usr0 = $oFichierXml->databases->db0->user;
		$this->pass0 = $oFichierXml->databases->db0->password;
		
		$this->dsn1 = $oFichierXml->databases->db1->dsn;
		$this->host1 = $oFichierXml->databases->db1->host;
		$this->port1 = $oFichierXml->databases->db1->port;
		$this->db1 = $oFichierXml->databases->db1->dataBase;
		$this->usr1 = $oFichierXml->databases->db1->user;
		$this->pass1 = $oFichierXml->databases->db1->password;
		
		$this->dsn2 = $oFichierXml->databases->db2->dsn;
		$this->host2 = $oFichierXml->databases->db2->host;
		$this->port2 = $oFichierXml->databases->db2->port;
		$this->db2 = $oFichierXml->databases->db2->dataBase;
		$this->usr2 = $oFichierXml->databases->db2->user;
		$this->pass2 = $oFichierXml->databases->db2->password;
	}
	public static function getInstance() {
		if (is_null ( self::$_instance )) {
			self::$_instance = new PwPrefs ();
		}
		return self::$_instance;
	}
	public function setAppPath($app) {
		$this->appPath = $this->rootpath . "/" . $app;
	}
	public function getAppPath() {
		return $this->appPath;
	}
	public function getVersion() {
		return $this->version;
	}
	public function getPrefix() {
		return $this->prefix;
	}
	public function getDefault_timezone() {
		return $this->default_timezone;
	}
	public function getDefaultLang() {
		return $this->defaultLang;
	}
	public function getProject() {
		return $this->project;
	}
	public function getParamDbConnexion($numDb, &$host, &$usr, &$pass) {
		if ($numDb == PwPDO::DB_0) {
			$host = $this->dsn0 . ":port=" . $this->port0 . ";host=" . $this->host0 . ";dbname=" . $this->db0;
			$usr = $this->usr0;
			$pass = $this->pass0;
		} elseif ($numDb == PwPDO::DB_1) {
			$host = $this->dsn1 . ":port=" . $this->port1 . ";host=" . $this->host1 . ";dbname=" . $this->db1;
			$usr = $this->usr1;
			$pass = $this->pass1;
		} elseif ($numDb == PwPDO::DB_2) {
			$host = $this->dsn2 . ":port=" . $this->port2 . ";host=" . $this->host2 . ";dbname=" . $this->db2;
			$usr = $this->usr2;
			$pass = $this->pass2;
		} else {
			throw ("Unknow DataBase Number");
		}
	}
}
