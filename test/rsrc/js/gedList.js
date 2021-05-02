$(function() {
	
	addDocs=function(){
	
		$("#addDocDialog").dialog({
			modal: true,
			width: 700,
			buttons: {
				"Enregistrer": function(){ 

					if($("#gedd_type").val() == 0 ){
						alert ("Type document obligatoire  !");
						return (0);
					}
					
					if($("#gedd_nom").val().length < 2){
						alert ("Nom document obligatoire  !");
						return (0);
					}

					if($("#gedd_description").val().length < 2){
						alert ("Description document obligatoire  !");
						return (0);
					}
					
					
					var file_data = $("#gedd_file").prop("files")[0];   
				    var form_data = new FormData();                   
				    form_data.append("gedd_file", file_data) ;             
				    form_data.append("gedd_id", "") ;
				    form_data.append("gedd_type", $("#gedd_type").val()) ; 
				    form_data.append("gedd_nom", $("#gedd_nom").val()) ; 
				    form_data.append("gedd_description", $("#gedd_description").val()) ;
				    
					$.ajax({
						url: "!gedList!AddFile", 
						type: "POST", 
						cache : false,
						contentType : false,
						processData : false,
						data : form_data,
						success: function(data){
						 if(data.length >0){
							 alert(data);
						 }
						   	location.href = "ged!index!gedList!";
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



	delDoc=function(iddoc){

			if(iddoc == ''){
				alert("Rien a supprimer, Aucun document sélectionné !");
				return ;
			}
			
			if(confirm("Voulez vous supprimer vraiment ce document ?")){
				$.ajax({
					   type: "POST", 
					   url: "!gedList!DeleteDoc", 
					   data: {
						   ddoc_id : iddoc
					   },
					   async: false, 
					   success: function(data){
						   alert(data);
						   location.href = "ged!index!gedList!";
					   },
				  	   error:function(xhr, ajaxOptions, thrownError){
							alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
					   }
				});
			}
		};


});
