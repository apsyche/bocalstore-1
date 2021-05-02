$(function() {
	
	
	
	print=function(pid){
		location.href = "urbPdf!index!commissionProceVerbal!" + pid;
	}

	
	/*
	addParticip = function(pid) {
		$("#participListDialog").dialog({
			modal: true,
			width: 700,
		
			buttons: {
				"Enregistrer": function(){ 
					var d= $("#participList").serialize();
					$.ajax({
						type: "POST", 
						url: "!urbCommRuralAdd!AddPeersonnel", 
						data: d,
						async: false, 
						success : function(data) {
							location.href = "urb!index!urbCommRuralAdd!"+data;

						},
						error : function(xhr, ajaxOptions, thrownError) {
							alert("save access error." + "\nstatusText: " + xhr.statusText
									+ "\nthrownError: " + thrownError);
							return;
						}
					});
					
					$(this).dialog("close");
				},
				"Annuler": function(){
						$(this).dialog("close");
					}
				},
		});
	}
	
	*/
	
	addDossier = function(pid) {
		$("#dossiersListDialog").dialog({
			modal: true,
			width: 700,
		
			buttons: {
				"Enregistrer": function(){ 
					var d= $("#dossiersList").serialize();
					$.ajax({
						type: "POST", 
						url: "!urbCommRuralAdd!AddDossier", 
						data: d,
						async: false, 
						success : function(data) {
							location.href = "urb!index!urbCommRuralAdd!"+data;

						},
						error : function(xhr, ajaxOptions, thrownError) {
							alert("save access error." + "\nstatusText: " + xhr.statusText
									+ "\nthrownError: " + thrownError);
							return;
						}
					});
					
					$(this).dialog("close");
				},
				"Annuler": function(){
						$(this).dialog("close");
					}
				},
		});
	}
	
	
	delDossier = function(rur_id,cmr_id) {
		if (confirm("Voulez vous vraiment retirer ce dossier de la liste ?")) {
			$.ajax({
						type : "POST",
						url : "!urbCommRuralAdd!DeleteDossier",
						data : {
							rur_id : rur_id,
							cmr_id : cmr_id
						},
						async : false,
						success : function(data) {
							alert(data);
							location.href = "urb!index!urbCommRuralAdd!"+cmr_id;
						},
						error : function(xhr, ajaxOptions, thrownError) {
							alert("del access error." + "\nstatusText: "
									+ xhr.statusText + "\nthrownError: "
									+ thrownError);
						}
					});
		}
	};
	
	
	delPers = function(per_id,cmr_id) {
		if (confirm("Voulez vous vraiment retirer cette personne de la liste ?")) {
			$.ajax({
						type : "POST",
						url : "!urbCommRuralAdd!DeletePersonnel",
						data : {
							per_id : per_id,
							cmr_id : cmr_id
						},
						async : false,
						success : function(data) {
							alert(data);
							location.href = "urb!index!urbCommRuralAdd!"+cmr_id;
						},
						error : function(xhr, ajaxOptions, thrownError) {
							alert("del access error." + "\nstatusText: "
									+ xhr.statusText + "\nthrownError: "
									+ thrownError);
						}
					});
		}
	};
	
	
	
	edit = function(rur_id,cmr_id,result,desc) {
		$("#rur_result").val(result);
		$("#rur_desc").val(desc);
		
		$("#editDialog").dialog({
			modal: true,
			width: 700,
			
			

			buttons: {
				"Enregistrer": function(){ 
					var d= $("#dossiersList").serialize();
					$.ajax({
						type: "POST", 
						url: "!urbCommRuralAdd!UpdateDossier", 
						data : {
							rur_id : rur_id,
							cmr_id : cmr_id,
							result : $("#rur_result").val(),
							desc   : $("#rur_desc").val()
						},
						async: false, 
						success : function(data) {
							alert(data);
							location.href = "urb!index!urbCommRuralAdd!"+cmr_id;
						},
						error : function(xhr, ajaxOptions, thrownError) {
							alert("save access error." + "\nstatusText: " + xhr.statusText
									+ "\nthrownError: " + thrownError);
							return;
						}
					});
					
					$(this).dialog("close");
				},
				"Annuler": function(){
						$(this).dialog("close");
					}
				},
		});
	}
	
	
	/**
	 * delPersonne
	 */
	delPersonne=function(crp_id,cmr_id){

		if(crp_id == ''){
			alert("Rien a supprimer, Aucun Dossier sélectionné!");
			return ;
		}
		
		if(confirm("Voulez vous supprimer vraiment cet élément ?")){
			$.ajax({
				   type: "POST", 
				   url: "!urbCommRuralAdd!DelPersonne",
				   data: {
					   crp_id : crp_id
				   },
				   async: false, 
				   success: function(data){
					   alert(data);
					   location.href = "urb!index!urbCommRuralAdd!"+cmr_id;
				   },
			  	   error:function(xhr, ajaxOptions, thrownError){
						alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
				   }
			});
		}
	};
	
	
	/**
	 * addPers
	 * @param rur_id
	 * @param resId
	 * @param posId
	 */
	addPers=function(cmr_id){
		
		$("#crp_nom").val("");
		$("#crp_prenom").val("");
		$("#crp_desc").val("");
		
		$("#addPersDialog").dialog({
			modal: true,
			width: 700,
			buttons: {
				"Enregistrer": function(){ 
					

					if($("#crp_nom").val() == 0 ){
						alert ("Nom obligatoire  !");
						return (0);
					}
					
					if($("#crp_prenom").val().length < 2){
						alert ("Prénom obligatoire !");
						return (0);
					}

					 
				    var form_data = new FormData();                   
				    form_data.append("crp_cmr_id", cmr_id ) ;
				    form_data.append("crp_nom",    $("#crp_nom").val()) ;
				    form_data.append("crp_prenom", $("#crp_prenom" ).val()) ;
				    form_data.append("crp_desc",   $("#crp_desc").val()) ;
				    form_data.append("crp_present",   $("#crp_present").val()) ;

					
				    
					$.ajax({
						url: "!urbCommRuralAdd!AddPersonne", 
						type: "POST", 
						cache : false,
						contentType : false,
						processData : false,
						data : form_data,
						success: function(data){
							alert(data);
							location.href = "urb!index!urbCommRuralAdd!"+cmr_id;
							 
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
