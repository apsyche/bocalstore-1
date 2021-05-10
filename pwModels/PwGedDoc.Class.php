<?php
class PwGedDoc extends PwModel {
	const TABLE_NAME = 'ged_doc';
	const TABLE_ID = 'gedd_id';

	function __construct($i = '') {
		parent::__construct ( $i );
	}
	
	
	public static function getFullList() {
		
		$cmd = "SELECT * FROM ged_doc order by gedd_nom ;";
		$prep = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
		$prep->execute ();
		$list = $prep->fetchAll ( PDO::FETCH_ASSOC );
	
		return $list;
		
	}
	
	
	public static function getSearchList($type,$name,$desc) {
	
		$where = "" ;
		if($type != "") {
			$where.= " and gedd_type ='$type' ";
		}
		if($name != "") {
			$where.= " and gedd_nom like '%$name%' ";
		}
		if($desc != "") {
			$where.= " and gedd_description like '%$desc%' ";
		}
		//test
		$cmd = "SELECT * FROM ged_doc 
				where 
				1=1 
				$where
				order by gedd_nom ;";
		
		$prep = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
		$prep->execute ();
		$list = $prep->fetchAll ( PDO::FETCH_ASSOC );
	
		return $list;
	
	}
	
	
	public static function saveFile($id, $img_nom, $img_type, $img_taille, $file) {
		ob_end_clean ();
		header ( "Content-type:" . $img_type );
		header ( "Content-length: " . filesize ( $file ) );
	
		$tempfile = fopen ( $file, 'rb' );
		$pdfData = fread ( $tempfile, filesize ( $file ) );
	
		$cmd = "UPDATE ged_doc SET
				gedd_nom_file =  :fNAme,
				gedd_type_file = :fType,
				gedd_size_file = :fSize,
				gedd_data_file = :fData
				where gedd_id=:id";
	
		$inst = PwPDO::getInstance ( PwPDO::DB_0 );
		$inst->exec ( "SET CHARACTER SET utf8" );
	
		$prep = $inst->prepare ( $cmd );
		$prep->bindParam ( ':fNAme', $img_nom, PDO::PARAM_STR );
		$prep->bindParam ( ':fType', $img_type, PDO::PARAM_STR );
		$prep->bindParam ( ':fSize', $img_taille, PDO::PARAM_STR );
		$prep->bindParam ( ':fData', $pdfData, PDO::PARAM_LOB );
		$prep->bindParam ( ':id', $id, PDO::PARAM_STR );
		$prep->execute ();
	}
	
	protected $gedd_id = "";
	protected $gedd_type = "";
	protected $gedd_nom = "";
	protected $gedd_description = "";
	protected $gedd_nom_file = "";
	protected $gedd_type_file="";
	protected $gedd_size_file="";
	protected $gedd_data_file = "";

}










