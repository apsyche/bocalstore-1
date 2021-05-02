$(function() {
	
	
	var selectedcat = 0;
	
	selectCat=function(cat_id){
		refreshCat();
		row="#crow"+cat_id;
		$(row).css('background-color','#5FBA7D');
		selectedcat = cat_id;
	}
	
	
	delCat=function(cat_id){

		if(confirm("Voulez vous supprimer cette catégorie ?")){
			$.ajax({
				   type: "POST", 
				   url: "!prdList!DelCat", 
				   data: {
					   cat_id : cat_id
				   },
				   async: false, 
				   success: function(data){
					   alert(data);
					   refreshCat();
					   //location.href = "four!index!prdList!";
				   },
			  	   error:function(xhr, ajaxOptions, thrownError){
						alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
				   }
			});
		}
	}
	
	delProd=function(prd_id){
	
		if(confirm("Voulez vous supprimer ce produit ?")){
			$.ajax({
				   type: "POST", 
				   url: "!prdList!DelProd", 
				   data: {
					   prd_id : prd_id
				   },
				   async: false, 
				   success: function(data){
					   alert(data);
					   refreshProd();
					   //location.href = "four!index!prdList!";
				   },
			  	   error:function(xhr, ajaxOptions, thrownError){
						alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
				   }
			});
		}
	}
	
	
	saveCat=function( cat_id,cat_nom="",cat_description=""){
		
	
		$("#cat_nom").val(cat_nom);
		$("#cat_description").val(cat_description);

		
		
		$("#addCatDialog").dialog({
			modal: true,
			width: 700,
			buttons: {
				"Enregistrer": function(){ 
					
					if($("#cat_nom").val().length < 2){
						alert ("Catégorie obligatoire  !");
						return (0);
					}
					
					if($("#cat_description").val().length < 2){
						alert ("Description obligatoire  !");
						return (0);
					}
					
					
				    var form_data = new FormData(); 
				    form_data.append("cat_id", cat_id) 
				    form_data.append("cat_nom", $("#cat_nom").val()) ;             
				    form_data.append("cat_description", $("#cat_description").val()) ;
				    
					$.ajax({
						url: "!prdList!SaveCat", 
						type: "POST", 
						cache : false,
						contentType : false,
						processData : false,
						data : form_data,
						success: function(data){
						 if(data.length >0){
							 alert(data);
						 }
						   	//location.href = "four!index!prdList!";
						 	refreshCat();
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
	
	
	saveProd=function(prd_id='', prd_nom='', prd_description ='', prd_prix_ht='',prd_tva='19',prd_ref=''){
		if(selectedcat == 0){
			alert("aucune catégorie séléctionnée")
			return ;
		}
		
		$("#prd_id").val(prd_id);
		$("#prd_nom").val(prd_nom);
		$("#prd_description").val(prd_description);
		$("#prd_prix_ht").val(prd_prix_ht);
		
		
		$("#addProdDialog").dialog({
			modal: true,
			width: 700,
			buttons: {
				"Enregistrer": function(){ 

					if($("#prd_nom").val() == 0 ){
						alert ("Nom Produit obligatoire  !");
						return (0);
					}
					
					if($("#prd_description").val().length < 2){
						alert ("Description obligatoire  !");
						return (0);
					}
					
					
				    var form_data = new FormData();
				    form_data.append("prd_id",prd_id) ; 
				    form_data.append("prd_cat_id",selectedcat) ;   
				    form_data.append("prd_nom", $("#prd_nom").val()) ;    
				    form_data.append("prd_description", $("#prd_description").val()) ;
				    form_data.append("prd_prix_ht", $("#prd_prix_ht").val()) ;
				    
				    
					$.ajax({
						url: "!prdList!SaveProd", 
						type: "POST", 
						cache : false,
						contentType : false,
						processData : false,
						data : form_data,
						success: function(data){
						 if(data.length >0){
							 alert(data);
						 }
						 
						   	//location.href = "four!index!prdList!"+redId;
						 	refreshProd(selectedcat);
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
	
	refreshCat=function(){

		

		var list ;		
		$.ajax({
			   type: "POST", 
			   url: "!prdList!ListCat", 
			   data: {
				   id: 0
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
	
		var tab = $("#tableCat");
		tab.empty();
		$("#tableCat").append(
				"<thead><tr>" +
					"<th>N°</th>"+
					"<th>Nom</th>"+
					"<th>Description</th>"+
					"<th>Fct</th>"+
				"</tr></thead><tbody>"
		);
		var note = "";
		var nbr = 0;
		$.each(list, function(key, row) {
			nbr++;
			$("#tableCat").append(
					"<tr id=\"crow"+row['cat_id']+"\" onclick=\"selectCat('"+row['cat_id']+"'); refreshProd('"+row['cat_id']+"')\" >" +
						"<td>"+nbr+"</td>"+
						"<td>"+row['cat_nom'] +"</td>"+
						"<td>"+row['cat_description'] +"</td>"+

						"<td style=\"width: 70px\">"+
						 	"<button type=\"button\" class=\"btn btn-danger btn-xs\" onclick=\"saveCat('"+row['cat_id']+"','"+row['cat_nom']+"','"+row['cat_description']+"')\"><span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span> </button>" +
						 	"&nbsp;"+
						 	"<button type=\"button\" class=\"btn btn-danger btn-xs\" onclick=\"delCat('"+row['cat_id']+"')\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span> </button>" +
						"</td>"+
					"</tr>"
			);
			
		});
		$("#tableCat").append("</tbody>");
		
		
	}
	
	
	refreshProd=function(cat_id=""){		
		var tab = $("#tableProd");
		tab.empty();
		$("#tableProd").append(
				"<thead><tr>" +
					"<th>N°</th>"+
					"<th>Nom</th>"+
					"<th>Description</th>"+
					"<th>Prix</th>"+
				"</tr></thead><tbody>"
		);
		
		if(cat_id == ""){
			return;
		}
		
		var list ;		
		$.ajax({
			   type: "POST", 
			   url: "!prdList!ListProd", 
			   data: {
				   cat_id: cat_id
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

		var note = "";
		var nbr = 0;
		$.each(list, function(key, row) {
			nbr++;
			$("#tableProd").append(
					"<tr>" +
						"<td>"+nbr+"</td>"+
						"<td>"+row['prd_nom'] +"</td>"+
						"<td>"+row['prd_description'] +"</td>"+
						"<td>"+row['prd_prix_ht'] +"</td>"+
		
						"<td style=\"width: 70px\">"+
					 	"<button type=\"button\" class=\"btn btn-danger btn-xs\" onclick=\"saveProd('"+row['prd_id']+"','"+row['prd_nom']+"','"+row['prd_description']+"','"+row['prd_prix_ht']+"','"+row['prd_tva']+"','"+row['prd_ref']+"')\"><span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span> </button>" +
					 	"&nbsp;"+
					 	"<button type=\"button\" class=\"btn btn-danger btn-xs\" onclick=\"delProd('"+row['prd_id']+"','"+row['prd_cat_id']+"')\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span> </button>" +
					"</td>"+
					"</tr>"
			);
			
		});
		$("#tableProd").append("</tbody>");
		
	}

	refreshCat();
	refreshProd();
});
