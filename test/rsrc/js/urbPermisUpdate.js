$(function() {

	
	$(function() {
		$("#pc_date").datepicker();
		
	});
	
	save=function(resId,posId,pcInitId){
		
		if($("#pc_num").val().length < 2){
			alert ("N° Permis de Construire Obligatoire !");
			$("#pc_num").focus();
			return (0);
		}
		
		if($("#pc_date").val().length < 2){
			alert ("Date Permis de Construire Obligatoire !");
			$("#pc_date").focus();
			return (0);
		}	
		
		if($("#pc_usage").val() == '0'){
			alert ("Usage Obligatoire !");
			$("#pc_usage").focus();
			return (0);
		}

		if($("#pc_description").val().length < 2){
			alert ("Description Obligatoire !");
			$("#pc_description").focus();
			return (0);
		}
		
		if($("#pc_estim_budget").val().length < 2){
			alert ("Budget Obligatoire !");
			$("#pc_estim_budget").focus();
			return (0);
		}
		
		if($("#pc_recepisse").val().length < 2){
			alert ("N° Récepisse dépot Obligatoire !");
			$("#pc_recepisse").focus();
			return (0);
		}
		
		var d= $("#pc_form").serialize();
		$.ajax({
			   type: "POST", 
			   url: "!urbPermisConst!Save", 
			   data: d,
			   async: false, 
			   success: function(data){
				   location.href = "!urb!index!urbPermisUpdate!index!"+resId+"!"+posId+"!"+ pcInitId +"!"+data;
			   },
		  	   error:function(xhr, ajaxOptions, thrownError){
					alert("save access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
			   }
		
		});
	};
	


del=function(resId,posId,pcId){

		if(pcId == ''){
			alert("Rien a supprimer, Aucun PC sélectionné!");
			return ;
		}
		
		if(confirm("Voulez vous supprimer vraiment cet élément ?")){
			$.ajax({
				   type: "POST", 
				   url: "!urbPermisConst!Delete", 
				   data: {
					   	pc_id : pcId
				   },
				   async: false, 
				   success: function(data){
					   alert(data);
					   location.href = "urb!index!urbPossAdd!index!"+resId+"!"+posId;
				   },
			  	   error:function(xhr, ajaxOptions, thrownError){
						alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
				   }
			});
		}
};
	
	

addDocs=function(resId,posId,pcInitId,pcId){
	if(pcId == ''){
		alert("Aucun PC sélectionné !");
		return;
	}

	
	$("#addDocDialog").dialog({
		modal: true,
		width: 700,
		buttons: {
			"Enregistrer": function(){ 
				

				if($("#pcdoc_type").val() == 0 ){
					alert ("Type document obligatoire  !");
					return (0);
				}
				
				if($("#pcdoc_nom").val().length < 2){
					alert ("Nom document obligatoire  !");
					return (0);
				}

				if($("#pcdoc_description").val().length < 2){
					alert ("Description document obligatoire  !");
					return (0);
				}
				
				
				var file_data = $("#pcdoc_file").prop("files")[0];   
			    var form_data = new FormData();                   
			    form_data.append("pcdoc_file", file_data) ;             
			    form_data.append("pcdoc_id", "") ;
			    form_data.append("pcdoc_pc_id", $("#pcdoc_pc_id").val()) ;
			    form_data.append("pcdoc_type", $("#pcdoc_type").val()) ; 
			    form_data.append("pcdoc_nom", $("#pcdoc_nom").val()) ; 
			    form_data.append("pcdoc_description", $("#pcdoc_description").val()) ;
			    
				$.ajax({
					url: "!urbPermisConst!AddFile", 
					type: "POST", 
					cache : false,
					contentType : false,
					processData : false,
					data : form_data,
					success: function(data){
					 if(data.length >0){
						 alert(data);
					 }
					 location.href = "!urb!index!urbPermisRenew!index!"+resId+"!"+posId+"!"+pcInitId+"!"+pcId;
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




printPc=function(pid){
	if(pid == ''){
		alert("Rien a imprimer, Aucun Permis de Construire Sélectionné !");
		return;
	}
	location.href = "urbPdf!index!permisConstUpdate!" + pid;
}

printDoc=function(pid){

	location.href = "urbPdf!index!docPc!";
}


delDoc=function(resId,posId,pcId,pcinit,iddoc){

		if(pcId == ''){
			alert("Rien a supprimer, Aucun Résident sélectionné !");
			return ;
		}
		
		if(confirm("Voulez vous supprimer vraiment ce document ?")){
			$.ajax({
				   type: "POST", 
				   url: "!urbPermisConst!DeleteDoc", 
				   data: {
					   	p_doc_id : iddoc
				   },
				   async: false, 
				   success: function(data){
					   alert(data);
					   location.href = "!urb!index!urbPermisRenew!index!"+resId+"!"+posId+"!"+pcinit+"!"+pcId;
				   },
			  	   error:function(xhr, ajaxOptions, thrownError){
						alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
				   }
			});
		}
	};


});
