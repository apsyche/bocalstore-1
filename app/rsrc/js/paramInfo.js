$(function() {

	save = function(){
		
		var d = $("#formInfo").serialize();
		
		$.ajax({
			url: "!paramInfo!Save", 
			type: "POST", 
			data : d,
			async : false,
			success: function(data){
			 if(data.length >0){
				 alert(data);
			 }
			   	location.href = "param!index!paramInfo";
			 },
			   error:function(xhr, ajaxOptions, thrownError){
			   alert("edit infPlanche error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
			 },
		});
	}

});
