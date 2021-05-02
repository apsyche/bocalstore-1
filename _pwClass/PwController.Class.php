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
require_once ("PwController.Interface.php");
abstract class PwController extends PwSuper implements PwControllerInterface {
	protected $checkConnexion = true;
	
	/**
	 * Tableau des Sections du fichier de configuration
	 *
	 * @var Array()
	 */
	protected $confSec = array ();
	protected $subViews = array ();
	
	/**
	 * Construct
	 */
	public function __construct() {
		$this->actionInit ();
	}
	
	/**
	 * Exécuté à chque appel du controleur
	 *
	 * public function actionInit(){
	 *
	 * }
	 */
	
	/**
	 * avant affichage
	 * public function actionBeforDisplay(){
	 *
	 * }
	 */
	
	/**
	 * Après affichage
	 * public function actionAfterDisplay(){
	 *
	 * }
	 */
	
	/**
	 *
	 * @param Arg $get        	
	 */
	final public function actionIndex($get = array()) {
		if ($this->checkConnexion == true) {
			PwConnexion::checkConnexion ();
		}
		$getTab = array ();
		$smarty = PwSmarty::getInstance ();
		$smarty->assign ( 'title', PwPrefs::getInstance ()->getProject () );
		$smarty->assign ( 'version', PwPrefs::getInstance ()->getVersion () );
		$action = $get [0];
		for($i = 2; $i < count ( $get ); $i ++) {
			$smarty->assign ( 'p' . ($i - 1), $get [$i] );
			$getTab [] = $get [$i];
		}
		if (count ( $this->confSec ) == 0) {
			$this->confSec [0] = $action;
		}
		$_SESSION ['PwGet'] = $getTab;
		$this->actionBeforDisplay ();
		
		
		
		foreach ( $this->subViews as $value ) {
			if ((isset($_SESSION['PwGet'][0])) && ($_SESSION['PwGet'][0] == $value)){  //HD 10/08/2016
				// Ajouter la section des langues
				$this->confSec [] = $value;
				// execution du controlleur actionBeforDisplay
				$subController = $value . "Controller";
				$subObj = new $subController ();
				$subObj->actionBeforDisplay ();
			}																		   //HD 10/08/2016
		}
		
		$fname = $action . ".tpl";
		try {
			foreach ( $this->confSec as $key => $val ) {
				PwSmarty::pWLoadSecLangFile ( $val );
			}
			$smarty->display ( $fname );
		} catch ( Exception $e ) {
			PwDebug::debug ( "Smarty Error", $e->getMessage () );
		}
		
		$this->actionAfterDisplay ();
		foreach ( $this->subViews as $value ) {
			if ((isset($_SESSION['PwGet'][0])) && ($_SESSION['PwGet'][0] == $value)){  //HD 10/08/2016
			// Ajouter la section des langues
				$this->confSec [] = $value;
				// execution du controlleur actionBeforDisplay
				$subController = $value . "Controller";
				$subObj = new $subController ();
				$subObj->actionAfterDisplay (); 
				}																	   //HD 10/08/2016
		}
	}
}
