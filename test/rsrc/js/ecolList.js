$(function() {
	
	select = function(pid) {
		location.href = "ecol!index!ecolAdd!" + pid;
	};
	
	
	print=function(){
		location.href = "ecolPdf!index!printEcolList";
	}
	
});
