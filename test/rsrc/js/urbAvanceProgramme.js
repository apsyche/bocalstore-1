$(function() {

	
	$(function() {

		$("#arrete_date").datepicker();
		
	});
	
	
	search = function() {
		if ($("#arrete_date").val() == ''){
			alert("Date Obligatoire !");
			return;
		}
		if (($("#tSearch").val() != '0')&&($("#arrete_date").val() != '')) {
			var date = $("#arrete_date").val(); 
			date = date.replace(/\-/g,':'); 

			
			location.href ="urb!index!urbAvanceProgramme!index!"+$("#tSearch").val()+"!"+date;
		} else {
			location.href ="urb!index!urbAvanceProgramme!index";
		}
	}
	
	
	clearAll=function(){
		location.href = "urb!index!urbAvanceProgramme!index";
	}
	
	
	
	print=function(){
		
		if ($("#arrete_date").val() == ''){
			alert("Date Obligatoire !");
			return;
		}
		
		var date = $("#arrete_date").val(); 
		date = date.replace(/\-/g,':'); 
		
		location.href ="urbProgPdf!index!avanceProg!"+ $("#tSearch").val()+ "!" +date ;
	
	}
	

	

});
