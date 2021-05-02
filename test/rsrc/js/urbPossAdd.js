$(function() {

	function activaTab(tab){
		$('.nav-tabs a[href="#'+tab+'"]').tab('show');
	};
	
	$(function() {
		$("#pos_date_acte").datepicker();
		
	});
	
	$(function() {
		$("#pos_date_public").datepicker();
		
	});
	
	openPC = function(resId,PossId,pcId) {
		location.href = "!urb!index!urbPermisConst!index!"+resId+"!"+PossId+"!"+pcId;
	};
	openDemol = function(resId,PossId,pcId) {
		location.href = "!urb!index!urbPermisDemol!index!"+resId+"!"+PossId+"!"+pcId;
	};
	openRegul= function(resId,PossId,pcId) {
		location.href = "!urb!index!urbPermisRegul!index!"+resId+"!"+PossId+"!"+pcId;
	};
	openRenewDialog = function(resId,PossId) {
		$("#pcInitDialog").dialog({
					modal : true,
					width : 700,
					buttons : {
						"Renouveller" : function() {
							var initId = $("#pc_init_id").val();
							//return();
							location.href = "!urb!index!urbPermisRenew!index!"+resId+"!"+PossId+"!"+initId+"!";
							//$(this).dialog("close");

						},
						"Annuler" : function() {
							$(this).dialog("close");
						}
					},
				});
	};
	
	
	openUpdateDialog = function(resId,PossId) {
		$("#pcUpdateDialog").dialog({
					modal : true,
					width : 700,
					buttons : {
						"Renouveller" : function() {
							var initId = $("#pc_modif_init_id").val();
							//return();
							location.href = "!urb!index!urbPermisUpdate!index!"+resId+"!"+PossId+"!"+initId+"!";
							//$(this).dialog("close");

						},
						"Annuler" : function() {
							$(this).dialog("close");
						}
					},
				});
	};
	
	
	openRenew = function(resId,PossId,initId,pcId) {
		location.href = "!urb!index!urbPermisRenew!index!"+resId+"!"+PossId+"!"+initId+"!"+pcId;
	}
	 
	openUpdate = function(resId,PossId,initId,pcId) {
		location.href = "!urb!index!urbPermisUpdate!index!"+resId+"!"+PossId+"!"+initId+"!"+pcId;
	}

	/**
	 * save
	 * 
	 * @param pid
	 */
	save = function(resId, posId) {
		//*** tab info ***//
		if($("#pos_num_acte").val().length < 2){
			alert ("N° Acte de possession obligatoire  !");
			activaTab("info");
			$("#pos_num_acte").focus();
			return (0);
		}
		
		if($("#pos_date_acte").val().length < 2){
			alert ("Date Enregistrement obligatoire  !");
			activaTab("info");
			$("#pos_date_acte").focus();
			return (0);
		}
		
		if($("#pos_date_public").val().length < 2){
			alert ("Date Publication obligatoire  !");
			activaTab("info");
			$("#pos_date_public").focus();
			return (0);
		}
		
		
		//*** tab tem ***//
		if(($("#pos_tem1_sexe").val() == '0')||($("#pos_tem2_sexe").val() == '0')){
			alert ("Homme/Femme obligatoire  !");
			activaTab("tem");
			$("#pos_tem1_sexe").focus();
			return (0);
		}
		if(($("#pos_tem1_nom").val().length < 2)||($("#pos_tem2_nom").val().length < 2)){
			alert ("Nom obligatoire  !");
			activaTab("tem");
			$("#pos_tem1_nom").focus();
			return (0);
		}
		if(($("#pos_tem1_prenom").val().length < 2)||($("#pos_tem2_prenom").val().length < 2)){
			alert ("Prénom obligatoire  !");
			activaTab("tem");
			$("#pos_tem1_prenom").focus();
			return (0);
		}
		//*** tab terrain ***//
		if(($("#pos_ter_natur").val().length < 2)){
			alert ("Nature et Consistance du Terrain obligatoire  !");
			activaTab("ter");
			$("#pos_ter_natur").focus();
			return (0);
		}
		if(($("#pos_ter_superficie").val() == '0')){
			alert ("Superficie du Terrain obligatoire  !");
			activaTab("ter");
			$("#pos_ter_superficie").focus();
			return (0);
		}

		
		var d = $("#pos_form").serialize();
		$.ajax({
			type : "POST",
			url : "!urbPossAdd!Save",
			data : d,
			async : false,
			success : function(data) {
				location.href = "!urb!index!urbPossAdd!index!"+resId+"!"+data;
						
			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert("save access error." + "\nstatusText: "
						+ xhr.statusText + "\nthrownError: "
						+ thrownError);
			}

		});
	};

	del = function(pid,res) {

		if (pid == '') {
			alert("Rien a supprimer, Aucune Déclaration sélectionnée !");
			return;
		}

		if (confirm("Voulez vous supprimer vraiment cet élément ?")) {
			$
					.ajax({
						type : "POST",
						url : "!urbPossAdd!Delete",
						data : {
							pos_id : pid
						},
						async : false,
						success : function(data) {
							alert(data);
							location.href = "urb!index!urbDesc!"+res;
						},
						error : function(xhr, ajaxOptions, thrownError) {
							alert("del access error." + "\nstatusText: "
									+ xhr.statusText + "\nthrownError: "
									+ thrownError);
						}
					});
		}
	};

	clearAll = function() {
		location.href = "urbPoss!index!urbPossDecPoss";
	}

	/**
	 * addDocs
	 * @param redId
	 */
	addDocs = function(resId, posId) {
		if (posId == '') {
			alert("Aucun act de possession en cours sélectionné !");
			return;
		}

		$("#addDocDialog")
				.dialog(
						{
							modal : true,
							width : 700,
							buttons : {
								"Enregistrer" : function() {

									if ($("#possDoc_type").val() == 0) {
										alert("Type document obligatoire  !");
										return (0);
									}

									if ($("#possDoc_nom").val().length < 2) {
										alert("Nom document obligatoire  !");
										return (0);
									}

									if ($("#possDoc_description").val().length < 2) {
										alert("Description document obligatoire  !");
										return (0);
									}

									var file_data = $("#possDoc_file").prop("files")[0];
									var form_data = new FormData();
									form_data.append("possDoc_file", file_data);
									form_data.append("possDoc_id", "");
									form_data.append("possDoc_pos_id", $("#possDoc_pos_id").val());
									form_data.append("possDoc_type", $("#possDoc_type").val());
									form_data.append("possDoc_nom", $("#possDoc_nom").val());
									form_data.append("possDoc_description", $("#possDoc_description").val());

									$.ajax({
												url : "!urbPossAdd!AddFile",
												type : "POST",
												cache : false,
												contentType : false,
												processData : false,
												data : form_data,
												success : function(data) {
													if (data.length > 0) {
														alert(data);
													}
													location.href = "!urb!index!urbPossAdd!index!"+resId+"!"+posId;
												},
												error : function(xhr,
														ajaxOptions,
														thrownError) {
													alert("edit infPlanche error."
															+ "\nstatusText: "
															+ xhr.statusText
															+ "\nthrownError: "
															+ thrownError);
												},
											});

									$(this).dialog("close");

								},
								"Annuler" : function() {
									$(this).dialog("close");
								}
							},
						});

	}

	print = function(pid) {
		if (pid == '') {
			alert("Rien a imprimer, Aucun act de Possession sélectionné !");
			return;
		}
		location.href = "urbPdf!index!poss!" + pid;
	}
	
	printDoc = function() {
		location.href = "urbPdf!index!doc!";
	}

	delDoc = function(iddoc, idres,posId) {

		if (idres == '') {
			alert("Rien a supprimer, Aucun Résident sélectionné !");
			return;
		}

		if (confirm("Voulez vous supprimer vraiment ce document ?")) {
			$
					.ajax({
						type : "POST",
						url : "!urbPossAdd!DeleteDoc",
						data : {
							p_doc_id : iddoc
						},
						async : false,
						success : function(data) {
							alert(data);
							location.href = "!urb!index!urbPossAdd!index!"+idres+"!"+posId;
									+ idres;

						},
						error : function(xhr, ajaxOptions, thrownError) {
							alert("del access error." + "\nstatusText: "
									+ xhr.statusText + "\nthrownError: "
									+ thrownError);
						}
					});
		}
	};

	
	openRural = function(resId,posId,rurid){
		if(posId == ''){
			alert("Aucune Possession Enregistrée !")
			return ;
		}
		location.href = "!urb!index!urbRural!index!"+resId+"!"+posId+"!"+rurid;
	}

});
