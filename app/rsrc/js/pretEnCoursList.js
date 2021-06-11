$(function() {
	
		Rendu=function(prd_id){
		//alert(prd_id);
		var ajax_data = new FormData();                   
		ajax_data.append("prt_id",				prd_id);
		$.ajax({
			   type: "POST", 
			   url: "!pretList!Rendu",
				cache : false,
				contentType : false,
				processData : false, 
			   data: ajax_data,
			   success: function(data){
				   alert(data);
			location.reload()
			   },
		  	   error:function(xhr, ajaxOptions, thrownError){
					alert("edit infPlanche error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
			    	return;
			   }
		});
	}
	
	printList=function(){
		location.href = "pretPdf!index!MatListEnCours!";
	}
	
	$(function() {
		$("#pret_date_rendu").datepicker();
	});
		
	
	Rendre=function(prd_id) {
	

	$("#RendreEnCours").dialog({
		modal: true,
		width: 700,
		buttons: {
			"Enregistrer": function(){ 
				if(!$("#pret_date_rendu").val())	{ alert ("Date de retour obligatoire.");		return (0); }
				
		var ajax_data = new FormData();                   
		ajax_data.append("prt_id",				prd_id);
		ajax_data.append("pret_date_rendu",				$("#pret_date_rendu").val());
		ajax_data.append("commentaire",				$("#com_pret").val());
		$.ajax({
			   type: "POST", 
			   url: "!pretList!Rendu",
				cache : false,
				contentType : false,
				processData : false, 
			   data: ajax_data,
			   success: function(data){
				   alert(data);
					location.reload()
			   },
		  	   error:function(xhr, ajaxOptions, thrownError){
					alert("edit infPlanche error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
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
	
});