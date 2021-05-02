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
class PwSmarty {
	private static $instance = null;
	private function __construct() {
	}
	public static function getInstance() {
		if (is_null ( self::$instance )) {
			self::$instance = new Smarty ();
			$path = PwPrefs::getInstance ()->getAppPath ();
			
			$template_dir = PwMisc::concat_dirs ( $path, "pwView" );
			self::$instance->setTemplateDir ( $template_dir );
			
			$compile_dir = PwMisc::concat_dirs ( $path, "_compil" );
			self::$instance->setCompileDir ( $compile_dir );
			
			$config_dir = PwMisc::concat_dirs ( $path, "pwLang" );
			self::$instance->setConfigDir ( $config_dir );
			
			$cache_dir = PwMisc::concat_dirs ( $path, "pwView" );
			self::$instance->setCacheDir ( $cache_dir );
			
			$smartyPlugins = "../rsrc/smartyPlugins";
			self::$instance->addPluginsDir ( $smartyPlugins );
			
			self::$instance->caching = false;
			
			return self::$instance;
		}
		return self::$instance;
	}
	
	/**
	 * Chargement des fichiers de configuration
	 *
	 * @param String $section
	 *        	section a charger
	 */
	public static function pWLoadSecLangFile($section) {
		if (isset ( $_SESSION ['lang'] )) {
			$lang = $_SESSION ['lang'];
		} else {
			$lang = PwPrefs::getInstance ()->getDefaultLang ();
		}
		$inst = self::getInstance ();
		
		switch ($lang) {
			case 'en' :
				$inst->configLoad ( "en.lang", $section );
				break;
			case 'dt' :
				$inst->configLoad ( "dt.lang", $section );
				break;
			case 'fr' :
				$inst->configLoad ( "fr.lang", $section );
				break;
			default :
				$inst->configLoad ( "en.lang", $section );
				break;
		}
	}
}
