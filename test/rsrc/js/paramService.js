$(function() {

	editService=function(mode,vlgid='',vlgnom='',desc=''){
		if(mode == 'E'){
			$("#srv_id").val(vlgid);
			$("#srv_nom").val(vlgnom);
			$("#srv_description").val(desc);
		}
		
		if(mode == 'N'){
			$("#srv_id").val('');
			$("#srv_nom").val('');
			$("#srv_description").val('');
		}
		
		
		$("#srvDialog").dialog({
			modal: true,
			width: 700,
			buttons: {
				"Enregistrer": function(){ 
					if($("#srv_nom").val().length < 3){
						alert ("Nom trop court !")
						return (0);
					}

					$.ajax({
						   type: "POST", 
						   url: "!paramService!Save", 
						   data: {
							   mode			 : mode,
							   srv_id 		 :  $("#srv_id").val(),
							   srv_nom		 :  $("#srv_nom").val(),
							   srv_description		 :  $("#srv_description").val(),

						   },
						   async: false, 
						   success: function(data){
							   alert(data);
							   location.href = "!param!index!paramService";
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
				   url: "!paramService!Delete", 
				   data: {
					   srv_id : pid
				   },
				   async: false, 
				   success: function(data){
					   alert(data);
					   location.href = "!param!index!paramService";
				   },
			  	   error:function(xhr, ajaxOptions, thrownError){
						alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
				   }
			});
		}
	};

});
