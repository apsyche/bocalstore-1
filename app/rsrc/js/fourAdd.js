function isEmail(email) {
  var EmailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return EmailRegex.test(email);
}

$(function() {
	save=function(pid){
		
		if($("#fur_raison_social").val() == 0){
			alert ("Nom fournisseur obligatoire  !");
			return (0);
		}
		
		if(isEmail($("#fur_mail").val())==false){
          alert("Mail du fournisseur non valide.");
          return (0);
        }

		if(isEmail($("#fur_mail_corresp").val())==false){
          alert("Mail du correspondant non valide.");
          return (0);
        }


	
		var d = $("#four_add_form").serialize();
		$.ajax({
			type : "POST",
			url : "!fourAdd!Save",
			data : d,
			async : false,
			success : function(data) {
				alert("Enregistrement effectuée");
				location.href = "four!index!fourList";	
			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert("save access error." + "\nstatusText: "
						+ xhr.statusText + "\nthrownError: "
						+ thrownError);
			}

		});

	};
	

	

	del=function(pid){

			if(pid == ''){
				alert("Rien a supprimer, Aucun Résident sélectionné !");
				return ;
			}
			
			if(confirm("Voulez vous supprimer vraiment cet élément ?")){
				$.ajax({
					   type: "POST", 
					   url: "!fourAdd!Delete", 
					   data: {
						   	fur_id : pid
					   },
					   async: false, 
					   success: function(data){
						   alert(data);
						   location.href = "four!index!fourList";
					   },
				  	   error:function(xhr, ajaxOptions, thrownError){
							alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
					   }
				});
			}
	};
		

print=function(pid){
	if(pid == ''){
		alert("Rien a imprimer, Aucun Résident sélectionné !");
		return;
	}
	location.href = "fourPdf!index!fichFour!"+pid;
}



});
