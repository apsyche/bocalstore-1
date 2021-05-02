$(function() {
	



	search=function(){
		var type = "" ;
		var name = "" ;
		var desc = "" ;
		type = $("#type").val();
		name = $("#name").val();
		desc = $("#desc").val();
		
		location.href = "ged!index!gedSearch!"+type+"!"+name+"!"+desc;
	};


});
