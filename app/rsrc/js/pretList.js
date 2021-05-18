$(function() {
	

	$(function() {
		$("#prt_date_pret").datepicker();
	});
	
	$(function() {
		$("#prt_date_retour_prevu").datepicker();
	});
	
	
	
	
	printList=function(){
		location.href = "stoPdf!index!matList!";
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
		var hors_inv = $("#hors_inv").val();
		var sto_date_achat_deb = $("#sto_date_achat_deb").val();
		var sto_date_achat_fin = $("#sto_date_achat_fin").val();
		var fur_id = $("#fur_id").val();
		
		$.ajax({
			   type: "POST", 
			   url: "!pretList!ExportCSV", 
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
		location.href = "pret!index!pretList";
	}
		
	
	
	/**
	 * 
	 * @param refresh
	 */
	refresh = function() {
		var list ;	
		var num_inv = $("#num_inv").val();
		var nom_prod = $("#nom_prod").val();
		var prd_id = $("#prd_id").val();
		var cat_id = $("#cat_id").val();
		var srv_id = $("#srv_id").val();
		var fur_id = $("#fur_id").val();
		
		$.ajax({
			   type: "POST", 
			   url: "!pretList!GetListMateriel", 
			   data: {
				   num_inv					: num_inv,
				   nom_prod					: nom_prod,
				   fur_id					: fur_id,
				   prd_id					: prd_id,
				   cat_id					: cat_id,
				   srv_id					: srv_id,
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
		
		
		
		var tab = $("#tableMateriel");
		tab.empty();
		$("#tableMateriel").append(
				"<thead><tr>" +
			     	"<th><span class=\"glyphicon glyphicon-barcode\" > </span> C Barre</th>"+
					"<th>Catégorie</th>"+
					"<th>Produit</th>"+
					"<th>Fournisseur</th>"+
					"<th>Date Achat </th>"+
					"<th>Affectation</th>"+
					"<th>Prêt</th>"+
				"</tr></thead><tbody>"
		);
		var note = "";
		var nbr = 0;
		$.each(list, function(key, row) {
			nbr++;
			var ttc = ((row['prd_prix_ht'] * row['prd_tva'])/100)+row['prd_prix_ht'];
			ttc = parseFloat(ttc).toFixed(2); 
			$("#tableMateriel").append(
					"<tr onclick=\"refreshProd('"+row['cat_id']+"')\" >" +
					    "<td>"+row['sto_num_inventaire'] +"</td>"+
					    "<td>"+row['cat_nom'] +"</td>"+
						"<td>"+row['prd_nom'] +"</td>"+
						"<td>"+row['fur_raison_social'] +"</td>"+
						"<td>"+row['sto_date_achat']+"</td>"+
						"<td>"+row['srv_nom'] +"</td>"+
						"<td>  " + 
							"<button type=\"button\" class=\"btn btn-default btn-xs  btn btn-info\" onclick=\"pretAdd('"+row['prd_id']+"');\"> <span class=\"glyphicon glyphicon-retweet \"></span></button>" +
						" </td>"+
					"</tr>"
			); 																					   
	
			
		});
		$("#tableMateriel").append("</table>");
		
	}
	
	

	/**
	 * pretAdd
	 */
	pretAdd = function(prd_id) {
		
		$("#prd_id").val(prd_id);
		$("#prt_nom").val('');
		$("#prt_prenom").val('');
		$("#prt_email").val('');
		$("#prt_diplome").val('');
		$("#prt_num_tel").val('');
		$("#prt_date_pret").val('');
		$("#prt_date_retour_prevu").val('');
		$("#prt_commentaire").val('');

		
		
		
		$("#addPretMat").dialog({
			modal: true,
			width: 700,
			buttons: {
				"Enregistrer": function(){ 
					if($("#prt_nom").val().length < 1)		{ alert ("Nom obligatoire!");		return (0); }
					if($("#prt_prenom").val().length < 1)	{ alert ("Prénom obligatoire !");	return (0); }
					if($("#prt_email").val().length < 1)	{ alert (" Email obligatoire") ; 	return (0); }
				    var form_data = new FormData();                   
					form_data.append("prd_id",				$("#prd_id").val());
					form_data.append("prt_nom",				$("#prt_nom").val());
					form_data.append("prt_prenom",			$("#prt_prenom").val());
					form_data.append("prt_email",			$("#prt_email").val());
					form_data.append("prt_diplome",			$("#prt_diplome").val());
					form_data.append("prt_num_tel",			$("#prt_num_tel").val());
					form_data.append("prt_date_pret",		$("#prt_date_pret").val());
					form_data.append("prt_date_retour_prevu",		$("#prt_date_retour_prevu").val());
					form_data.append("prt_commentaire",		$("#prt_commentaire").val());

					$.ajax({
						url: "!pretList!AddPret", 
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
