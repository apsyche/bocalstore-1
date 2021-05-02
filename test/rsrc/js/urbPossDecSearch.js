$(function() {

	select=function(pid){
		location.href = "urbPoss!index!urbPossDecPoss!index!"+pid;
	}
	
	
	
	search=function(pid){

		var data="";
		$.ajax({
			   type: "POST", 
			   url: "!urbPossDecSerch!Search", 
			   data: {
				   	pos_nom : $("#pos_nom").val(),
				   	pos_prenom : $("#pos_prenom").val(),
				   	ddn_j : $("#pos_ddn_j").val(),
				   	ddn_m : $("#pos_ddn_m").val(),
				   	ddn_a: $("#pos_ddn_a").val()
			   },
			   async: false, 
			   success: function(dataList){

				data =dataList ;
			   },
		  	   error:function(xhr, ajaxOptions, thrownError){
					alert("save access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
					return;
			   }
		
		});
		
	
		$("#tab").empty();
		var tab = $("#tab");  


		$("#tab").append(
				"<tr>" +
					"<th>Num</th>"+
					"<th>Date</th>"+
					"<th>Nom</th>"+
					"<th>Nom JF</th>"+
					"<th>Prénom</th>"+
					"<th>Date de naissance</th>"+
				"</tr>"
			);
		
		dd = eval('('+data+')');
		$.each(dd, function(key, row) {
			$("#tab").append(
					"<tr onclick=\"(select('"+ row.pos_id +"'))\">" +
						"<td>"+row.pos_num_acte +"</td>"+
						"<td>"+row.pos_date_acte +"</td>"+
						"<td>"+row.pos_nom +"</td>"+
						"<td>"+row.pos_nom_jf +"</td>"+
						"<td>"+row.pos_prenom +"</td>"+
						"<td>"+row.pos_ddn +"</td>"+
					"</tr>"
				);
		});

		
		
	};
	
	clearAll=function(){
		location.href = "urbPoss!index!urbPossDecSearch";
	}
	

	

});
