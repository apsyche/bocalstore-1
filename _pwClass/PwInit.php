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
ob_start ();
session_start ();
require_once ("../_libs/smarty/libs/Smarty.class.php");
require_once ("../_libs/fpdf/fpdf.php");
require_once ("../_pwClass/PwMisc.Class.php");
require_once ("../_pwClass/PwPrefs.Class.php");
require_once ("../_pwClass/PwFunctions.php");
require_once ("../_pwClass/PwDebug.Class.php");
require_once ("../_pwClass/PwPDO.Class.php");
require_once ("../_pwClass/PwModel.Class.php");
require_once ("../_pwClass/PwController.Class.php");
spl_autoload_register ( "autoLoader" );


