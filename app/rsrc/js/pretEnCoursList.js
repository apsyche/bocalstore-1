$(function() {
	
		Rendu=function(){
		var ajax_data = new FormData();                   
		ajax_data.append("prt_id",				$("#prt_id").val());
		$.ajax({
			   type: "POST", 
			   url: "!pretList!Rendu",
				cache : false,
				contentType : false,
				processData : false, 
			   data: ajax_data,
			   success: function(data){
				   alert(data);
			   },
		  	   error:function(xhr, ajaxOptions, thrownError){
					alert("edit infPlanche error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
			    	return;
			   }
		});
	}
	
});