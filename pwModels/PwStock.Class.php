<?php
class PwStock extends PwModel {
	const TABLE_NAME = 'stock';
	const TABLE_ID = 'sto_id';
	

	const ROW_STATUS 	  = 'sto_del';

	function __construct($i = '') {
		parent::__construct ( $i );
	}
	
	
	public static function getEtatInventaire($num_inv="", $num_srv="", $nom_prod="" , $groupBy_id="" , $hors_inv="", $sto_date_achat_deb = "", $sto_date_achat_fin = "",$fur_id = "" , $limit = "",$prd_id = "",$cat_id = "",$srv_id = "") {
		
		$groupe_by	= "";						
		$where 		= "";
		$order_by 	= "";
		
		if($num_inv != ""){
			$where .= " and sto_num_inventaire = '$num_inv' ";
		}
		
		
		if($sto_date_achat_deb!= ""){
			$where .= " and sto_date_achat > '$sto_date_achat_deb' ";
		}
		
		if($sto_date_achat_fin!= ""){
			$where .= " and sto_date_achat < '$sto_date_achat_fin' ";
		}
		
		if(($fur_id != "0")&&($fur_id != "")){
			$where .= " and sto_fur_id = '$fur_id' ";
		}
		
		if(($prd_id != "0")&&($prd_id != "")){
		    $where .= " and sto_prd_id = '$prd_id' ";
		}
		
		if(($cat_id != "0")&&($cat_id != "")){
		    $where .= " and sto_cat_id = '$cat_id' ";
		}
		
		if(($srv_id != "0")&&($srv_id != "")){
		    $where .= " and sto_srv_id = '$srv_id' ";
		}
		
		
		if($nom_prod != ""){
			$where .= " and sto_libele_prd like '%$nom_prod%' ";
		}
		
		
		if($hors_inv == '1'){
			$where .= " and sto_sorti_inventaire = '1' ";
		}
		else{
			$where .= " and sto_sorti_inventaire = '0' ";
		}
		
	
		if($groupBy_id == ''){
			$groupe_by = " group by sto_id ";
		}
		else{
			$groupe_by = " group by $groupBy_id ";
		}
		
		
		$limitLine = "";
		
		if (($limit != "")&&($limit != "0")){
			$limitLine = " limit $limit ";
		}
		
		
		$order_by = " order by sto_date_achat DESC , sto_id ASC ";
		
		$cmd = "SELECT stock.* , fournisseur.*, produit.*, categorie.* , service.* , SUM(sto_qte) as sto_total  from stock 
				
				left outer join fournisseur on (fournisseur.fur_id = stock.sto_fur_id ) 
				left outer join produit on (produit.prd_id = stock.sto_prd_id  ) 
				left outer join categorie on (categorie.cat_id = stock.sto_cat_id )
                left outer join service on (service.srv_id = stock.sto_srv_id ) 
				WHERE 
				sto_del = '0' " 
				. $where . $groupe_by . $order_by . $limitLine.";"
				;
		
		//PwDebug::debugInLogFile($cmd); 
		$prep = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
		$prep->execute ();
		$list = $prep->fetchAll ( PDO::FETCH_ASSOC );	
		return $list;
		
	}
	
	
	
	
	public static function getPretMat($num_inv = "", $nom_prod="" , $fur_id = "" , $prd_id = "",$cat_id = "",$srv_id = "") {
	    
	  
	    $where 		= "";
	    
	    if($num_inv != ""){
	        $where .= " and sto_num_inventaire = '$num_inv' ";
	    }
	    
	 	    
	    if(($fur_id != "0")&&($fur_id != "")){
	        $where .= " and sto_fur_id = '$fur_id' ";
	    }
	    
	    if(($prd_id != "0")&&($prd_id != "")){
	        $where .= " and prd_id = '$prd_id' ";
	    }
	    
	    if(($cat_id != "0")&&($cat_id != "")){
	        $where .= " and cat_id = '$cat_id' ";
	    }
	    
	    if(($srv_id != "0")&&($srv_id != "")){
	        $where .= " and srv_id = '$srv_id' ";
	    }
	    
	    
	    if($nom_prod != ""){
	        $where .= " and sto_libele_prd like '%$nom_prod%' ";
	    }
	    
	    else{
	        $where .= " and sto_sorti_inventaire = '0' ";
	    }
	    
	    
	    
	    $order_by = " order by sto_date_achat DESC , sto_id ASC ";
	    
	    $cmd = "SELECT DISTINCT pret.prt_id, sto_prd_id, stock.sto_id, stock.sto_num_inventaire , fournisseur.*, produit.*, categorie.* , service.*  from stock
	        
				left outer join fournisseur on (fournisseur.fur_id = stock.sto_fur_id )
				left outer join produit on (produit.prd_id = stock.sto_prd_id  )
				left outer join categorie on (categorie.cat_id = stock.sto_cat_id )
                left outer join service on (service.srv_id = stock.sto_srv_id )
                left outer join pret on (pret.prt_prd_id = stock.sto_prd_id )
				where
				sto_del = '0' and  stock.sto_pret = 1 "
	            . $where . $order_by 
	        ;
	        
	        //PwDebug::debugInLogFile($cmd);
	        
	        $prep = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
	        $prep->execute ();
	        $list = $prep->fetchAll ( PDO::FETCH_ASSOC );
	        
	        
	        return $list;
	        
	}

 	
 	
 	
 	public static function getListMaterialPretable() {
 	    $cmd = "SELECT stock.* , fournisseur.*, produit.*, categorie.* , service.*  from stock 
				left outer join fournisseur on (fournisseur.fur_id = stock.sto_fur_id ) 
				left outer join produit on (produit.prd_id = stock.sto_prd_id  ) 
				left outer join categorie on (categorie.cat_id = stock.sto_cat_id )
                left outer join service on (service.srv_id = stock.sto_srv_id ) 
				where 
				sto_del = '0' and 
				sto_sorti_inventaire = '0' and 
                sto_pret = '1'
                ;";
 	    $prep = PwPDO::getInstance ( PwPDO::DB_0 )->prepare ( $cmd );
 	    $prep->execute ();
 	    $list = $prep->fetchAll ( PDO::FETCH_ASSOC );
 	    
 	    return $list;
 	}
 	
 	
	
	protected  $sto_id = "";
	protected  $sto_fur_id = "";
	protected  $sto_prd_id = "";
	protected  $sto_cat_id  = "";
	
	protected  $sto_libele_prd ="";
	protected  $sto_libele_cat  = "";
	protected  $sto_num_inventaire = "";
	protected  $sto_date_achat = "";
	protected  $sto_prix_achat_ht = "";
	protected  $sto_annne_amortissement = "";
	protected  $sto_affactation = "";
	protected  $sto_sorti_inventaire = "";
	protected  $sto_date_sorti_inventaire = "";
	protected  $sto_commentaire = "";
	protected  $sto_del = "";
	protected  $sto_srv_id = "";
	protected  $sto_qte = "1";  // Toujour à 1  pour le groupe by
	protected  $sto_pret = "1"; // Matériel pretable 
	

}










