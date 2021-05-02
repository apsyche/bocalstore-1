<h3>Informations</h3>
<div class="" style="width: 95%">

	
	<ul class="nav nav-pills">
			<li class="nav-item"><a class="nav-link active" onclick="save('');"><i class="glyphicon glyphicon-save"></i> Enregistrer </a></li>
		</ul>

	<br><br>
	
	
	<form action="POST" action="#" id="formInfo" name="formInfo" enctype="multipart/form-data">
	
	
	<table class="table table-striped   ">
		<tr>
			<td style="width: 10%">Nom APC</td>
			<td> <input class="form-control" type="text" id="inf_nom_apc" name="inf_nom_apc" value="{$rowInfo.inf_nom_apc}"></td>
		</tr>
		<tr>
			<td style="width: 10%">Adresse</td>
			<td> <input class="form-control" type="text" id="inf_adresse" name="inf_adresse" value="{$rowInfo.inf_adresse}"></td>
		</tr>
		<tr>
			<td style="width: 10%">Code Postale</td>
			<td > <input style="width: 10%" class="form-control" type="text" id="inf_cp" name="inf_cp" value="{$rowInfo.inf_cp}"></td>
		</tr>
		<tr>
			<td style="width: 10%">Ville</td>
			<td> <input class="form-control" type="text" id="inf_ville" name="inf_ville" value="{$rowInfo.inf_ville}"></td>
		</tr>
		<tr>
			<td style="width: 10%">Wilaya</td>
			<td> <input class="form-control" type="text" id="inf_willaya" name="inf_willaya" value="{$rowInfo.inf_willaya}"></td>
		</tr>
		<tr>
			<td style="width: 10%">Daira</td>
			<td> <input class="form-control" type="text" id="inf_daira" name="inf_daira" value="{$rowInfo.inf_daira}"></td>
		</tr>
		<tr>
			<td style="width: 10%">Commune</td>
			<td> <input class="form-control" type="text" id="inf_commune" name="inf_commune" value="{$rowInfo.inf_commune}"></td>
		</tr>
		
		<tr>
			<td style="width: 10%">Titre Imprimé</td>
			<td> <input class="form-control" type="text" id="inf_imp_titre" name="inf_imp_titre" value="{$rowInfo.inf_imp_titre}"></td>
		</tr>
		
		<tr>
			<td style="width: 10%">Nom Maire</td>
			<td> <input style="width: 40%" class="form-control" type="text" id="inf_nom_maire" name="inf_nom_maire" value="{$rowInfo.inf_nom_maire}"></td>
		</tr>
		
		<tr>
			<td style="width: 10%">Préom Maire</td>
			<td> <input style="width: 40%" class="form-control" type="text" id="inf_prenom_maire" name="inf_prenom_maire" value="{$rowInfo.inf_prenom_maire}"></td>
		</tr>
		

	</table>
	</form>
</div>
