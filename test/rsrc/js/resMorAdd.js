$(function() {
	$(function() {
		$("#res_date_ent").datepicker();
		
	});
	
	
	save=function(pid){

		if($("#res_raison_social").val() == 0){
			alert ("Raison Social Obligatoire  !");
			return (0);
		}
		
		
		
		$.ajax({
			   type: "POST", 
			   url: "!resMorAdd!Save", 
			   data: {
				   	res_id : pid,
				   	res_raison_social : $("#res_raison_social").val(),
				   	res_denom : $("#res_denom").val(),
				   	res_num_rc : $("#res_num_rc").val(),
				   	res_type_ent : $("#res_type_ent").val(),
				   	res_adr_ent : $("#res_adr_ent").val(),
				   	res_village_ent : $("#res_village_ent").val(),
				   	res_date_ent: $("#res_date_ent").val(),
				   	res_nom_jf_rep : $("#res_nom_jf_rep").val(),
				   	res_nom_rep : $("#res_nom_rep").val(),
				   	res_prenom_rep : $("#res_prenom_rep").val(),
				   	res_nom_pere_rep : $("#res_nom_pere_rep").val(),
				   	res_nom_mere_rep : $("#res_nom_mere_rep").val(),
				   	res_adresse_rep : $("#res_adresse_rep").val(),
				   	res_lieu_naiss_rep : $("#res_lieu_naiss_rep").val(),
				   	res_village_rep : $("#res_village_rep").val(),
				   	res_ddn_rep_j : $("#res_ddn_rep_j").val(),
					res_ddn_rep_m : $("#res_ddn_rep_m").val(),
					res_ddn_rep_a : $("#res_ddn_rep_a").val()
			   },
			   async: false, 
			   success: function(data){
				   location.href = "res!index!resMorAdd!"+data;
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
												   location.href = "res!index!resAdd";
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
			
			
			
			
		}
};
	
	
	
	
clearAll=function(){
	location.href = "res!index!resMorAdd";
}



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
					url: "!resMorAdd!AddFile", 
					type: "POST", 
					cache : false,
					contentType : false,
					processData : false,
					data : form_data,
					success: function(data){
					 if(data.length >0){
						 alert(data);
					 }
					   	location.href = "res!index!resMorAdd!"+redId;
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
				   url: "!resMorAdd!DeleteDoc", 
				   data: {
					   	res_doc_id : iddoc
				   },
				   async: false, 
				   success: function(data){
					   alert(data);
					   location.href = "res!index!resMorAdd!"+idres;
				   },
			  	   error:function(xhr, ajaxOptions, thrownError){
						alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
				   }
			});
		}
	};


});
