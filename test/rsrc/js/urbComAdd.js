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
						url: "!urbComAdd!AddPeersonnel", 
						data: d,
						async: false, 
						success : function(data) {
							location.href = "urb!index!urbComAdd!"+data;

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
						url: "!urbComAdd!AddDossier", 
						data: d,
						async: false, 
						success : function(data) {
							location.href = "urb!index!urbComAdd!"+data;

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
	
	/*
	delDossier = function(id,com_id) {
		if (confirm("Voulez vous vraiment retirer ce dossier de la liste ?")) {
			$.ajax({
						type : "POST",
						url : "!urbComAdd!DeleteDossier",
						data : {
							pc_id : id,
							com_id : com_id
						},
						async : false,
						success : function(data) {
							alert(data);
							location.href = "urb!index!urbComAdd!"+com_id;
						},
						error : function(xhr, ajaxOptions, thrownError) {
							alert("del access error." + "\nstatusText: "
									+ xhr.statusText + "\nthrownError: "
									+ thrownError);
						}
					});
		}
	};
	*/
	
	delPers = function(per_id,com_id) {
		if (confirm("Voulez vous vraiment retirer cette personne de la liste ?")) {
			$.ajax({
						type : "POST",
						url : "!urbComAdd!DeletePersonnel",
						data : {
							per_id : per_id,
							com_id : com_id
						},
						async : false,
						success : function(data) {
							alert(data);
							location.href = "urb!index!urbComAdd!"+com_id;
						},
						error : function(xhr, ajaxOptions, thrownError) {
							alert("del access error." + "\nstatusText: "
									+ xhr.statusText + "\nthrownError: "
									+ thrownError);
						}
					});
		}
	};
	
	
	
	edit = function(pc_id,com_id,result,desc) {
		$("#pc_result").val(result);
		$("#pc_desc").val(desc);
		
		$("#editDialog").dialog({
			modal: true,
			width: 700,
			
			

			buttons: {
				"Enregistrer": function(){ 
					var d= $("#dossiersList").serialize();
					$.ajax({
						type: "POST", 
						url: "!urbComAdd!UpdateDossier", 
						data : {
							pc_id : pc_id,
							com_id : com_id,
							result : $("#pc_result").val(),
							desc : $("#pc_desc").val()
						},
						async: false, 
						success : function(data) {
							alert(data);
							location.href = "urb!index!urbComAdd!"+com_id;
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
	delPersonne=function(cpc_id,com_id){

		if(cpc_id == ''){
			alert("Rien a supprimer, Aucun Dossier sélectionné!");
			return ;
		}
		
		if(confirm("Voulez vous supprimer vraiment cet élément ?")){
			$.ajax({
				   type: "POST", 
				   url: "!urbComAdd!DelPersonne",
				   data: {
					   cpc_id : cpc_id
				   },
				   async: false, 
				   success: function(data){
					   alert(data);
					   location.href = "urb!index!urbComAdd!"+com_id;
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
	addPers=function(com_id){
		
		$("#cpc_nom").val("");
		$("#cpc_prenom").val("");
		$("#cpc_desc").val("");
		
		$("#addPersDialog").dialog({
			modal: true,
			width: 700,
			buttons: {
				"Enregistrer": function(){ 
					

					if($("#cpc_nom").val() == 0 ){
						alert ("Nom obligatoire  !");
						return (0);
					}
					
					if($("#cpc_prenom").val().length < 2){
						alert ("Prénom obligatoire !");
						return (0);
					}

					 
				    var form_data = new FormData();                   
				    form_data.append("cpc_com_id", com_id ) ;
				    form_data.append("cpc_nom",     $("#cpc_nom").val()) ;
				    form_data.append("cpc_prenom",  $("#cpc_prenom" ).val()) ;
				    form_data.append("cpc_desc",   	$("#cpc_desc").val()) ;
				    form_data.append("cpc_present", $("#cpc_present").val()) ;

					
				    
					$.ajax({	
						url: "!urbComAdd!AddPersonne", 
						type: "POST", 
						cache : false,
						contentType : false,
						processData : false,
						data : form_data,
						success: function(data){
							alert(data);
							location.href = "urb!index!urbComAdd!"+com_id;
							 
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
