$(function() {
	
	$(function() {
		$("#vlg_ddn_president_com").datepicker();
	});


	
	
	save=function(pid){
		
		if($("#vlg_nom_president_com").val() == 0){
			alert ("Nom Président Obligatoire !");
			return (0);
		}
		
		if($("#vlg_pre_president_com").val() == 0){
			alert ("Prénom Président Obligatoire !");
			return (0);
		}

	
		var d = $("#vlg_form").serialize();
		$.ajax({
			type : "POST",
			url : "!vlgAdd!Save",
			data : d,
			async : false,
			success : function(data) {
				location.href = "!vlg!index!vlgAdd!"+data;	
			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert("save access error." + "\nstatusText: "
						+ xhr.statusText + "\nthrownError: "
						+ thrownError);
			}

		});

	};
	
		
});
