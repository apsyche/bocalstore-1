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
class PwConnexion {
	protected $isLogged = false;
	protected $userId = "";
	private function __construct() {
		if (isset ( $_SESSION ['isLogged'] )) {
			$this->userId = $_SESSION ['userId'];
			$this->isLogged = true;
		} else {
			$this->userId = "";
			$this->isLogged = false;
		}
	}
	public static function logIn($login, $pass) {
		$isOk = PwUser::checkPassword ( $login, $pass, $userId );
		if ($isOk === true) {
			$_SESSION ['isLogged'] = true;
			$_SESSION ['userId'] = $userId;
			return true;
		}
		return false;
	}
	public function logOut() {
		$_SESSION ['isloged'] = false;
		$_SESSION ['userId'] = "";
		$this->isLogged = false;
		$this->userId = "";
		session_destroy ();
	}
	public static function checkConnexion() {
		$connnexion = self::getInstance ();
		if ($connnexion->isLogged === false) {
			header ( "Location: " . "../index.php" );
			exit ();
		} else {
			return true;
		}
	}
	public static function getInstance() {
		static $connexion;
		if (isset ( $connexion ) === false) {
			$connexion = new PwConnexion ();
		}
		return $connexion;
	}
	public function isLogged() {
		return $this->isLogged;
	}
	public function getUserId() {
		return $this->userId;
	}
}
