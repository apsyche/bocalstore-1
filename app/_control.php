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
require_once '../_pwClass/PwInit.php';

PwPrefs::getInstance ()->setAppPath ( basename ( dirname ( __FILE__ ) ) );

$param = explode ( '!', $_GET ['p'] );
if (count ( $param ) < 2) {
	PwDebug::debug ( "insufficient parameters ", $_GET ['p'] );
	PwDebug::debugInLogFile ( "Error Call Controller : " . implode ( ",", $param ) );
	var_dump ( $param );
	exit ();
}
if (count ( $param ) == 1) {
	$param [1] = "Index";
}

if ($param [0] == "") {
	array_splice ( $param, 0, 1 );
}
if (strlen ( $param [1] ) == 0) {
	$param [1] = "Index";
}

$ctrlName = $param [0] . "Controller";

$includ = "pwController/" . $ctrlName . ".Class.php";
include_once ($includ);

$ctrl = new $ctrlName ();
$actionName = "action" . $param [1];

if (is_callable ( array (
		$ctrl,
		$actionName 
) )) {
	if (count ( $param ) > 0) {
		$ctrl->{$actionName} ( $param );
	} else {
		$ctrl->{$actionName} ();
	}
} else {
	PwDebug::debug ( "Error Unexisted Controller ", "Method: " . $actionName );
	PwDebug::debugInLogFile ( "Error Unexisted Controller  Method: " . $actionName );
}





