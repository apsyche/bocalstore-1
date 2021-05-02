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
					

					if($("#fdoc_type").val() == 0 ){
						alert ("Type document obligatoire  !");
						return (0);
					}
					
					if($("#fdoc_nom").val().length < 2){
						alert ("Nom document obligatoire  !");
						return (0);
					}

					if($("#fdoc_description").val().length < 2){
						alert ("Description document obligatoire  !");
						return (0);
					}
					
					
					var file_data = $("#fdoc_file").prop("files")[0];   
				    var form_data = new FormData();                   
				    form_data.append("fdoc_file", file_data) ;             
				    form_data.append("fdoc_id", redId) ;
				    form_data.append("fdoc_fur_id", $("#fdoc_fur_id").val()) ;
				    form_data.append("fdoc_type", $("#fdoc_type").val()) ; 
				    form_data.append("fdoc_nom", $("#fdoc_nom").val()) ; 
				    form_data.append("fdoc_description", $("#fdoc_description").val()) ;
				    
					$.ajax({
						url: "!fourDoc!AddFile", 
						type: "POST", 
						cache : false,
						contentType : false,
						processData : false,
						data : form_data,
						success: function(data){
						 if(data.length >0){
							 alert(data);
						 }
						   	location.href = "four!index!fourDoc!"+redId;
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
					   url: "!fourDoc!DeleteDoc", 
					   data: {
						   	doc_id : iddoc
					   },
					   async: false, 
					   success: function(data){
						   alert(data);
						   location.href = "four!index!fourDoc!"+idres;
					   },
				  	   error:function(xhr, ajaxOptions, thrownError){
							alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
					   }
				});
			}
		};


});
