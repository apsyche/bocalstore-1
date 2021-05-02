$(function() {

	select = function(pid) {
		location.href = "res!index!resAdd!" + pid;
	}
	
	selectEnt = function(pid) {
		location.href = "res!index!resMorAdd!" + pid;
	}


	changeSelect = function() {
		if ($("#tSearch").val() == 1) {
			// personne Physique
			$("#labLName").text("Nom");
			$("#labFName").text("Prénom");
			$("#divDate").show();
		} else {
			// Personne Morale
			$("#labLName").text("Raison Social");
			$("#labFName").text("Dénomination");
			$("#divDate").hide();
		}
	}

	search = function(pid) {

		var data = "";
		$.ajax({
			type : "POST",
			url : "!resSearch!Search",
			data : {
				res_nom : $("#res_nom").val(),
				res_prenom : $("#res_prenom").val(),
				ddn_j : $("#ddn_j").val(),
				ddn_m : $("#ddn_m").val(),
				ddn_a : $("#ddn_a").val(),
				tSearch : $("#tSearch").val()
			},
			async : false,
			success : function(dataList) {
				data = dataList;
			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert("save access error." + "\nstatusText: " + xhr.statusText
						+ "\nthrownError: " + thrownError);
				return;
			}

		});

		$("#tab").empty();
		var tab = $("#tab");

		dd = eval('(' + data + ')');
		if (dd.length == 0) {

			alert("Aucun résultat !");
			return;
		}
		if (dd[0]['res_type'] == '0') {

			$("#tab").append(
					"<tr>" + "<th>Nom</th>" + "<th>Nom JF</th>"
							+ "<th>Prénom</th>" + "<th>Date de naissance</th>"
							+ "</tr>");

			$.each(dd, function(key, row) {
				$("#tab").append(
						"<tr onclick=\"(select('" + row.res_id + "'))\">"
								+ "<td>" + row.res_nom + "</td>" + "<td>"
								+ row.res_nom_jf + "</td>" + "<td>"
								+ row.res_prenom + "</td>" + "<td>"
								+ row.res_ddn + "</td>" + "</tr>");
			});

		} else {
			$("#tab").append(
					"<tr>"  + "<th>Raison Social</th>" 
							+ "<th>Dénomination</th>"
							+ "<th>Numéro RC</th>"
							+ "<th>Adresse</th>"
				  + "</tr>");

			$.each(dd, function(key, row) {
				$("#tab").append(
						"<tr onclick=\"(selectEnt('" + row.res_id + "'))\">"
								+ "<td>" + row.res_raison_social + "</td>" 
								+ "<td>"+ row.res_denom + "</td>" 
								+ "<td>"+ row.res_num_rc + "</td>"
								+ "<td>"+ row.res_adr_ent + "</td>" 
						+ "</tr>");
			});
		}
	};

	clearAll = function() {
		location.href = "res!index!resSearch";
	}

});
