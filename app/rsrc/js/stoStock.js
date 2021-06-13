$(function() {
	
	$(function() {
		$("#sto_date_achat").datepicker();
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
	
	
	
	
		
	$(function() {
		$("#sto_date_sorti_inventaire2").datepicker();
	});
	
	$(function() {
		$("#sto_date_achat2").datepicker();
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
		var nom_prod = $("#nom_prod").val();
		var prd_id = $("#prd_id").val();
		var cat_id = $("#cat_id").val();
		var srv_id = $("#srv_id").val();
		var groupBy_id = $("#groupBy_id").val();
		var hors_inv = $("#hors_inv").val();
		var sto_date_achat_deb = $("#sto_date_achat_deb").val();
		var sto_date_achat_fin = $("#sto_date_achat_fin").val();
		var fur_id = $("#fur_id").val();
		
		$.ajax({
			   type: "POST", 
			   url: "!stoStock!ExportCSV", 
			   data: {
				   num_inv					: num_inv,
				   num_srv					: num_srv,
				   nom_prod					: nom_prod,
				   groupBy_id				: groupBy_id,
				   hors_inv					: hors_inv,
				   sto_date_achat_deb		: sto_date_achat_deb,
				   sto_date_achat_fin		: sto_date_achat_fin,
				   fur_id					: fur_id,
				   prd_id					: prd_id,
				   cat_id					: cat_id,
				   srv_id					: srv_id
				   
			   },
			   async: false, 
			   success : function(data) {
				   var blob = new Blob([data], { type: 'text/csv' });
				   var fileURL = URL.createObjectURL(blob);
				   var newWin = window.open(fileURL);
				   newWin.focus();
				   newWin.reload();
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
 * @param refresh
 */
refresh = function() {
	var list ;	

	var num_inv = $("#num_inv").val();
	var num_srv = $("#num_srv").val();
	var nom_prod = $("#nom_prod").val();
	var prd_id = $("#prd_id").val();
	var cat_id = $("#cat_id").val();
	var srv_id = $("#srv_id").val();
	var groupBy_id = $("#groupBy_id").val();
	var hors_inv = $("#hors_inv").val();
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
			   nom_prod					: nom_prod,
			   groupBy_id				: groupBy_id,
			   hors_inv					: hors_inv,
			   sto_date_achat_deb		: sto_date_achat_deb,
			   sto_date_achat_fin		: sto_date_achat_fin,
			   fur_id					: fur_id,
			   prd_id					: prd_id,
			   cat_id					: cat_id,
			   srv_id					: srv_id,
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
		     	"<th><span class=\"glyphicon glyphicon-barcode\" > </span> C Barre</th>"+
				"<th>Catégorie</th>"+
				"<th>Produit</th>"+
				"<th>Fournisseur</th>"+
				"<th>Date Achat </th>"+
				"<th>Salle</th>"+
				"<th>Total</th>"+
				"<th>Outils</th>"+
			"</tr></thead><tbody>"
	);
	var note = "";
	var nbr = 0;

	$.each(list, function(key, row) {
		nbr++;
		var ttc = ((row['prd_prix_ht'] * row['prd_tva'])/100)+row['prd_prix_ht'];
		ttc = parseFloat(ttc).toFixed(2);
		
		var mode = "";
		if (usr_right_lecture == 1){
		  mode = "disabled=\"disabled\" ";
		}
		 
		$("#tableInventaire").append(
				"<tr onclick=\"refreshProd('"+row['cat_id']+"')\" >" +
				    "<td>"+row['sto_num_inventaire'] +"</td>"+
				    "<td>"+row['cat_nom'] +"</td>"+
					"<td>"+row['prd_nom'] +"</td>"+
					"<td>"+row['fur_raison_social'] +"</td>"+
					"<td>"+row['sto_date_achat']+"</td>"+
					"<td>"+row['srv_nom'] +"</td>"+
					"<td>"+row['sto_total'] +"</td>"+
					"<td>  " +
						"<button type=\"button\" class=\"btn btn-default btn-xs  btn btn-info\" " +mode + " onclick=\"edit('E','"+row['sto_id']+"','"+row['sto_fur_id']+"','"+row['sto_prd_id']+"','"+row['sto_libele_prd']+"','"+row['sto_cat_id']+"','"+row['sto_libele_cat']+"','"+row['sto_num_inventaire']+"','"+row['sto_date_achat']+"','"+row['sto_prix_achat_ht']+"','"+row['sto_annne_amortissement']+"','"+row['sto_srv_id']+"','"+row['sto_sorti_inventaire']+"','"+row['sto_date_sorti_inventaire']+"','"+row['sto_commentaire']+"','"+row['sto_total']+"','"+row['sto_pret']+"');\"> <span class=\"glyphicon glyphicon-edit \"></span></button> &nbsp;" + 
						"<button type=\"button\" class=\"btn btn-default btn-xs  btn btn-info\" " +mode + " onclick=\"del('"+row['sto_id']+"','"+row['sto_total']+"');\"> <span class=\"glyphicon glyphicon-trash \"></span></button>" +
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

$("#cat_id").click(function(){
	var cat_id = $("#cat_id").val();
	var listProd;
	//suppr la liste des produits actuelle 
	var sel = document.getElementById("prd_id");
	for (i = sel.length - 1; i >= 0; i--) {
	sel.remove(i);
}
	
	var ajax_data = new FormData();                   
		ajax_data.append("cat_id",				cat_id);
		$.ajax({
			   type: "POST", 
			   url: "!stoStock!ProdWCat",
				contentType : false,
				processData : false,
				async: false,
				dataType: 'JSON',   
			   data: ajax_data,
			   success: function(data){
				   listProd=data;
			   },
		  	   error:function(xhr, ajaxOptions, thrownError){
					alert("edit infPlanche error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
			    	return;
			   }
		});
		var i = 0;
		$.each(listProd, function(key, row) {	
            var opt = document.createElement('option');
            opt.value = key;
			opt.id = "prd_id-"+i;
            opt.text = row;
            sel.appendChild(opt);	
			i++;
		});


});

$("#sto_cat_id2").click(function(){
	var cat_id = $("#sto_cat_id2").val();
	var listProd;
	//suppr la liste des produits actuelle 
	var sel = document.getElementById("sto_prd_id2");
	for (i = sel.length - 1; i >= 0; i--) {
	sel.remove(i);
}
	
	var ajax_data = new FormData();                   
		ajax_data.append("cat_id",				cat_id);
		$.ajax({
			   type: "POST", 
			   url: "!stoStock!ProdWCat",
				contentType : false,
				processData : false,
				async: false,
				dataType: 'JSON',   
			   data: ajax_data,
			   success: function(data){
				   listProd=data;
			   },
		  	   error:function(xhr, ajaxOptions, thrownError){
					alert("edit infPlanche error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
			    	return;
			   }
		});
		var i = 0;
		$.each(listProd, function(key, row) {	
            var opt = document.createElement('option');
            opt.value = key;
			opt.id = "sto_prd_id2-"+i;
            opt.text = row;
            sel.appendChild(opt);	
			i++;
		});
});

$("#sto_cat_id").click(function(){
	var cat_id = $("#sto_cat_id").val();
	var listProd;
	//suppr la liste des produits actuelle 
	var sel = document.getElementById("sto_prd_id");
	for (i = sel.length - 1; i >= 0; i--) {
	sel.remove(i);
}
	
	var ajax_data = new FormData();                   
		ajax_data.append("cat_id",				cat_id);
		$.ajax({
			   type: "POST", 
			   url: "!stoStock!ProdWCat",
				contentType : false,
				processData : false,
				async: false,
				dataType: 'JSON',   
			   data: ajax_data,
			   success: function(data){
				   listProd=data;
			   },
		  	   error:function(xhr, ajaxOptions, thrownError){
					alert("edit infPlanche error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
			    	return;
			   }
		});
		var i = 0;
		$.each(listProd, function(key, row) {	
            var opt = document.createElement('option');
            opt.value = key;
			opt.id = "sto_prd_id-"+i;
            opt.text = row;
            sel.appendChild(opt);	
			i++;
		});
});

del=function(pid,sto_total){
		if((sto_total != '1')&&(sto_total != '')){
			alert ("Mode groupé !");
			return;
		}


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
 * edit
 */
edit = function(mode, sto_id='',sto_fur_id='',sto_prd_id='',sto_libele_prd='',sto_cat_id='',sto_libele_cat='',sto_num_inventaire='',sto_date_achat='',sto_prix_achat_ht='',sto_annne_amortissement='',sto_srv_id='',sto_sorti_inventaire='',sto_date_sorti_inventaire='',sto_commentaire='',sto_total='',sto_pret='') {
	
	if((sto_total != '1')&&(sto_total != '')){
		alert ("Mode groupé !");
		return;
	}

	if(mode == 'E'){
		$("#sto_id").val(sto_id);
		$("#sto_fur_id").val(sto_fur_id);
		$("#sto_prd_id").val(sto_prd_id);
		$("#sto_libele_prd").val(sto_libele_prd);
		$("#sto_cat_id").val(sto_cat_id);
		$("#sto_libele_cat").val(sto_libele_cat);
		$("#sto_num_inventaire").val(sto_num_inventaire);
		$("#sto_date_achat").val(sto_date_achat);
		$("#sto_prix_achat_ht").val(sto_prix_achat_ht);
		$("#sto_annne_amortissement").val(sto_annne_amortissement);
		$("#sto_srv_id").val(sto_srv_id);
		$("#sto_date_sorti_inventaire").val(sto_date_sorti_inventaire);
		$("#sto_commentaire").val(sto_commentaire);
		$("#sto_pret").val(sto_pret);
		
	}


	if(mode == 'N'){
		$("#sto_id").val('');
		$("#sto_fur_id").val('');
		$("#sto_prd_id").val('');
		$("#sto_libele_prd").val('');
		$("#sto_cat_id").val('');
		$("#sto_libele_cat").val('');
		$("#sto_num_inventaire").val('');
		$("#sto_date_achat").val('');
		$("#sto_prix_achat_ht").val('');
		$("#sto_annne_amortissement").val('');
		$("#sto_sorti_inventaire").val('0');
		$("#sto_date_sorti_inventaire").val('');
		$("#sto_commentaire").val('');
		$("#sto_srv_id").val('0');
		$("#sto_pret").val(0);
	}
	
	
	
	$("#editInventaire").dialog({
		modal: true,
		width: 700,
		buttons: {
			"Enregistrer": function(){ 
				
				
				if($("#sto_prd_id").val()==0)	{ alert ("Produit obligatoire !");		return (0); }
				if($("#sto_cat_id").val().length < 1)	{ alert ("Catégorie obligatoire !");	return (0); }
				if($("#sto_srv_id").val() == '')		{ alert ("Vérifiez la salle ") ; 		return (0); }
				
				
			    var form_data = new FormData();                   
			    form_data.append("mode",mode);
			    form_data.append("sto_id",sto_id);
				form_data.append("sto_fur_id",			$("#sto_fur_id").val());
				form_data.append("sto_prd_id",			$("#sto_prd_id").val());
				form_data.append("sto_libele_prd",		$("#sto_libele_prd").val());
				form_data.append("sto_cat_id",			$("#sto_cat_id").val());
				form_data.append("sto_libele_cat",		$("#sto_libele_cat").val());
				form_data.append("sto_num_inventaire",	$("#sto_num_inventaire").val());
				form_data.append("sto_date_achat",		$("#sto_date_achat").val());
				form_data.append("sto_prix_achat_ht",	$("#sto_prix_achat_ht").val());
				form_data.append("sto_annne_amortissement",$("#sto_annne_amortissement").val());
				form_data.append("sto_srv_id",			$("#sto_srv_id").val());
				form_data.append("sto_sorti_inventaire",$("#sto_sorti_inventaire").val());
				form_data.append("sto_date_sorti_inventaire",$("#sto_date_sorti_inventaire").val());
				form_data.append("sto_commentaire",		$("#sto_commentaire").val());
				form_data.append("sto_pret",		$("#sto_pret").val());
				
				
							
			    
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




/**
 * AddMultiples
 */
addMultiples = function() {
	$("#nbr_prd").val(0);

	
	$("#sto_fur_id2").val('');
	$("#sto_prd_id2").val('');
	$("#sto_cat_id2").val('');
	$("#sto_date_achat2").val('');
	$("#sto_annne_amortissement2").val('');
	$("#sto_sorti_inventaire2").val('0');
	$("#sto_date_sorti_inventaire2").val('');
	$("#sto_commentaire2").val('');
	$("#sto_srv_id2").val('');
	$("#sto_pret2").val('0');

	
	$("#addMultipleInventaire").dialog({
		modal: true,
		width: 700,
		buttons: {
			"Enregistrer": function(){ 
				
				if($("#sto_prd_id2").val()==0)	{ alert ("Produit obligatoire !");		return (0); }
				if($("#sto_cat_id2").val().length < 1)	{ alert ("Catégorie obligatoire !");	return (0); }
				if($("#sto_srv_id2").val() == '')		{ alert ("Vérifiez la salle ") ; 		return (0); }
				
			    var form_data = new FormData();                   
			    form_data.append("nbr_prd",				$("#nbr_prd").val());
				form_data.append("sto_fur_id",			$("#sto_fur_id2").val());
				form_data.append("sto_prd_id",			$("#sto_prd_id2").val());
				form_data.append("sto_cat_id",			$("#sto_cat_id2").val());
				form_data.append("sto_date_achat",		$("#sto_date_achat2").val());
				form_data.append("sto_annne_amortissement",$("#sto_annne_amortissement2").val());
				form_data.append("sto_srv_id",			$("#sto_srv_id2").val());
				form_data.append("sto_sorti_inventaire",$("#sto_sorti_inventaire2").val());
				form_data.append("sto_date_sorti_inventaire",$("#sto_date_sorti_inventaire2").val());
				form_data.append("sto_commentaire",		$("#sto_commentaire2").val());
				form_data.append("sto_pret",			$("#sto_pret2").val());
				
				
							
			    
				$.ajax({
					url: "!stoStock!AddMultiplesInventaire", 
					type: "POST", 
					cache : false,
					contentType : false,
					processData : false,
					data : form_data,
					success: function(data){
					 if(data.length >0){
						 //alert(data);
						 
						 var nb = form_data.get("nbr_prd");
						 $("#addInformation").dialog({
						 	modal : true,
						 	width: 700,
						 	buttons: {
						 		"Enregistrer": function(){
						 			var i = 0;
						 			var form_data = new FormData();
						 			for(i; i<nb; i++){
						 				form_data.append("sto_num_inventaire",$("#sto_num_inventaire_"+i+"").val());
						 				form_data.append("sto_num_serie",$("#sto_num_serie_"+i+"").val());
					 				}
							 		form_data.append("nbr", nb);
							 			
							 			$.ajax({
							 				url: "!stoStock!AddInformationComplementaire",
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
							 			$(this).dialog('close');							 			
						 			},
						 			"Annuler": function(){
						 				$(this).dialog('close');
						 			}
						 	},
						 });
						 var tab = [];
						 var i = 0;
						 var nb = form_data.get("nbr_prd");
						 var head = "<form action='POST' action='#' enctype='multipart/form-data'>"+
						 	"<table style='width: 95%'>"+
						 		"<tr><td style='display: none'><input type='text' id='nbr' name='nbr'></td></tr>";
				 		for(i=0; i<nb; i++){
						 	var html = "<tr><td>Code barre "+i+"</td>"+
						 				"<td><input type='text' id='sto_num_inventaire_"+i+"'></td>"+
						 				"<td>Numero de serie "+i+"</td>"+
						 				"<td><input type='text' id='sto_num_serie_"+i+"'></td>"+
						 				"</tr>";
						 	tab[i] = html;
						 }
						 var pied = "</table></form>";
						 $("#addInformation").html(head+tab+pied);
						 $("#addInformation").dialog('open');
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
