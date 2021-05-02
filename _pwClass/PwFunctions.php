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
function autoLoader($classname) {
	$fname = $classname . ".Class.php";
	if (file_exists ( "../_pwClass/" . $fname )) {
		require_once "../_pwClass/" . $fname;
		return true;
	} elseif (file_exists ( "../pwModels/" . $fname )) {
		require_once "../pwModels/" . $fname;
		return true;
	}
	$fname = $classname . ".Interface.php";
	if (file_exists ( "../_pwClass/" . $fname )) {
		require_once "../_pwClass/" . $fname;
		return true;
	} else {
		PwDebug::debug ( "ClassName", $classname . "- " . " <" . $classname . "> - <" . $fname . ">" );
		PwDebug::debugInLogFile ( "autoLoad Error load class : <" . $classname . "> - <" . $fname . ">" );
	}
}	
	
	
	
	
	
