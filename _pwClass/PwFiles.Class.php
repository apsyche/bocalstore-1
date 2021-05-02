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
class PwFiles {
	private $file 			= Null;
	private $fileType		= "";
	private $fileExention	= "";
	private $delimiterColl 	= ",";
	private $endOfLine 		= '\n';
	
	public function __construct($pfileType,$pfileExention,$pdelimiterColl=',',$pendOfLine='\n') {
		$this->fileType			= $pfileType;
		$this->fileExention		= $pfileExention;
		$this->delimiterColl	= $pdelimiterColl;
		$this->endOfLine		= $pendOfLine;
	}
	

	
	/**
	 * Insertion des lignes dans le fichiers Excel, il faut introduire les données sous formes de chaines
	 * de caractère.
	 * Attention a séparer avec une virgule.
	 */
	function InsertLine($line) {
		$this->file .= $line . $this->endOfLine;
		return $this->file;
	}
	
	/**
	 * fonction de sortie du fichier avec un nom spécifique.
	 */
	function output($NomFichier) {
		header ( "Content-type: application/$this->fileType	" );
		header ( "Content-disposition: attachment; filename=$NomFichier.$this->fileExention" );
		print $this->file;
		exit ();
	}
	
	/**
	 * fonction de sortie du fichier avec un nom spécifique.
	 */
	function txtoutput($NomFichier) {
		header ( "Content-type: application/$this->fileType	" );
		header ( "Content-disposition: attachment; filename=$NomFichier.$this->fileExention" );
		return $this->file;

	}
}
 