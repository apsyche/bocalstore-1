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
class PwCSV {
	private $csv = Null;
	
	
	/**
	 * Cette ligne permet de créer les colonnes du fichers Excel
	 * Cette fonction est totalement faculative, on peut faire la même choseavec la
	 * fonction insertion
	 */
	function Colonne($file) {
		$this->csv .= $file . "\n";
		return $this->csv;
	}
	
	/**
	 * Insertion des lignes dans le fichiers Excel, il faut introduire les données sous formes de chaines
	 * de caractère.
	 * Attention a séparer avec une virgule.
	 */
	function Insertion($file) {
		$this->csv .= $file . "\n";
		return $this->csv;
	}
	
	/**
	 * fonction de sortie du fichier avec un nom spécifique.
	 */
	function output($NomFichier) {
		header ( "Content-Type: text/csv" );
		header ( "Content-Disposition: attachment; filename=\"".$NomFichier.".csv\"" );
		echo $this->csv;
		exit ();
	}
}
 