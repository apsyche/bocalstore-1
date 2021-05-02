$(function() {
	
	select = function(pid) {
		location.href = "vlg!index!vlgAdd!" + pid;
	};
	
	
	print=function(){
		location.href = "vlgPdf!index!printVlgList";
	}
	
});
