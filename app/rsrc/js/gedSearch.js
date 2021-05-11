$(function() {
	



	search=function(){
		var type = "" ;
		var name = "" ;
		var desc = "" ;
		type = $("#type").val();
		name = $("#name").val().replace(" ","_");
		desc = $("#desc").val().replace(" ","_");
		
		location.href = "ged!index!gedSearch!"+type+"!"+name+"!"+desc;
	};


});
