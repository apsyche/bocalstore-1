$(function() {
	save=function(pid){
		
		if($("#per_sexe").val() == 0){
			alert ("H/F obligatoire  !");
			return (0);
		}
		
		if($("#per_num_emp").val().length < 2){
			alert ("Numéro employé obligatoire  !");
			return (0);
		}
		

		var d = $("#pers_add_form").serialize();
		$.ajax({
			type : "POST",
			url : "!persAdd!Save",
			data : d,
			async : false,
			success : function(data) {
				location.href = "!pers!index!persAdd!"+data;	
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
	
	
clearAll=function(){
	location.href = "pers!index!persAdd";
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
		alert("Rien a imprimer, Aucun Personnel sélectionné !");
		return;
	}
	location.href = "persPdf!index!"+pid;
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
