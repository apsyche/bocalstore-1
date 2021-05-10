<h3>Informations</h3>
<div class="" style="width: 95%">

	
	<ul class="nav nav-pills">
			<li class="nav-item"><a class="nav-link active" onclick="save('');"><i class="glyphicon glyphicon-save"></i> Enregistrer </a></li>
		</ul>

	<br><br>
	
	
	<form action="POST" action="#" id="formInfo" name="formInfo" enctype="multipart/form-data">
	
	
	<table class="table table-striped   ">
		<tr>
			<td style="width: 10%">Nom du departement</td>
			<td> <input class="form-control" type="text" id="inf_nom_apc" name="inf_nom_apc" value="{$rowInfo.inf_nom_apc}"></td>
		</tr>
		<tr>
			<td style="width: 10%">Adresse</td>
			<td> <input class="form-control" type="text" id="inf_adresse" name="inf_adresse"  value="{$rowInfo.inf_adresse}"></td>
		</tr>
		<tr>
			<td style="width: 10%">Code postal</td>
			<td > <input style="width: 10%" class="form-control" type="text" id="inf_cp" name="inf_cp" value="{$rowInfo.inf_cp}"></td>
		</tr>
		<tr>
			<td style="width: 10%">Ville</td>
			<td> <input class="form-control" type="text" id="inf_ville" name="inf_ville" value="{$rowInfo.inf_ville}"></td>
		</tr>
		<tr>
			<td style="width: 10%">Titre Imprimé</td>
			<td> <input class="form-control" type="text" id="inf_imp_titre" name="inf_imp_titre" value="{$rowInfo.inf_imp_titre}"></td>
		</tr>

		

	</table>
	</form>
</div>
