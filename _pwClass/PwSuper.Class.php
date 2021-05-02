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
abstract class PwSuper {
	
	/**
	 * Getter Magic Methode
	 *
	 * @param unknown_type $property        	
	 */
	public function __get($property) {
		if (property_exists ( $this, $property )) {
			return $this->$property;
		}
	}
	
	/**
	 * Setter Magic Methode
	 *
	 * @param unknown_type $property        	
	 * @param unknown_type $value        	
	 */
	public function __set($property, $value) {
		if (property_exists ( $this, $property )) {
			$this->$property = $value;
		}
		return $this;
	}
}
