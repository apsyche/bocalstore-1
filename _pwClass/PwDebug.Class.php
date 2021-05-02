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
abstract class PwDebug {
	
	/**
	 *
	 * @param String $text        	
	 */
	public static function debugInLogFile($text = '') {
		$date = date ( "Y-m-d H:i:s" );
		$text = "\n" . $date . " " . $text;
		$fd = fopen ( "../_pwLog/log.txt", "a+" );
		fputs ( $fd, $text );
		fclose ( $fd );
	}
	
	/**
	 *
	 * @param String $error        	
	 * @param String $comments        	
	 */
	public static function debug($error = '', $comments = '') {
		$sdbg = PwSmarty::getInstance ();
		$sdbg->assign ( 'debug1', $error );
		$sdbg->assign ( 'debug2', $comments );
		$sdbg->display ( '_debug.tpl' );
	}
}
