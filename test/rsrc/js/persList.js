$(function() {


	del = function(pid) {

		if (pid == '') {
			alert("Rien a supprimer, Aucune personne sélectionnée !");
			return;
		}

		if (confirm("Voulez vous supprimer vraiment cet élément ?")) {
			$
					.ajax({
						type : "POST",
						url : "!persAdd!Delete",
						data : {
							per_id : pid
						},
						async : false,
						success : function(data) {
						
							location.href = "pers!index!persList";
							return;
						},
						error : function(xhr, ajaxOptions, thrownError) {
							alert("del access error." + "\nstatusText: "
									+ xhr.statusText + "\nthrownError: "
									+ thrownError);
						}
					});
		}
	};

	

	select = function(pid) {
		location.href = "pers!index!persAdd!" + pid;
	};
	
});
