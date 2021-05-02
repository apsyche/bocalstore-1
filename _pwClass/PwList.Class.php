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
class PwList {
	private static $instance = null;
	private static $conf = "";
	private function __construct() {
		if (isset ( $_SESSION ['lang'] )) {
			$lang = $_SESSION ['lang'];
		} else {
			$lang = PwPrefs::getInstance ()->getDefaultLang ();
		}
		
		switch ($lang) {
			case 'en' :
				$ini_array = parse_ini_file ( "pwLang/en.list", true );
				break;
			case 'dt' :
				$ini_array = parse_ini_file ( "pwLang/dt.list", true );
				break;
			case 'fr' :
				$ini_array = parse_ini_file ( "pwLang/fr.list", true );
				break;
			default :
				$ini_array = parse_ini_file ( "pwLang/en.list", true );
				break;
		}
		self::$conf = $ini_array;
	}
	public static function getInstance() {
		if (is_null ( self::$instance )) {
			self::$instance = new PwList ();
			return self::$instance;
		}
		return self::$instance;
	}
	public function getList($section) {
		if (! isset ( self::$conf [$section] )) {
			return array ();
		}
		return self::$conf [$section];
	}
}