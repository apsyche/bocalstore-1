<?php
class PwFournisseurDoc extends PwModel {
	const TABLE_NAME = 'fournisseur_doc';
	const TABLE_ID = 'fdoc_id';

	function __construct($i = '') {
		parent::__construct ( $i );
	}
	
	
	public static function getListByFournisseur($fur_id) {
		
		$cmd = "SELECT * FROM fournisseur_doc WHERE fdoc_fur_id= '$fur_id' order by fdoc_nom ;";
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
	
		$cmd = "UPDATE fournisseur_doc SET
				fdoc_nom_file =  :fNAme,
				fdoc_type_file = :fType,
				fdoc_size_file = :fSize,
				fdoc_data_file = :fData
				where fdoc_id=:id";
	
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
	
	protected $fdoc_id = "";
	protected $fdoc_fur_id = "";
	protected $fdoc_type = "";
	protected $fdoc_nom = "";
	protected $fdoc_description = "";
	protected $fdoc_nom_file = "";
	protected $fdoc_type_file="";
	protected $fdoc_size_file="";
	protected $fdoc_data_file = "";

}










