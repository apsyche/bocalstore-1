$(function() {
	
	select = function(pid) {
		location.href = "cmd!index!cmdAdd!" + pid;
	};
	
	
	createCmd=function(){
		
		$("#addCmdDevisDialog").dialog({
			modal: true,
			width: 700,
			buttons: {
				"Enregistrer": function(){ 

					$.ajax({
						   type: "POST", 
						   url: "!cmdList!CreateCmd", 
						   data: {
							   dvi_id 		 :  $("#dvi_id").val(),
						   },
						   async: false, 
						   success: function(data){
							   location.href = "!cmd!index!cmdAdd!"+data;
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
	
});
