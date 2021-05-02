$(function() {
	
	select=function(pid){
		location.href = "urb!index!urbCommRuralAdd!"+pid;
	}
	
	
	$(function() {
		$("#comDate").datepicker();
	});
	
	addCom = function(pid) {

		$("#addComDialog").dialog({
			modal: true,
			width: 700,
			buttons: {
				"Enregistrer": function(){ 
					$.ajax({
						type : "POST",
						url : "!urbCommRural!newCom",
						data : {
							comDate : $("#comDate").val(),
						},
						async : false,
						success : function(data) {
							if(data[0] == 'e'){
								alert(data);
							}else{
								location.href = "urb!index!urbCommRuralAdd!"+data;
							}
							
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
	
	
	search = function(pid) {

		var data = "";
		$.ajax({
			type : "POST",
			url : "!urbCommRural!Search",
			data : {
				ddn_m : $("#ddn_m").val(),
				ddn_a : $("#ddn_a").val(),
			},
			async : false,
			success : function(dataList) {
				data = dataList;
			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert("save access error." + "\nstatusText: " + xhr.statusText
						+ "\nthrownError: " + thrownError);
				return;
			}
		});

		
		$("#tab").empty();
		var tab = $("#tab");

		dd = eval('(' + data + ')');
	//	if (dd.length == 0) {
	//		alert("Aucun résultat !");
	//		return;
	//	}
		

			$("#tab").append(
					"<tr>" + "<th>Date</th>"
						   + "</tr>");

			$.each(dd, function(key, row) {
				$("#tab").append(
						"<tr onclick=\"(select('" + row.cmr_id + "'))\">"
								+ "<td>" + row.cmr_date + "</td>" + "</tr>");
			});

	};
	
	clearAll=function(){
		location.href = "urb!index!urbCommRural";
	}
	

	search();

});
