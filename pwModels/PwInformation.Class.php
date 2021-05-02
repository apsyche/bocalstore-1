<?php
class PwInformation extends PwModel {
	const TABLE_NAME = 'information';
	const TABLE_ID = 'inf_id';
	

	function __construct($i = '') {
		parent::__construct ( $i );
	}
	
	

	
	protected $inf_id = "";
	protected $inf_nom_apc = "";
	protected $inf_adresse = "";
	protected $inf_cp = "";
	protected $inf_ville = "";
	protected $inf_imp_titre = "";

	
}










