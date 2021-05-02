$(function() {

	save=function(pid){
		
		if($("#ppass").val() != $("#ppass_confirm").val()){
			alert("Mot de passe incorrect !");
			return 
		}
		
		if($("#ppass").val().length != 0) {
			
			if($("#ppass").val().length < 4) {
				alert("Mot de passe trop court ! 4 caractères minimum");
				return ;
			}
			
		}

		$.ajax({
			   type: "POST", 
			   url: "!profilAbout!Save", 
			   data: {
				   	pmail : $("#pmail").val(),
				   	ppass  : $("#ppass").val()
			   },
			   async: false, 
			   success: function(data){
				   alert(data);
				   location.href = "profil!index!profilAbout";
			   },
		  	   error:function(xhr, ajaxOptions, thrownError){
					alert("save access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
			   }
		
		});
	};

});
