$(function() {

	
	$(function() {
		$("#pos_date_acte").datepicker();
		
	});
	
	save=function(pid){

		var sexe = 0;
		if($("#pos_sexe_1").is(":checked")){
			sexe = 1 ;
		}
		else if($("#pos_sexe_2").is(":checked")){
			sexe = 2;
		}
		else {
			alert ("H/F obligatoire  !");
			return 0;
		}
		
		
		if($("#pos_nom").val().length < 2){
			alert ("Nom obligatoire  !");
			return (0);
		}
		
		
		if($("#pos_prenom").val().length < 2){
			alert ("Prénom obligatoire  !");
			return (0);
		}

		if(($("#ddn_j").val()==0)||($("#ddn_m").val()==0)||($("#ddn_a").val()==0)){
			alert ("Date de naissance obligatoire  !")
			return (0);
		}
		
		if($("#pos_adresse").val().length < 2){
			alert ("Adresse obligatoire  !");
			return (0);
		}
		
		if($("#pos_profession").val() == 0){
			alert ("Profession obligatoire !");
			return (0);
		}
		
		if($("#pos_lieu_naissance").val().length < 2){
			alert ("Lieu de naissance obligatoire  !");
			return (0);
		}
		
		if($("#pos_village").val() == 0){
			alert ("Village obligatoire !");
			return (0);
		}
	
		

		var d= $("#pos_form").serialize();
		$.ajax({
			   type: "POST", 
			   url: "!urbPossDecPoss!Save", 
			   data: d,
			   async: false, 
			   success: function(data){
				   location.href = "!urbPoss!index!urbPossDecPoss!index!"+data;
			   },
		  	   error:function(xhr, ajaxOptions, thrownError){
					alert("save access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
			   }
		
		});
	};
	


	"sexe_1=1&pos_profession=1&pos_ddn_j=5&pos_ddn_m=7&pos_ddn_a=2016&pos_village=3&pos_type_pi=2&pos_pi_j=1&pos_pi_m=7&pos_pi_a=2016&pos_tem1_proff=0&pos_tem1_ddn_j=0&pos_tem1_ddn_m=0&pos_tem1_ddn_a=0&pos_tem1_village=9&pos_tem1_type_pi=0&pos_tem1_date_deliv_pi_j=0&pos_tem1_date_deliv_pi_m=0&pos_tem1_date_deliv_pi_a=0&pos_tem2_proff=0&pos_tem2_ddn_j=0&pos_tem2_ddn_m=0&pos_tem2_ddn_a=0&pos_tem2_village=9&pos_tem2_type_pi=0&pos_tem2_date_deliv_pi_j=0&pos_tem2_date_deliv_pi_m=0&pos_tem2_date_deliv_pi_a=0&pos_ter_village=9"
del=function(pid){

		if(pid == ''){
			alert("Rien a supprimer, Aucune Déclaration sélectionnée !");
			return ;
		}
		
		if(confirm("Voulez vous supprimer vraiment cet élément ?")){
			$.ajax({
				   type: "POST", 
				   url: "!urbPossDecPoss!Delete", 
				   data: {
					   	pos_id : pid
				   },
				   async: false, 
				   success: function(data){
					   alert(data);
					   location.href = "urbPoss!index!urbPossDecPoss";
				   },
			  	   error:function(xhr, ajaxOptions, thrownError){
						alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
				   }
			});
		}
};
	
	
	
clearAll=function(){
	location.href = "urbPoss!index!urbPossDecPoss";
}



addDocs=function(redId){
	if(redId == ''){
		alert("Aucun act de possession en cours sélectionné !");
		return;
	}

	
	$("#addDocDialog").dialog({
		modal: true,
		width: 700,
		buttons: {
			"Enregistrer": function(){ 
				

				if($("#possDoc_type").val() == 0 ){
					alert ("Type document obligatoire  !");
					return (0);
				}
				
				if($("#possDoc_nom").val().length < 2){
					alert ("Nom document obligatoire  !");
					return (0);
				}

				if($("#possDoc_description").val().length < 2){
					alert ("Description document obligatoire  !");
					return (0);
				}
				
				
				var file_data = $("#possDoc_file").prop("files")[0];   
			    var form_data = new FormData();                   
			    form_data.append("possDoc_file", file_data) ;             
			    form_data.append("possDoc_id", redId) ;
			    form_data.append("possDoc_pos_id", $("#possDoc_pos_id").val()) ;
			    form_data.append("possDoc_type", $("#possDoc_type").val()) ; 
			    form_data.append("possDoc_nom", $("#possDoc_nom").val()) ; 
			    form_data.append("possDoc_description", $("#possDoc_description").val()) ;
			    
				$.ajax({
					url: "!urbPossDecPoss!AddFile", 
					type: "POST", 
					cache : false,
					contentType : false,
					processData : false,
					data : form_data,
					success: function(data){
					 if(data.length >0){
						 alert(data);
					 }
					   	location.href = "!urbPoss!index!urbPossDecPoss!index!"+redId;
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
		alert("Rien a imprimer, Aucun act de Possession sélectionné !");
		return;
	}
	location.href = "urbPossPdf!index!"+pid;
}



delDoc=function(iddoc,idres){

		if(idres == ''){
			alert("Rien a supprimer, Aucun Résident sélectionné !");
			return ;
		}
		
		if(confirm("Voulez vous supprimer vraiment ce document ?")){
			$.ajax({
				   type: "POST", 
				   url: "!urbPossDecPoss!DeleteDoc", 
				   data: {
					   	p_doc_id : iddoc
				   },
				   async: false, 
				   success: function(data){
					   alert(data);
					   location.href = "urbPoss!index!urbPossDecPoss!index!"+idres;
					  
				   },
			  	   error:function(xhr, ajaxOptions, thrownError){
						alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
				   }
			});
		}
	};


});
