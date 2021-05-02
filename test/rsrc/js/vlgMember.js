$(function() {
	
	$(function() {
		$("#vmem_date_deb").datepicker();
	});
	
	$(function() {
		$("#vmem_date_fin").datepicker();
	});


	
	addSubv = function(vlg_id) {


		$("#vmem_vlg_id").val(vlg_id);
		$("#vmem_nom").val("");
		$("#vmem_prenom").val("");
		$("#vmem_date_deb").val("");
		$("#vmem_date_fin").val("");
		$("#vmem_description").val("");
	

		$("#memberDialog").dialog({
			modal: true,
			width: 700,
		
			buttons: {
				"Enregistrer": function(){  
		
					var d= $("#memberForm").serialize();
					$.ajax({
						type: "POST", 
						url: "!vlgMember!AddMem", 
						data: d,
						async: false, 
						success : function(data) {
							location.href = "vlg!index!vlgMember!"+vlg_id;
						},
						error : function(xhr, ajaxOptions, thrownError) {
							alert("save access error." + "\nstatusText: " + xhr.statusText + "\nthrownError: " + thrownError);
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
	
	
	delMem=function(vlg_id,vmem_id){
		if(vmem_id == ''){
			alert("Rien a supprimer, Aucune subvention sélectionnée !");
			return ;
		}
		
		if(confirm("Voulez vous supprimer vraiment cet élément ?")){
			$.ajax({
				   type: "POST", 
				   url: "!vlgMember!DelMem", 
				   data: {
					   vmem_id : vmem_id
				   },
				   async: false, 
				   success: function(data){
					   alert(data);
					   location.href = "vlg!index!vlgMember!"+vlg_id;
				   },
			  	   error:function(xhr, ajaxOptions, thrownError){
						alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
				   }
			});
		}
	};
		
});
