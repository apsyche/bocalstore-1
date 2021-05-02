$(function() {
	
	$(function() {
		$("#vsub_date").datepicker();
	});

	
	addSubv = function(vlg_id) {


		$("#vsub_vlg_id").val(vlg_id);
		$("#vsub_date").val("");
		$("#vsub_montant").val("0.00");
		$("#vsub_description").val("");

		$("#subventionDialog").dialog({
			modal: true,
			width: 700,
		
			buttons: {
				"Enregistrer": function(){  
		
					var d= $("#subventionForm").serialize();
					$.ajax({
						type: "POST", 
						url: "!vlgSubv!AddSub", 
						data: d,
						async: false, 
						success : function(data) {
							location.href = "vlg!index!vlgSubv!"+vlg_id;
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
	
	
	delSub=function(vlg_id,vsub_id){
		if(vsub_id == ''){
			alert("Rien a supprimer, Aucune subvention sélectionnée !");
			return ;
		}
		
		if(confirm("Voulez vous supprimer vraiment cet élément ?")){
			$.ajax({
				   type: "POST", 
				   url: "!vlgSubv!DelSubv", 
				   data: {
					   vsub_id : vsub_id
				   },
				   async: false, 
				   success: function(data){
					   alert(data);
					   location.href = "vlg!index!vlgSubv!"+vlg_id;
				   },
			  	   error:function(xhr, ajaxOptions, thrownError){
						alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
				   }
			});
		}
	};
		
});
