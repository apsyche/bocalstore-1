$(function() {

	editUser=function(mode,usrId,lname,fname,login,mail,usr_right_four,usr_right_cmd,usr_right_inv,usr_right_pret,usr_right_ged,usr_right_param){
		if(mode == 'E'){
			$("#usr_id").val(usrId);
			$("#usr_lname").val(lname);
			$("#usr_fname").val(fname);
			$("#usr_login").val(login);
			$("#usr_mail").val(mail);
			(usr_right_param == '1' )	? $("#usr_right_param").attr('checked', true):$("#usr_right_param").attr('checked', false) ;
			(usr_right_four == '1' )	? $("#usr_right_four").attr('checked', true):$("#usr_right_four").attr('checked', false) ;
			(usr_right_cmd == '1')		? $("#usr_right_cmd").attr('checked', true):$("#usr_right_cmd").attr('checked', false) ;
			(usr_right_inv == '1' )		? $("#usr_right_inv").attr('checked', true):$("#usr_right_inv").attr('checked', false) ;
			(usr_right_pret == '1' )	? $("#usr_right_pret").attr('checked', true):$("#usr_right_pret").attr('checked', false) ;
			(usr_right_ged == '1')		? $("#usr_right_ged").attr('checked', true):$("#usr_right_ged").attr('checked', false) ;
		}
		
		if(mode == 'N'){
			$("#USR_ID").val('');
			$("#usr_lname").val('');
			$("#usr_fname").val('');
			$("#usr_login").val('');
			$("#usr_mail").val('');
			$("#usr_psw").val('');
			$("#usr_right_param").attr('checked', false) ;
			$("#usr_right_four").attr('checked', false) ;
			$("#usr_right_cmd").attr('checked', false) ;
			$("#usr_right_inv").attr('checked', false) ;
			$("#usr_right_pret").attr('checked', false) ;
			$("#usr_right_ged").attr('checked', false) ;

		}
		
		
		$("#userDialog").dialog({
			modal: true,
			width: 700,
			buttons: {
				"Enregistrer": function(){ 
					if($("#usr_lname").val().length < 2){
						alert ("Nom trop court !")
						return (0);
					}
					if($("#usr_fname").val().length < 2){
						alert ("Prénom trop court !")
						return (0);
					}						
					if($("#usr_mail").val().length < 2){
						alert ("Mail obligatoire !")
						return (0);
					}
					if($("#usr_login").val().length < 2){
						alert ("Login trop court !")
						return (0);
					}
					
					
					if(mode == 'N'){
						if($("#usr_psw").val().length < 2){
							alert ("mot de passe trop court !")
							return (0);
						}

					}

					$.ajax({
						   type: "POST", 
						   url: "!paramUser!Save", 
						   data: {
							   mode			 : mode,
							   usr_id 		 :  $("#usr_id").val(),
							   usr_lname	 :  $("#usr_lname").val(),
							   usr_fname 	 :  $("#usr_fname").val(),
							   usr_login 	 :  $("#usr_login").val(),
							   usr_psw 	 	 :  $("#usr_psw").val(),
							   usr_mail 	 :  $("#usr_mail").val(),
							   usr_right_param : $("#usr_right_param").attr("checked"),
							   usr_right_four  : $("#usr_right_four").attr("checked"),
							   usr_right_cmd   : $("#usr_right_cmd").attr("checked"),
							   usr_right_inv   : $("#usr_right_inv").attr("checked"),
							   usr_right_pret  : $("#usr_right_pret").attr("checked"),
							   usr_right_ged   : $("#usr_right_ged").attr("checked")
						   },
						   async: false, 
						   success: function(data){
							   alert(data);
							   location.href = "!param!index!paramUser";
						   },
					  	   error:function(xhr, ajaxOptions, thrownError){
								alert("edit ass error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
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
	
	del=function(pid){
		if(confirm("Voulez vous supprimer vraiment cet élément ?")){
			$.ajax({
				   type: "POST", 
				   url: "!paramUser!Delete", 
				   data: {
					   	usr_id : pid
				   },
				   async: false, 
				   success: function(data){
					   alert(data);
					   location.href = "!param!index!paramUser";
				   },
			  	   error:function(xhr, ajaxOptions, thrownError){
						alert("del access error."+"\nstatusText: "+xhr.statusText+"\nthrownError: "+thrownError);
				   }
			});
		}
	};

});
