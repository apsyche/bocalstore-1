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
					

					if($("#ddoc_type").val() == 0 ){
						alert ("Type document obligatoire  !");
						return (0);
					}
					
					if($("#ddoc_nom").val().length < 2){
						alert ("Nom document obligatoire  !");
						return (0);
					}

					if($("#ddoc_description").val().length < 2){
						alert ("Description document obligatoire  !");
						return (0);
					}
					
					
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



	delDoc=function(iddoc,idres){

			if(idres == ''){
				alert("Rien a supprimer, Aucune Société sélectionnée !");
				return ;
			}
			
			if(confirm("Voulez vous supprimer vraiment ce document ?")){
				$.ajax({
					   type: "POST", 
					   url: "!cmdDevisDoc!DeleteDoc", 
					   data: {
						   	doc_id : iddoc
					   },
					   async: false, 
					   success: function(data){
						   alert(data);
						   location.href = "cmd!index!cmdDevisDoc!"+idres;
					   },
				  	   error:function(xhr, ajaxOptions, thrownError){
							alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
					   }
				});
			}
		};


});
