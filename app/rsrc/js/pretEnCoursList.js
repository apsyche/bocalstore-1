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
	
});