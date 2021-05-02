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
	
	
	searchPrd = function() {
		
	}
	
	
	edit = function(mode,sto_id,sto_cmd_id,sto_fur_id,sto_prd_id,sto_libele_prd,sto_cat_id,sto_libele_cat,sto_num_inventaire,sto_date_achat,sto_prix_achat_ht,sto_tva,sto_type,sto_annne_amortissement,sto_etat_stock,sto_date_sorti_stock,sto_affactation,sto_sorti_inventaire,sto_date_sorti_inventaire,sto_commentaire) {
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
		}
		
		$("#editStock").dialog({
			modal: true,
			width: 700,
			buttons: {
				"Enregistrer": function(){ 
					
					
					var file_data = $("#ddoc_file").prop("files")[0];   
				    var form_data = new FormData();                   
				    form_data.append("ddoc_file", file_data) ;             
				    form_data.append("ddoc_id", redId) ;
				    form_data.append("ddoc_dvi_id", $("#ddoc_dvi_id").val()) ;
				    form_data.append("ddoc_type", $("#ddoc_type").val()) ; 
				    form_data.append("ddoc_nom", $("#ddoc_nom").val()) ; 
				    form_data.append("ddoc_description", $("#ddoc_description").val()) ;
				    
					$.ajax({
						url: "!cmdDevisDoc!AddFile", 
						type: "POST", 
						cache : false,
						contentType : false,
						processData : false,
						data : form_data,
						success: function(data){
						 if(data.length >0){
							 alert(data);
						 }
						   	location.href = "cmd!index!cmdDevisDoc!"+redId;
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
	
	print = function() {
		
	}

/**
 * 
 * @param addProduits
 */
refresh = function() {



	var list ;		
	$.ajax({
		   type: "POST", 
		   url: "!stoInventaire!GetListInventaire", 
		   data: {
			   typeFilter: ""
		   },
		   async: false,
		   dataType: 'JSON', 
		   success: function(data){
			   list = data;
		   },
	  	   error:function(xhr, ajaxOptions, thrownError){
	  		 	alert(list);
				alert("Error refreshCat ---");
				alert(xhr.statusText);
		    	alert(thrownError);
		   }
	});
	
	
	
	var tab = $("#tableInventaire");
	tab.empty();
	$("#tableInventaire").append(
			"<thead><tr>" +
				"<th>N° Prd</th>"+
				"<th>N° Inv</th>"+
				"<th> Catégorie</th>"+
				"<th>Produit </th>"+
				"<th>Date Achat</th>"+
				"<th>Commentaire </th>"+
				"<th>Affectation</th>"+
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
					"<td>"+row['sto_prd_id'] +"</td>"+
					"<td>"+row['sto_num_inventaire'] +"</td>"+
					"<td>"+row['sto_libele_cat'] +"</td>"+
					"<td>"+row['sto_libele_prd'] +"</td>"+
					"<td>"+row['sto_date_achat'] +"</td>"+
					"<td>"+row['sto_commentaire']+"</td>"+
					"<td>"+row['sto_affactation'] +"</td>"+
					"<td>  " +
					"<button type=\"button\" class=\"btn btn-default btn-xs  btn btn-info\" onclick=\"edit('E','"+row['sto_id']+"','"+row['sto_cmd_id']+"','"+row['sto_fur_id']+"','"+row['sto_prd_id']+"','"+row['sto_libele_prd']+"','"+row['sto_cat_id']+"','"+row['sto_libele_cat']+"','"+row['sto_num_inventaire']+"','"+row['sto_date_achat']+"','"+row['sto_prix_achat_ht']+"','"+row['sto_tva']+"','"+row['sto_type']+"','"+row['sto_annne_amortissement']+"','"+row['sto_etat_stock']+"','"+row['sto_date_sorti_stock']+"','"+row['sto_affactation']+"','"+row['sto_sorti_inventaire']+"','"+row['sto_date_sorti_inventaire']+"','"+row['sto_commentaire']+"');\"> <span class=\"glyphicon glyphicon-edit \"></span></button> &nbsp;" + 
					"<button type=\"button\" class=\"btn btn-default btn-xs  btn btn-info\" onclick=\"print('"+row['sto_id']+"');\"> <span class=\"glyphicon glyphicon-print \"></span></button>" +
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


// execut

refresh();


});
