<?php
class PwCommandeDoc extends PwModel {
	const TABLE_NAME = 'commande_doc';
	const TABLE_ID = 'cdoc_id';

	function __construct($i = '') {
		parent::__construct ( $i );
	}
	
	
	public static function getListByCmd($cmd_id) {
		
		$cmd = "SELECT * FROM commande_doc WHERE cdoc_cmd_id= '$cmd_id' order by cdoc_nom ;";
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
	
		$cmd = "UPDATE commande_doc SET
				cdoc_nom_file =  :fNAme,
				cdoc_type_file = :fType,
				cdoc_size_file = :fSize,
				cdoc_data_file = :fData
				where cdoc_id=:id";
	
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
	
	protected $cdoc_id = "";
	protected $cdoc_cmd_id = "";
	protected $cdoc_type = "";
	protected $cdoc_nom = "";
	protected $cdoc_description = "";
	protected $cdoc_nom_file = "";
	protected $cdoc_type_file="";
	protected $cdoc_size_file="";
	protected $cdoc_data_file = "";

}










