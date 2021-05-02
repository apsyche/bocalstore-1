<h4>
	<span class="glyphicon glyphicon-arrow-right"></span> Documents
</h4>

<div class="btn-group btn-group-justified" role="group"
	style="width: 100%;">
	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default"
			onclick="addDocs('{$row.fur_id}');">
			<span class="glyphicon glyphicon-plus" aria-hidden="true"
				style="color: #428bca;"></span> &nbsp; Ajouter Documents
		</button>
	</div>

	
</div>

<br>

<div style="width: 100%">
		<input type="hidden" name="fur_id" id="fur_id" value="{$row.fur_id}">

		<fieldset class="pwFieldset couleurfs">
			<legend>
				<span class="glyphicon glyphicon-comment" aria-hidden="true"></span> Informations Fournisseur
			</legend>
			<div class="row">
				<div class="col-md-4">
					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Raison Social</label>{$row.fur_raison_social}
					</div>

					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Ville</label>{$row.fur_ville}
					</div>
	
				
				</div>
				<div class="col-md-4">
					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Mail</label>{$row.fur_mail}
					</div>

					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Site Internet </label>{$row.fur_site_internet}
					</div>
				</div>
				
				<div class="col-md-4">
									<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Adresse</label>{$row.fur_adresse}
					</div>

					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Correspindant </label>{$row.fur_nom_corresp} {$row.fur_prenom_corresp}
					</div>
				</div>
				</div>
		</fieldset>
		<br>
		
		<fieldset class="pwFieldset">
			<legend>
				<span class="glyphicon glyphicon-file" aria-hidden="true"></span>
				Documents
			</legend>
			
		<table class="table table-hover  table-condensed ">
			<tr>
				<th>Nom Document</th>
				<th>Type</th>
				<th>Description</th>
		
				<th>Fichier</th>
				<th style="width: 100px">Supprimer</th>
			</tr>
		 {foreach from=$listDoc item=r}
		 	<tr>
		 		<td>{$r.fdoc_nom}</td>
		 		<td>{$listTypeDoc[$r.fdoc_type]}</td>
		 		<td>{$r.fdoc_description}</td>
		 		<td><a href="fourDoc!ReadFile!{$r.fdoc_id}" >{$r.fdoc_nom_file}</a></td>
		 		<td><button type="button" class="btn btn-danger btn-xs" onclick="delDoc('{$r.fdoc_id}','{$row.fur_id}');">
		    	<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
		    </button></td>
		 	</tr>
		 {/foreach}
		</table>
		
		</fieldset>
		
		<br>
</div>
	
	
	

<div title="Document" id="addDocDialog"	style="display: none; background-color: #f7f7f9">
	<h4>Ajouter / Modifier Document</h4>

	<form action="POST" action="#" id="fdoc_file_form" name="fdoc_file_form" enctype="multipart/form-data">
		<input type="hidden" name="MAX_FILE_SIZE" value="250000" /> <input
			type="hidden" id="fdoc_fur_id" name="fdoc_fur_id" value="{$row.fur_id}">
		<table style="width: 95%">
			<tr>
				<td align="right" style="width: 40%">Type &nbsp;&nbsp; &nbsp;</td>
				<td>{html_options class="form-control" id='fdoc_type' name='fdoc_type' options=$listTypeDoc}</td>
			</tr>

			<tr>
				<td align="right" style="width: 40%">Nom Document &nbsp;&nbsp; &nbsp;</td>
				<td><input class="form-control" type="text" id="fdoc_nom" name="fdoc_nom"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Description &nbsp;&nbsp; &nbsp;</td>
				<td><input class="form-control" type="text" id="fdoc_description" name="fdoc_description"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%" > Fichier &nbsp;&nbsp; &nbsp;</td>
				<td><input  type="file" id="fdoc_file" name="fdoc_file"></td>
			</tr>
		</table>
		<br>
		<br>
	</form>
</div>
	
	
	