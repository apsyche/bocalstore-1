$(function() {

	save=function(pid){


		
		if($("#sexe").val() == 0)				{ alert ("H/F obligatoire  !"); 					return (0); }
		if($("#res_nom").val().length < 2)		{ alert ("Nom obligatoire  !"); 					return (0); }
		if($("#res_prenom").val().length < 2)	{ alert ("Prénom obligatoire  !"); 					return (0); }
		if(($("#ddn_j").val()==0)||($("#ddn_m").val()==0)||($("#ddn_a").val()==0)){ alert ("Date de naissance obligatoire  !"); return (0); }
		if($("#res_adresse").val().length < 2)	{alert ("Adresse obligatoire  !");					return (0);	}
		if($("#res_profession").val() == 0){ alert ("Profession obligatoire !"); 					return (0); }
		if($("#res_lieu_naissance").val().length < 2){ alert ("Lieu de naissance obligatoire  !"); 	return (0); }
		if($("#res_locataire").val() == 0)		{ alert ("Locataire obligatoire  !"); 				return (0); }
		if($("#res_proprio").val() == 0)		{ alert ("Propriétaire obligatoire  !"); 			return (0); }
		
		
		$.ajax({
			   type: "POST", 
			   url: "!resAdd!Save", 
			   data: {
				   	res_id : pid,
				   	res_sexe : $("#res_sexe").val(),
				   	res_nom : $("#res_nom").val(),
				   	res_nom_jf : $("#res_nom_jf").val(),
				   	res_prenom : $("#res_prenom").val(),
				   	ddn_j : $("#ddn_j").val(),
				   	ddn_m : $("#ddn_m").val(),
				   	ddn_a: $("#ddn_a").val(),
				   	res_adresse : $("#res_adresse").val(),
				   	res_profession : $("#res_profession").val(),
				   	res_lieu_naissance : $("#res_lieu_naissance").val(),
				   	res_village : $("#res_village").val(),
				   	res_locataire : $("#res_locataire").val(),
				   	res_proprio : $("#res_proprio").val(),
				   	res_habitant : $("#res_habitant").val()
			   },
			   async: false, 
			   success: function(data){
				   location.href = "res!index!resAdd!"+data;
			   },
		  	   error:function(xhr, ajaxOptions, thrownError){
					alert("save access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
			   }
		
		});
	};
	



del=function(pid){
		$("#user_login").val("");
		$("#user_pass").val("");

		if(pid == ''){
			alert("Rien a supprimer, Aucun Résident sélectionné !");
			return ;
		}
		
		if(confirm("Voulez vous supprimer vraiment cet élément ?")){
			

			if(rightDelete != '1'){
				alert("vous n'avez pas de droit de supression");
				
				$("#deleteDialog").dialog({
					modal: true,
					width: 700,
					buttons: {
						"Supprimer": function(){ 
							

							if($("#user_login").val() == 0 ){
								alert ("Nom d'utilisateur obligatoire  !");
								return (0);
							}
							
							if($("#user_pass").val().length < 2){
								alert ("Mot de passe obligatoire !");
								return (0);
							}

							 
						    var form_data = new FormData();                   
						    form_data.append("user_login",  $("#user_login").val()) ;
						    form_data.append("user_pass",   $("#user_pass" ).val()) ;

						    
							$.ajax({
								url: "!resAdd!CheckUserRightDelete", 
								type: "POST", 
								cache : false,
								contentType : false,
								processData : false,
								data : form_data,
								success: function(data){
									 if(data == '0'){
										 alert("Vous n'avez pas les droits de suppression !");
										 return;
									 }else{
										 $.ajax({
											   type: "POST", 
											   url: "!resAdd!Delete", 
											   data: {
												   	res_id : pid
											   },
											   async: false, 
											   success: function(data){
												   alert(data);
												   location.href = "res!index!resSearch";
											   },
										  	   error:function(xhr, ajaxOptions, thrownError){
													alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
											   }
										});
									 }
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
			else{
				 $.ajax({
					   type: "POST", 
					   url: "!resAdd!Delete", 
					   data: {
						   	res_id : pid
					   },
					   async: false, 
					   success: function(data){
						   alert(data);
						   location.href = "res!index!resSearch";
					   },
				  	   error:function(xhr, ajaxOptions, thrownError){
							alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
					   }
				});
						
			}
			

		}
};
	
	
	
clearAll=function(){
	location.href = "res!index!resAdd";
}



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



print=function(pid){
	if(pid == ''){
		alert("Rien a imprimer, Aucun Résident sélectionné !");
		return;
	}
	location.href = "resPdf!index!"+pid;
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
