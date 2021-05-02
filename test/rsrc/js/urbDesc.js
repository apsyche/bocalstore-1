$(function() {

	select=function(resId='',possId=''){
		location.href = "urb!index!urbPossAdd!index!"+resId+"!"+possId;
	}
	
	
	gotoRes=function(resId){
		location.href = "res!index!resAdd!"+resId;
	}
	
	
	del = function(pid,res) {

		if (confirm("Voulez vous supprimer vraiment cet élément ?")) {
			$
					.ajax({
						type : "POST",
						url : "!urbPossAdd!Delete",
						data : {
							pos_id : pid
						},
						async : false,
						success : function(data) {
							alert(data);
							location.href = "urb!index!urbDesc!"+res;
							alert("");
						},
						error : function(xhr, ajaxOptions, thrownError) {
							alert("del access error." + "\nstatusText: "
									+ xhr.statusText + "\nthrownError: "
									+ thrownError);
						}
					});
		}
	};

	

});
