$(function() {
	
	
	$(function() {
		$("#epr_date_deb").datepicker();
	});
	
	
	$(function() {
		$("#epr_date_fin").datepicker();
	});
	
	
	save=function(pid){
		
		if($("#ecl_adress").val() == 0){
			alert ("Adresse obligatoire  !");
			return (0);
		}
		
		if($("#ecl_nom_directeur").val().length < 2){
			alert ("Nom Directeur obligatoire  !");
			return (0);
		}
		

		var d = $("#ecol_add_form").serialize();
		$.ajax({
			type : "POST",
			url : "!ecolAdd!SaveAddForm",
			data : d,
			async : false,
			success : function(data) {
				location.href = "!ecol!index!ecolAdd!"+data;	
			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert("save access error." + "\nstatusText: "
						+ xhr.statusText + "\nthrownError: "
						+ thrownError);
			}

		});

	};
	


	addParticip = function(epr_id="",epr_per_id="",fct="",d1="",d2="") {

		if( epr_id == ""){
			
			$("#epr_id").val("");
			$("#epr_per_id").val("");
			$("#epr_fonction").val("0");
			$("#epr_date_deb").val("");
			$("#epr_date_fin").val("");
			//$('#epr_per_id').attr("disabled", false);
		}
		else{
			$("#epr_id").val(epr_id);
			$("#epr_per_id").val(epr_per_id);
			$("#epr_fonction").val(fct);
			$("#epr_date_deb").val(d1);
			$("#epr_date_fin").val(d2);
			//$('#epr_per_id').attr("disabled", true);
			

		}
		
		$("#participListDialog").dialog({
			modal: true,
			width: 700,
		
			buttons: {
				"Enregistrer": function(){  
				
					var d= $("#participList").serialize();
					$.ajax({
						type: "POST", 
						url: "!ecolAdd!AddPeersonnel", 
						data: d,
						async: false, 
						success : function(data) {
							location.href = "ecol!index!ecolAdd!"+data;

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
	};
	
	
	delParticip=function(epr_id,ecl_id){
	

		if(epr_id == ''){
			alert("Rien a supprimer, Aucune personne sélectionnée !");
			return ;
		}
		
		if(confirm("Voulez vous supprimer vraiment cet élément ?")){
			$.ajax({
				   type: "POST", 
				   url: "!ecolAdd!DelPersEcole", 
				   data: {
					   epr_id : epr_id
				   },
				   async: false, 
				   success: function(data){
					   alert(data);
					   location.href = "ecol!index!ecolAdd!"+ecl_id;
				   },
			  	   error:function(xhr, ajaxOptions, thrownError){
						alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
				   }
			});
		}
	};
	

print=function(pid){
	if(pid == ''){
		alert("Rien a imprimer, Aucun Résident sélectionné !");
		return;
	}
	location.href = "ecolPdf!index!printEcolAttest!"+pid;
}



});
