$(function() {


	
	search = function() {
		location.href ="urb!index!urbAvanceTravaux!index!"+$("#tSearch").val()+"!"+$("#tSearchVillage").val();
	}
	
	
	clearAll=function(){
		location.href = "urb!index!urbAvanceTravaux!index";
	}
	

	

});
