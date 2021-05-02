$(function() {
   
	
	
	$(function() {
		$("#soc_date").datepicker();
	});

	addAide=function(redId){
		if(redId == ''){
			alert("Aucun Résident sélectionné !");
			return;
		}

		
		$("#addAideDialog").dialog({
			modal: true,
			width: 700,
			buttons: {
				"Enregistrer": function(){ 
					

									
					if($("#soc_date").val().length < 2){
						alert ("Date obligatoire  !");
						return (0);
					}

					if($("#soc_montant").val().length < 2){
						alert ("Montant obligatoire  !");
						return (0);
					}
					
					var form_data = new FormData();                          
				    form_data.append("res_id", redId) ;
				    form_data.append("soc_date", $("#soc_date").val()) ;
				    form_data.append("soc_type", $("#soc_type").val()) ;
				    form_data.append("soc_commentaire", $("#soc_commentaire").val()) ; 
				    form_data.append("soc_montant", $("#soc_montant").val()) ; 

				    
					$.ajax({
						url: "!socAdd!AddAide", 
						type: "POST", 
						cache : false,
						contentType : false,
						processData : false,
						data : form_data,
						success: function(data){
						 if(data.length >0){
							// alert(data);
						 }
						   	location.href = "soc!index!socAdd!"+redId;
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






delAide=function(idSoc,idres){

		if(idres == ''){
		alert("Rien a supprimer, Aucun Résident sélectionné !");
		return ;
	}
	
	if(confirm("Voulez vous supprimer vraiment ce document ?")){
		$.ajax({
			   type: "POST", 
			   url: "!socAdd!DeleteAide", 
			   data: {
				   soc_id : idSoc
			   },
			   async: false, 
			   success: function(data){
				   alert(data);
				   location.href = "soc!index!socAdd!"+idres;
			   },
		  	   error:function(xhr, ajaxOptions, thrownError){
					alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
			   }
		});
	}
};





addDocs=function(redId){
	if(redId == ''){
		alert("Aucun Résident sélectionné !");
		return;
	}

	
	$("#addDocDialog").dialog({
		modal: true,
		width: 700,
		buttons: {
			"Enregistrer": function(){ 
				

				if($("#rdoc_type").val() == 0 ){
					alert ("Type document obligatoire  !");
					return (0);
				}
				
				if($("#rdoc_nom").val().length < 2){
					alert ("Nom document obligatoire  !");
					return (0);
				}

				if($("#rdoc_description").val().length < 2){
					alert ("Description document obligatoire  !");
					return (0);
				}
				
				
				var file_data = $("#rdoc_file").prop("files")[0];   
			    var form_data = new FormData();                   
			    form_data.append("rdoc_file", file_data) ;             
			    form_data.append("rdoc_id", redId) ;
			    form_data.append("rdoc_res_id", $("#rdoc_res_id").val()) ;
			    form_data.append("rdoc_type", $("#rdoc_type").val()) ; 
			    form_data.append("rdoc_nom", $("#rdoc_nom").val()) ; 
			    form_data.append("rdoc_description", $("#rdoc_description").val()) ;
			    
				$.ajax({
					url: "!resAdd!AddFile", 
					type: "POST", 
					cache : false,
					contentType : false,
					processData : false,
					data : form_data,
					success: function(data){
					 if(data.length >0){
						 alert(data);
					 }
					   	location.href = "res!index!resAdd!"+redId;
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


delDoc=function(iddoc,idres){

		if(idres == ''){
			alert("Rien a supprimer, Aucun Résident sélectionné !");
			return ;
		}
		
		if(confirm("Voulez vous supprimer vraiment ce document ?")){
			$.ajax({
				   type: "POST", 
				   url: "!resAdd!DeleteDoc", 
				   data: {
					   	res_doc_id : iddoc
				   },
				   async: false, 
				   success: function(data){
					   alert(data);
					   location.href = "res!index!resAdd!"+idres;
				   },
			  	   error:function(xhr, ajaxOptions, thrownError){
						alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
				   }
			});
		}
	};


});
