$(function() {
	
	
	
	$(function() {
		$("#psonc_date").datepicker();
		
	});
	
	save=function(pid){
		
		if($("#per_sexe").val() == 0){
			alert ("H/F obligatoire  !");
			return (0);
		}
		
		if($("#per_num_emp").val().length < 2){
			alert ("Numéro employé obligatoire  !");
			return (0);
		}
		
		var d = $("#pers_Dossier_form").serialize();
		$.ajax({
			type : "POST",
			url : "!persDossier!Save",
			data : d,
			async : false,
			success : function(data) {
				location.href = "!pers!index!persDossier!"+data;	
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
			alert("Rien a supprimer, Aucune personne sélectionnée !");
			return ;
		}
		
		if(confirm("Voulez vous supprimer vraiment cet élément ?")){
			$.ajax({
				   type: "POST", 
				   url: "!persAdd!Delete", 
				   data: {
					   per_id : pid
				   },
				   async: false, 
				   success: function(data){
					   alert(data);
					   location.href = "pers!index!persList";
				   },
			  	   error:function(xhr, ajaxOptions, thrownError){
						alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
				   }
			});
		}
};
	
	
clearAll=function(perId){
	location.href = "pers!index!persDossier!"+perId;
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
					 
					 location.href = "pers!index!persDossier!"+redId;
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
					   location.href = "pers!index!persDossier!"+idres;
				   },
			  	   error:function(xhr, ajaxOptions, thrownError){
						alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
				   }
			});
		}
	};
	
	
	
	
	
	

	addSantions = function(mode,per_id) {
		
		if(mode == 'E'){
			return;
		}
		
		if(mode == 'N'){
			$("#psonc_type").val('0');
			$("#psonc_morif").val('0');
			$("#psonc_date").val('');
			$("#psonc_duree").val('0');

		}
		
		$("#editSanction").dialog({
			modal: true,
			width: 700,
			buttons: {
				"Enregistrer": function(){ 
					
				    var form_data = new FormData();                   
				    form_data.append("mode",mode);
				    form_data.append("per_id",per_id);
					form_data.append("psonc_type",		$("#psonc_type").val());
					form_data.append("psonc_morif",		$("#psonc_morif").val());
					form_data.append("psonc_date",		$("#psonc_date").val());
					form_data.append("psonc_duree",		$("#psonc_duree").val());

					$.ajax({
						url: "!persDossier!AddSanctions", 
						type: "POST", 
						cache : false,
						contentType : false,
						processData : false,
						data : form_data,
						success: function(data){
						 if(data.length >0){
							 alert(data);
						 }
						 location.href = "pers!index!persDossier!"+per_id;
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
	
	


});
