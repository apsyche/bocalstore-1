$(function() {
	
	print=function(pid){
		if(pid == ''){
			alert("Rien a imprimer, Aucun Résident sélectionné !");
			return;
		}
		location.href = "ecolPdf!index!printEcolAttest!"+pid;
	}


});
