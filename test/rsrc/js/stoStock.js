$(function() {
	
	$(function() {
		$("#sto_date_achat").datepicker();
	});
	
	
	$(function() {
		$("#sto_date_sorti_stock").datepicker();
	});
	
	
	$(function() {
		$("#sto_date_sorti_inventaire").datepicker();
	});
	
	$(function() {
		$("#sto_date_achat_deb").datepicker();
	});
	
	$(function() {
		$("#sto_date_achat_fin").datepicker();
	});
	


	printList=function(){
		location.href = "stoPdf!index!invList!";
	}
	
	/**
	 * printCSV
	 */
	printCSV=function(){
		var num_inv = $("#num_inv").val();
		var num_srv = $("#num_srv").val();
		var num_ecole = $("#num_ecole").val();
		var nom_prod = $("#nom_prod").val();
		var groupBy_id = $("#groupBy_id").val();
		var hors_inv = $("#hors_inv").val();
		var prd_ref = $("#prd_ref").val();
		var sto_date_achat_deb = $("#sto_date_achat_deb").val();
		var sto_date_achat_fin = $("#sto_date_achat_fin").val();
		var fur_id = $("#fur_id").val();
		
		$.ajax({
			   type: "POST", 
			   url: "!stoStock!ExportCSV", 
			   data: {
				   num_inv					: num_inv,
				   num_srv					: num_srv,
				   num_ecole				: num_ecole,
				   nom_prod					: nom_prod,
				   groupBy_id				: groupBy_id,
				   hors_inv					: hors_inv,
				   prd_ref					: prd_ref,
				   sto_date_achat_deb		: sto_date_achat_deb,
				   sto_date_achat_fin		: sto_date_achat_fin,
				   fur_id					: fur_id
				   
			   },
			   async: false, 
			   success : function(data) {
				   var blob = new Blob([data], { type: 'application/vnd.ms-excel' });
				   
				   if (window.navigator && window.navigator.msSaveOrOpenBlob) {
					   window.navigator.msSaveOrOpenBlob(blob); // for IE
				   }
				   else {
					   var fileURL = URL.createObjectURL(blob);
					   var newWin = window.open(fileURL);
					   newWin.focus();
					   newWin.reload();
				   }
				
			   },
			   error : function(xhr, ajaxOptions, thrownError) {
				   alert("save access error." + "\nstatusText: " + xhr.statusText
						   + "\nthrownError: " + thrownError);
				   return;
			   }
		});
	}


	
	/**
	 * emptySearch
	 */
	emptySearch = function() {
		location.href = "!sto!index!stoStock";
	}
	
	/**
	 * 
	 * @param receveCommande
	 */
	receveCommande = function(pid) {
		$("#receveCommande").dialog({
			modal: true,
			width: 700,
		
			buttons: {
				"Enregistrer": function(){
					var cmd_id = $("#select_cmd_id").val();
					receveCommandeList(cmd_id);
					$(this).dialog("close");
				},
				"Annuler": function(){
						$(this).dialog("close");
					}
				},
		});
	}
	
	
	/**
	 * receveCommandeList
	 */
	receveCommandeList = function(pid) {
		var list;
		$.ajax({
			type: "POST", 
			url: "!stoStock!GetListProdCommande", 
			data: {
				cmd_id : pid
			},
			async: false, 
			success : function(data) {
				list = $.parseJSON(data);

			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert("save access error." + "\nstatusText: " + xhr.statusText
						+ "\nthrownError: " + thrownError);
				return;
			}
		});
		
		//create Table
		var tab = $("#tableProd");
		tab.empty();
		$("#tableProd").append(
				"<thead><tr>" +
					"<th>Qte Recu </th>"+
					"<th>Qte Commandée </th>"+
					"<th>Qte Déjà Reçu</th>"+
					"<th>Produit</th>"+
					"<th>Description</th>"+
					"<th>HT</th>"+
					"<th>TVA</th>"+
					"<th>TTC</th>"+
				"</tr></thead><tbody>"
		);
		var note = "";
		var nbr = 0;

		$.each(list, function(key, row) {
			nbr++;
			var ttc = ((row['prd_prix_ht'] * row['prd_tva'])/100)+row['prd_prix_ht'];
			ttc = parseFloat(ttc).toFixed(2); 
			$("#tableProd").append(
					"<tr onclick=\"refreshProd('"+row['cat_id']+"')\" >" +
						"<td> <input  style=\"text-align: right; \" type=\"text\" class=\"form-control\" id=\"prd_id_sel\" name=\"prd_id_sel["+row['cmp_id']+"]\" style=\"width: 30px\" value=\"0\"> </td>"+
						"<td>"+row['cmp_quantite'] +"</td>"+
						"<td>"+row['cmp_recu'] +"</td>"+
						"<td>"+row['prd_nom']+"</td>"+
						"<td>"+row['prd_description'] +"</td>"+
						"<td align=\"right\">"+row['prd_prix_ht']+"</td>"+
						"<td align=\"right\">"+row['prd_tva'] +"% </td>"+
						"<td align=\"right\">"+ ttc+"</td>"+
					"</tr>"
			);
			
		});
		$("#tableProd").append("</table>");
		
		
		$("#receveCommandeList").dialog({
			modal: true,
			width: 1000,
		
			buttons: {
				"Enregistrer": function(){ 
					var d= $("#CommandeListRecev").serialize();
					$.ajax({
						type: "POST", 
						url: "!stoStock!SaveRecevCommande", 
						data:d,
						async: false, 
						success : function(data) {
							alert(data);
							refresh();

						},
						error : function(xhr, ajaxOptions, thrownError) {
							alert("save access error." + "\nstatusText: " + xhr.statusText
									+ "\nthrownError: " + thrownError);
							return;
						}
					});
					
					$(this).dialog("close");
				},
				"Annuler": function(){
						$(this).dialog("close");
					}
				},
		});
		
		
		
	}

/**
 * 
 * @param refresh
 */
refresh = function() {
	var list ;	

	var num_inv = $("#num_inv").val();
	var num_srv = $("#num_srv").val();
	var num_ecole = $("#num_ecole").val();
	var nom_prod = $("#nom_prod").val();
	var groupBy_id = $("#groupBy_id").val();
	var hors_inv = $("#hors_inv").val();
	var prd_ref = $("#prd_ref").val();
	var sto_date_achat_deb = $("#sto_date_achat_deb").val();
	var sto_date_achat_fin = $("#sto_date_achat_fin").val();
	var fur_id = $("#fur_id").val();
	var limit = $("#limit").val();
	
	$.ajax({
		   type: "POST", 
		   url: "!stoStock!GetListInventaire", 
		   data: {
			   num_inv					: num_inv,
			   num_srv					: num_srv,
			   num_ecole				: num_ecole,
			   nom_prod					: nom_prod,
			   groupBy_id				: groupBy_id,
			   hors_inv					: hors_inv,
			   prd_ref					: prd_ref,
			   sto_date_achat_deb		: sto_date_achat_deb,
			   sto_date_achat_fin		: sto_date_achat_fin,
			   fur_id					: fur_id,
			   limit					: limit
			   
		   },
		   async: false,
		   dataType: 'JSON', 
		   success: function(data){
			   list = data;
		   },
	  	   error:function(xhr, ajaxOptions, thrownError){
	  		 	alert(list);
				alert("refresh ---");
				alert(xhr.statusText);
		    	alert(thrownError);
		    	return;
		   }
	});
	
	
	
	var tab = $("#tableInventaire");
	tab.empty();
	$("#tableInventaire").append(
			"<thead><tr>" +
		     	"<th><span class=\"glyphicon glyphicon-barcode\" > </span> N° Inventaire</th>"+
				"<th>Catégorie</th>"+
				"<th>Réf Produit</th>"+
				"<th>Produit</th>"+
				"<th>Fournisseur</th>"+
				"<th>Date Achat </th>"+
				"<th>Affectation</th>"+
				"<th>Total</th>"+
				"<th>Fct</th>"+
			"</tr></thead><tbody>"
	);
	var note = "";
	var nbr = 0;
	$.each(list, function(key, row) {
		nbr++;
		var ttc = ((row['prd_prix_ht'] * row['prd_tva'])/100)+row['prd_prix_ht'];
		ttc = parseFloat(ttc).toFixed(2); 
		$("#tableInventaire").append(
				"<tr onclick=\"refreshProd('"+row['cat_id']+"')\" >" +
				    "<td>"+row['sto_num_inventaire'] +"</td>"+
				    "<td>"+row['sto_libele_cat'] +"</td>"+
					"<td>"+row['prd_ref'] +"</td>"+
					"<td>"+row['sto_libele_prd'] +"</td>"+
					"<td>"+row['fur_raison_social'] +"</td>"+
					"<td>"+row['sto_date_achat']+"</td>"+
					"<td>"+row['text_affect'] +"</td>"+
					"<td>"+row['sto_total'] +"</td>"+
					"<td>  " +
						"<button type=\"button\" class=\"btn btn-default btn-xs  btn btn-info\" onclick=\"edit('E','"+row['sto_id']+"','"+row['sto_cmd_id']+"','"+row['sto_fur_id']+"','"+row['sto_prd_id']+"','"+row['sto_libele_prd']+"','"+row['sto_cat_id']+"','"+row['sto_libele_cat']+"','"+row['sto_num_inventaire']+"','"+row['sto_date_achat']+"','"+row['sto_prix_achat_ht']+"','"+row['sto_tva']+"','"+row['sto_type']+"','"+row['sto_annne_amortissement']+"','"+row['sto_etat_stock']+"','"+row['sto_date_sorti_stock']+"','"+row['sto_affactation']+"','"+row['sto_sorti_inventaire']+"','"+row['sto_date_sorti_inventaire']+"','"+row['sto_commentaire']+"','"+row['sto_total']+"','"+row['sto_type_srv_ecl']+"','"+row['sto_srv_ecl_id']+"');\"> <span class=\"glyphicon glyphicon-edit \"></span></button> &nbsp;" + 
						"<button type=\"button\" class=\"btn btn-default btn-xs  btn btn-info\" onclick=\"del('"+row['sto_id']+"');\"> <span class=\"glyphicon glyphicon-trash \"></span></button>" +
					" </td>"+
				"</tr>"
		);
		
	});
	$("#tableInventaire").append("</table>");
	
	
	$("#addProduitDevis").dialog({
		modal: true,
		width: 1000,
		buttons: {
			"Enregistrer": function(){
				
				var d= $("#produitList").serialize();
				
				$.ajax({
					type: "POST", 
					url: "!cmdDevisAdd!SaveProduits", 
					data: d,
					async: false, 
					success : function(data) {
						location.href = "!cmd!index!cmdDevisAdd!"+pid;
					},
					error : function(xhr, ajaxOptions, thrownError) {
						alert("save access error." + "\nstatusText: " + xhr.statusText + "\nthrownError: " + thrownError);
						return;
					}
				});
				
				$(this).dialog("close");
			},
			"Annuler": function(){
					$(this).dialog("close");
				}
			},
	});
}





del=function(pid){

		if(pid == ''){
			alert("Rien a supprimer, Aucune ligne sélectionnée !");
			return ;
		}
		
		if(confirm("Voulez vous supprimer vraiment cet élément ?")){
			 $.ajax({
				   type: "POST", 
				   url: "!stoStock!Delete", 
				   data: {
					   	sto_id : pid
				   },
				   async: false, 
				   success: function(data){
					   alert(data);
					   location.href = "sto!index!stoStock";
				   },
			  	   error:function(xhr, ajaxOptions, thrownError){
						alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
				   }
			});
		}
}

/**
 * changeListAffectation
 */
changeListAffectation=function(){
	var type = $("#sto_type_srv_ecl").val();
	if (type == 'ECL'){
		$("#tr_ecl").show();
		$("#tr_srv").hide();
	}
	if (type == 'SRV'){
		$("#tr_ecl").hide();
		$("#tr_srv").show();
	}
}

/**
 * edit
 */
edit = function(mode, sto_id='',sto_cmd_id='',sto_fur_id='',sto_prd_id='',sto_libele_prd='',sto_cat_id='',sto_libele_cat='',sto_num_inventaire='',sto_date_achat='',sto_prix_achat_ht='',sto_tva='',sto_type='',sto_annne_amortissement='',sto_etat_stock='',sto_date_sorti_stock='',sto_affactation='',sto_sorti_inventaire='',sto_date_sorti_inventaire='',sto_commentaire='',sto_total='',sto_type_srv_ecl='',sto_srv_ecl_id='') {
	
	if((sto_total != '1')&&(sto_total != '')){
		alert ("Mode groupé !");
		return;
	}

	if(mode == 'E'){
		$("#sto_id").val(sto_id);
		$("#sto_cmd_id").val(sto_cmd_id);
		$("#sto_fur_id").val(sto_fur_id);
		$("#sto_prd_id").val(sto_prd_id);
		$("#sto_libele_prd").val(sto_libele_prd);
		$("#sto_cat_id").val(sto_cat_id);
		$("#sto_libele_cat").val(sto_libele_cat);
		$("#sto_num_inventaire").val(sto_num_inventaire);
		$("#sto_date_achat").val(sto_date_achat);
		$("#sto_prix_achat_ht").val(sto_prix_achat_ht);
		$("#sto_tva").val(sto_tva);
		$("#sto_type").val(sto_type);
		$("#sto_annne_amortissement").val(sto_annne_amortissement);
		$("#sto_etat_stock").val(sto_etat_stock);
		$("#sto_date_sorti_stock").val(sto_date_sorti_stock);
		$("#sto_affactation").val(sto_affactation);
		$("#sto_sorti_inventaire").val(sto_sorti_inventaire);
		$("#sto_date_sorti_inventaire").val(sto_date_sorti_inventaire);
		$("#sto_commentaire").val(sto_commentaire);
		
		$("#sto_type_srv_ecl").val(sto_type_srv_ecl);
		
		$("#sto_srv_ecl_id").val(sto_srv_ecl_id);
		
		if(sto_type_srv_ecl=='ECL'){
			$("#sto_ecl_id").val(sto_srv_ecl_id);
			$("#sto_srv_id").val('');
		}
		else{
			$("#sto_srv_id").val(sto_srv_ecl_id);
			$("#sto_ecl_id").val('');
		}
		
	}


	if(mode == 'N'){
		$("#sto_id").val('');
		$("#sto_cmd_id").val('');
		$("#sto_fur_id").val('');
		$("#sto_prd_id").val('');
		$("#sto_libele_prd").val('');
		$("#sto_cat_id").val('');
		$("#sto_libele_cat").val('');
		$("#sto_num_inventaire").val('');
		$("#sto_date_achat").val('');
		$("#sto_prix_achat_ht").val('');
		$("#sto_prix_achat_ht").val('');
		$("#sto_tva").val('');
		$("#sto_type").val('');
		$("#sto_annne_amortissement").val('');
		$("#sto_etat_stock").val('');
		$("#sto_date_sorti_stock").val('');
		$("#sto_affactation").val('');
		$("#sto_sorti_inventaire").val('');
		$("#sto_date_sorti_inventaire").val('');
		$("#sto_commentaire").val('');
		
		$("#sto_type_srv_ecl").val('SRV');
		$("#sto_ecl_id").val('');
		$("#sto_srv_id").val('');
	}
	
	changeListAffectation();
	
	$("#editInventaire").dialog({
		modal: true,
		width: 700,
		buttons: {
			"Enregistrer": function(){ 
				
				
				if($("#sto_libele_prd").val().length < 2)	{ alert ("Nom produit obligatoire !");		return (0); }
				
				if($("#sto_type_srv_ecl").val() == "")     { alert ("Vérifier Affectation ") ;			return (0);	}
				
				if($("#sto_type_srv_ecl").val() == "ECL"){
					if($("#sto_ecl_id").val() == ''){ alert ("Vérifier Affectation ") ; return (0); }
				}
				else{
					if($("#sto_srv_id").val() == ''){ alert ("Vérifier Affectation ") ; return (0); }
				}
				
				
			    var form_data = new FormData();                   
			    form_data.append("mode",mode);
			    form_data.append("sto_id",sto_id);
				form_data.append("sto_cmd_id",			$("#sto_cmd_id").val());
				form_data.append("sto_fur_id",			$("#sto_fur_id").val());
				form_data.append("sto_prd_id",			$("#sto_prd_id").val());
				form_data.append("sto_libele_prd",		$("#sto_libele_prd").val());
				form_data.append("sto_cat_id",			$("#sto_cat_id").val());
				form_data.append("sto_libele_cat",		$("#sto_libele_cat").val());
				form_data.append("sto_num_inventaire",	$("#sto_num_inventaire").val());
				form_data.append("sto_date_achat",		$("#sto_date_achat").val());
				form_data.append("sto_prix_achat_ht",	$("#sto_prix_achat_ht").val());
				form_data.append("sto_prix_achat_ht",	$("#sto_prix_achat_ht").val());
				form_data.append("sto_tva",				$("#sto_tva").val());
				form_data.append("sto_type",			$("#sto_type").val());
				form_data.append("sto_annne_amortissement",$("#sto_annne_amortissement").val());
				form_data.append("sto_etat_stock",		$("#sto_etat_stock").val());
				form_data.append("sto_date_sorti_stock",$("#sto_date_sorti_stock").val());
				form_data.append("sto_affactation",		$("#sto_affactation").val());
				form_data.append("sto_sorti_inventaire",$("#sto_sorti_inventaire").val());
				form_data.append("sto_date_sorti_inventaire",$("#sto_date_sorti_inventaire").val());
				form_data.append("sto_commentaire",		$("#sto_commentaire").val());
				
				form_data.append("sto_type_srv_ecl",		$("#sto_type_srv_ecl").val());
				
				if($("#sto_type_srv_ecl").val() == "ECL"){
					form_data.append("sto_srv_ecl_id",		$("#sto_ecl_id").val());
				}
				else{
					form_data.append("sto_srv_ecl_id",		$("#sto_srv_id").val());
				}
				
			    
				$.ajax({
					url: "!stoStock!EditInventaire", 
					type: "POST", 
					cache : false,
					contentType : false,
					processData : false,
					data : form_data,
					success: function(data){
					 if(data.length >0){
						 alert(data);
					 }
					   	refresh();
					 },
					   error:function(xhr, ajaxOptions, thrownError){
					   alert("edit infPlanche error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
					 },
				});
				
				$(this).dialog("close");
				
				
			},
			"Annuler": function(){
					$(this).dialog("close");
				}
			},
	});
}


// execut
	$('body').keypress(function(e){
		if( e.which == 13 ){
			refresh();
		}
	});
refresh();



});
