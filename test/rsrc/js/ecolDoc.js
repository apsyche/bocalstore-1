$(function() {
	

	addDocs=function(redId){
		if(redId == ''){
			alert("Aucune Société sélectionnée !");
			return;
		}

		
		$("#addDocDialog").dialog({
			modal: true,
			width: 700,
			buttons: {
				"Enregistrer": function(){ 
					

					if($("#edoc_type").val() == 0 ){
						alert ("Type document obligatoire  !");
						return (0);
					}
					
					if($("#edoc_nom").val().length < 2){
						alert ("Nom document obligatoire  !");
						return (0);
					}

					if($("#edoc_description").val().length < 2){
						alert ("Description document obligatoire  !");
						return (0);
					}
					
					
					var file_data = $("#edoc_file").prop("files")[0];   
				    var form_data = new FormData();                   
				    form_data.append("edoc_file", file_data) ;             
				    form_data.append("edoc_id", redId) ;
				    form_data.append("edoc_ecl_id", $("#edoc_ecl_id").val()) ;
				    form_data.append("edoc_type", $("#edoc_type").val()) ; 
				    form_data.append("edoc_nom", $("#edoc_nom").val()) ; 
				    form_data.append("edoc_description", $("#edoc_description").val()) ;
				    
					$.ajax({
						url: "!ecolDoc!AddFile", 
						type: "POST", 
						cache : false,
						contentType : false,
						processData : false,
						data : form_data,
						success: function(data){
						 if(data.length >0){
							 alert(data);
						 }
						   	location.href = "ecol!index!ecolDoc!"+redId;
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
				alert("Rien a supprimer, Aucune Société sélectionnée !");
				return ;
			}
			
			if(confirm("Voulez vous supprimer vraiment ce document ?")){
				$.ajax({
					   type: "POST", 
					   url: "!ecolDoc!DeleteDoc", 
					   data: {
						   	doc_id : iddoc
					   },
					   async: false, 
					   success: function(data){
						   alert(data);
						   location.href = "ecol!index!ecolDoc!"+idres;
					   },
				  	   error:function(xhr, ajaxOptions, thrownError){
							alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
					   }
				});
			}
		};


});
