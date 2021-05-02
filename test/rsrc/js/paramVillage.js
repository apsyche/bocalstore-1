$(function() {

	editVillage=function(mode,vlgid,vlgnom){
		if(mode == 'E'){
			$("#vlg_id").val(vlgid);
			$("#vlg_nom").val(vlgnom);
		}
		
		if(mode == 'N'){
			$("#vlg_id").val('');
			$("#vlg_nom").val('');

		}
		
		
		$("#vlgDialog").dialog({
			modal: true,
			width: 700,
			buttons: {
				"Enregistrer": function(){ 
					if($("#vlg_nom").val().length < 3){
						alert ("Nom trop court !")
						return (0);
					}

					$.ajax({
						   type: "POST", 
						   url: "!paramVillage!Save", 
						   data: {
							   mode			 : mode,
							   vlg_id 		 :  $("#vlg_id").val(),
							   vlg_nom		 :  $("#vlg_nom").val(),

						   },
						   async: false, 
						   success: function(data){
							   alert(data);
							   location.href = "!param!index!paramVillage";
						   },
					  	   error:function(xhr, ajaxOptions, thrownError){
								alert("edit ass error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
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
	
	del=function(pid){
		if(confirm("Voulez vous supprimer vraiment cet élément ?")){
			$.ajax({
				   type: "POST", 
				   url: "!paramVillage!Delete", 
				   data: {
					   vlg_id : pid
				   },
				   async: false, 
				   success: function(data){
					   alert(data);
					   location.href = "!param!index!paramVillage";
				   },
			  	   error:function(xhr, ajaxOptions, thrownError){
						alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
				   }
			});
		}
	};

});
