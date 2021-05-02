$(function() {

	
	$(function() {
		$("#rur_date").datepicker();
		$("#rur_date_cahier_charge").datepicker();
		$("#rur_sui_1_tra_date").datepicker();
		$("#rur_sui_1_tra_com_date").datepicker();
		$("#rur_sui_2_tra_date").datepicker();
		$("#rur_sui_2_tra_com_date").datepicker();
		$("#rur_sui_3_tra_date").datepicker();
		$("#rur_sui_3_tra_com_date").datepicker();
		$("#rur_imp_date").datepicker();
		$("#rur_rec_1_date").datepicker();
		$("#rur_rec_2_date").datepicker();
		$("#rur_rec_3_date").datepicker();
		$("#rur_recu_date").datepicker();

	});
	

	
	save=function(resId,posId,pcId){

		if($("#rur_date").val().length < 2){
			alert ("Date Puverture du Dossier Obligatoire !");
			$("#rur_date").focus();
			return (0);
		}
		
		if($("#rur_decision_num").val().length < 2){
			alert ("Numéro Décision !");
			$("#rur_decision_num").focus();
			return (0);
		}	
		
		if($("#rur_montant").val() == '0'){
			alert ("Montant Obligatoire !");
			$("#rur_montant").focus();
			return (0);
		}

		var d= $("#rur_form").serialize();
		$.ajax({
			   type: "POST", 
			   url: "!urbRural!Save", 
			   data: d,
			   async: false, 
			   success: function(data){
				   location.href = "!urb!index!urbRural!index!"+resId+"!"+posId+"!"+data;
			   },
		  	   error:function(xhr, ajaxOptions, thrownError){
					alert("save access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
			   }
		
		});
	};
	


del=function(resId,posId,rurId){

		if(rurId == ''){
			alert("Rien a supprimer, Aucun Dossier Habitat Rural sélectionné!");
			return ;
		}
		
		if(confirm("Voulez vous supprimer vraiment cet élément ?")){
			$.ajax({
				   type: "POST", 
				   url: "!urbRural!Delete", 
				   data: {
					   	rur_id : rurId
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
	
	
	
clearAll=function(){
	location.href = "urbPoss!index!urbPossDecPoss";
}



addDocs=function(resId,posId,pcId,rurId){
	if(rurId == ''){
		alert("Aucun Dossier Habitation Rural sélectionné !");
		return;
	}

	
	$("#addDocDialog").dialog({
		modal: true,
		width: 700,
		buttons: {
			"Enregistrer": function(){ 
				

				if($("#rurdoc_type").val() == 0 ){
					alert ("Type document obligatoire  !");
					return (0);
				}
				
				if($("#rurdoc_nom").val().length < 2){
					alert ("Nom document obligatoire  !");
					return (0);
				}

				if($("#rurdoc_description").val().length < 2){
					alert ("Description document obligatoire  !");
					return (0);
				}
				
				
				var file_data = $("#rurdoc_file").prop("files")[0];   
			    var form_data = new FormData();                   
			    form_data.append("rurdoc_file", file_data) ;             
			    form_data.append("rurdoc_id", "") ;
			    form_data.append("rurdoc_rur_id", $("#rurdoc_rur_id").val()) ;
			    form_data.append("rurdoc_type", $("#rurdoc_type").val()) ; 
			    form_data.append("rurdoc_nom", $("#rurdoc_nom").val()) ; 
			    form_data.append("rurdoc_description", $("#rurdoc_description").val()) ;
			    
				$.ajax({
					url: "!urbRural!AddFile", 
					type: "POST", 
					cache : false,
					contentType : false,
					processData : false,
					data : form_data,
					success: function(data){
					 if(data.length >0){
						 alert(data);
					 }
					 location.href = "!urb!index!urbRural!index!"+resId+"!"+posId+"!"+rurId;  
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



printSuivi=function(pid){
	if(pid == ''){
		alert("Rien a imprimer, Aucun Dossier Habitat Rural Sélectionné !");
		return;
	}
	location.href = "urbPdf!index!habSuivi!" + pid;
}

printImpl=function(pid){
	if(pid == ''){
		alert("Rien a imprimer, Aucun Dossier Habitat Rural Sélectionné !");
		return;
	}
	location.href = "urbPdf!index!habImpl!" + pid;
}

printRec=function(pid,type){
	if(pid == ''){
		alert("Rien a imprimer, Aucun Dossier Habitat Rural Sélectionné !");
		return;
	}
	location.href = "urbPdf!index!habRec!" + pid+"!"+type;
}

printRecep=function(pid){
	if(pid == ''){
		alert("Rien a imprimer, Aucun Dossier Habitat Rural Sélectionné !");
		return;
	}
	location.href = "urbPdf!index!habRecep!" + pid;
}





/**
 * delDoc
 * @param resId
 * @param posId
 * @param pcId
 * @param rurId
 * @param iddoc
 */
delDoc=function(resId,posId,pcId,rurId,iddoc){

		
		if(confirm("Voulez vous supprimer vraiment ce document ?")){
			$.ajax({
				   type: "POST", 
				   url: "!urbRural!DeleteDoc", 
				   data: {
					   	p_doc_id : iddoc
				   },
				   async: false, 
				   success: function(data){
					   alert(data);
					   location.href = "!urb!index!urbRural!index!"+resId+"!"+posId+"!"+"!"+rurId;
					  
				   },
			  	   error:function(xhr, ajaxOptions, thrownError){
						alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
				   }
			});
		}
	};

/**
 * reCommisson
 * @param resId
 * @param posId
 * @param pcId
 * @param rurId
 */
reCommisson = function(resId,posId,pcId,rurId){
	if(confirm("Voulez vous Vraiment repasser le dossier en commission ?")){
		$.ajax({
			   type: "POST", 
			   url: "!urbRural!RePass", 
			   data: {
				   rurId : rurId
			   },
			   async: false, 
			   success: function(data){
				   alert(data);
				   location.href = "!urb!index!urbRural!index!"+resId+"!"+posId+"!"+rurId;  // TODO : remove pc_ID
				  
			   },
		  	   error:function(xhr, ajaxOptions, thrownError){
					alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
			   }
		});
	}
}

/**
 * openRural
 * @param resId
 * @param posId
 * @param pcId
 */
openRural = function(resId,posId,pcId){
	location.href = "!urb!index!urbRural!index!"+resId+"!"+posId+"!"+pcId;
}

/*
archivGlobal = function(resId,posId,pcId,rurId){
	if(rurId == ''){
		alert("Rien a archiver, Aucun Dossier Habitat Rural sélectionné!");
		return ;
	}
	
	if(confirm("Voulez vous supprimer Archiver cet Dossier ?")){
		$.ajax({
			   type: "POST", 
			   url: "!urbRural!ArchivGlobal", 
			   data: {
				   rurId : rurId
			   },
			   async: false, 
			   success: function(data){
				   alert(data);
				   location.href = "!urb!index!urbRural!index!"+resId+"!"+posId+"!"+pcId+"!"+rurId;
			   },
		  	   error:function(xhr, ajaxOptions, thrownError){
					alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
			   }
		});
	}
}

*/


delPersonne=function(pers_id,rur_id,resId,posId){

	if(pers_id == ''){
		alert("Rien a supprimer, Aucun Dossier Habitat Rural sélectionné!");
		return ;
	}
	
	if(confirm("Voulez vous supprimer vraiment cet élément ?")){
		$.ajax({
			   type: "POST", 
			   url: "!urbRural!DelPersonne", 
			   data: {
				   pers_id : pers_id
			   },
			   async: false, 
			   success: function(data){
				   alert(data);
				   location.href = "!urb!index!urbRural!index!"+resId+"!"+posId+"!"+rur_id;
			   },
		  	   error:function(xhr, ajaxOptions, thrownError){
					alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
			   }
		});
	}
};

addPers=function(rur_id,type,resId,posId){
	
	$("#pres_nom").val("");
	$("#pres_prenom").val("");
	$("#pres_desc").val("");
	
	$("#addPersDialog").dialog({
		modal: true,
		width: 700,
		buttons: {
			"Enregistrer": function(){ 
				

				if($("#pres_nom").val() == 0 ){
					alert ("Nom obligatoire  !");
					return (0);
				}
				
				if($("#pres_prenom").val().length < 2){
					alert ("Prénom obligatoire !");
					return (0);
				}

				 
			    var form_data = new FormData();                   
			    form_data.append("pres_rur_id", rur_id ) ;
			    form_data.append("pres_type",   type ) ;
			    form_data.append("pres_nom",    $("#pres_nom").val()) ;
			    form_data.append("pres_prenom", $("#pres_prenom" ).val()) ;
			    form_data.append("pres_desc",   $("#pres_desc").val()) ;
			    
				$.ajax({
					url: "!urbRural!AddPersonne", 
					type: "POST", 
					cache : false,
					contentType : false,
					processData : false,
					data : form_data,
					success: function(data){
						alert(data);
						location.href = "!urb!index!urbRural!index!"+resId+"!"+posId+"!"+rur_id;
						 
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
	

};



});
