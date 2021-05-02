$(function() {


	
	search = function() {
		if ($("#tSearch").val() != '0') {
			location.href ="urb!index!urbProgramme!index!"+$("#tSearch").val();
		} else {
			location.href ="urb!index!urbProgramme!index";
		}
	}
	
	
	clearAll=function(){
		location.href = "urb!index!urbProgramme!index";
	}
	

	print=function(pid){
		quota = $("#tSearch").val() ;
		if(quota == '0'){
			alert("Rien a imprimer !");
			return;
		}

		location.href = "urbProgPdf!index!prog!" + quota;
	}

	

});
