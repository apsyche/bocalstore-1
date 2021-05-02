$(function() {
	
	$(function() {
		$("#cmd_date").datepicker();
	});
	
	showEcoleService=function(type){
	
		
		if($("#cmp_type").val() == "ECL"){
			$("#td_ecole").show();
			$("#td_srvice").hide();
		}
		
		if($("#cmp_type").val() == "SRV"){
			$("#td_ecole").hide();
			$("#td_srvice").show();
		}
		
	}
	
	
	save=function(pid){
		
		if($("#cmd_fur_id").val() == 0){
			alert ("Fournisseur obligatoire  !");
			return (0);
		}

		if($("#cmd_date").val() == ''){
			alert ("Date obligatoire  !");
			return (0);
		}
		
		
		if($("#cmd_description").val() == 0){
			alert ("Description obligatoire  !");
			return (0);
		}
	
		var d = $("#commande_add_form").serialize();
		$.ajax({
			type : "POST",
			url : "!cmdAdd!Save",
			data : d,
			async : false,
			success : function(data) {
				location.href = "!cmd!index!cmdAdd!"+data;	
			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert("save access error." + "\nstatusText: "
						+ xhr.statusText + "\nthrownError: "
						+ thrownError);
			}

		});

	};
	

	

del=function(pid){

		if(pid == ''){
			alert("Rien a supprimer, Aucun Résident sélectionné !");
			return ;
		}
		
		if(confirm("Voulez vous supprimer vraiment cet élément ?")){
			$.ajax({
				   type: "POST", 
				   url: "!cmdAdd!Delete", 
				   data: {
					   	cmd_id : pid
				   },
				   async: false, 
				   success: function(data){
					   alert(data);
					   location.href = "cmd!index!cmdList";
				   },
			  	   error:function(xhr, ajaxOptions, thrownError){
						alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
				   }
			});
		}
};
		

print=function(pid){
	if(pid == ''){
		alert("Rien a imprimer, Aucun Résident sélectionné !");
		return;
	}
	location.href = "cmdPdf!index!"+pid; 
}


/**
 * 
 * @param addProduits
 */
addProduits = function(pid) {

	if(pid == ''){
		alert("Rien a Ajouter, Aucun Fournisseur sélectionné !");
		return ;
	}

	var list ;		
	$.ajax({
		   type: "POST", 
		   url: "!cmdAdd!GetProduitFromFournisseur", 
		   data: {
			   fur_id: pid
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
	
	
	
	var tab = $("#tableProd");
	tab.empty();
	$("#tableProd").append(
			"<thead><tr>" +
				"<th>Qte</th>"+
				"<th>Catégorie</th>"+
				"<th>Description</th>"+
				"<th></th>"+
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
					"<td> <input  style=\"text-align: right; \" type=\"text\" class=\"form-control\" id=\"prd_id_sel\" name=\"prd_id_sel["+row['prd_id']+"]\" style=\"width: 30px%\" value=\"0\"> </td>"+
					"<td>"+row['cat_nom'] +"</td>"+
					"<td>"+row['cat_description'] +"</td>"+
					"<td> - </td>"+
					"<td>"+row['prd_nom']+"</td>"+
					"<td>"+row['prd_description'] +"</td>"+
				//	"<td align=\"right\">"+row['prd_prix_ht']+"</td>"+
					"<td> <input  style=\"text-align: right; \" type=\"text\" class=\"form-control\" id=\"prd_prix_ht_sel\" name=\"prd_prix_ht_sel\" style=\"width: 30px%\" value=\""+row['prd_prix_ht']+"\"> </td>"+
					"<td align=\"right\">"+row['prd_tva'] +"% </td>"+
					"<td align=\"right\">"+ ttc+"</td>"+
				"</tr>"
		);
		
	});
	$("#tableProd").append("</table>");
	
	
	$("#addProduitCommande").dialog({
		modal: true,
		width: 1000,
		buttons: {
			"Enregistrer": function(){
				
				var d= $("#produitList").serialize();
				
				$.ajax({
					type: "POST", 
					url: "!cmdAdd!SaveProduits", 
					data: d,
					async: false, 
					success : function(data) {
						location.href = "!cmd!index!cmdAdd!"+data;
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

delProduit=function(pid,dvi){
	
	if(confirm("Voulez vous supprimer vraiment ce produit ?")){
		$.ajax({
			   type: "POST", 
			   url: "!cmdAdd!DeleteProduit", 
			   data: {
				   	cmp_id : pid
			   },
			   async: false, 
			   success: function(data){
				   alert(data);
				   location.href = "!cmd!index!cmdAdd!"+dvi;
			   },
		  	   error:function(xhr, ajaxOptions, thrownError){
					alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
			   }
		});
	}
};

});
