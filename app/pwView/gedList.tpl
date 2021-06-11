<h4>
	<span class="glyphicon glyphicon-arrow-right"></span> Documents
</h4>

<div class="btn-group btn-group-justified" role="group"
	style="width: 100%;">
	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default" {if $smarty.session.usr_right_lecture eq '1'} disabled="disabled"
					{/if}; onclick="addDocs();">
			<span class="glyphicon glyphicon-plus" aria-hidden="true"
				style="color: #428bca;"></span> &nbsp; Ajouter document.
		</button>
	</div>


</div>

<br>

<div style="width: 100%">


	<fieldset class="pwFieldset">
		<legend>
			<span class="glyphicon glyphicon-file" aria-hidden="true"></span>
			Documents
		</legend>

		<table class="table table-hover  table-condensed ">
			<tr>
				<th>Nom</th>
				<th>Type</th>
				<th>Description</th>

				<th>Fichier</th>
				<th style="width: 100px">Supprimer</th>
			</tr>
			{foreach from=$listDoc item=r}
			<tr>
				<td>{str_replace("_"," ",$r.gedd_nom)}</td>
				<td>{$listTypeDoc[$r.gedd_type]}</td>
				<td>{str_replace("_"," ",$r.gedd_description)}</td>
				<td><a href="gedList!ReadFile!{$r.gedd_id}">{$r.gedd_nom_file}</a></td>
				<td><button type="button" class="btn btn-danger btn-xs" {if $smarty.session.usr_right_lecture eq '1'} disabled="disabled"
					{/if};
						onclick="delDoc('{$r.gedd_id}');">
						<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
					</button></td>
			</tr>
			{/foreach}
		</table>

	</fieldset>

	<br>
</div>




<div title="Document" id="addDocDialog"
	style="display: none; background-color: #f7f7f9">
	<h4>Ajouter / Modifier Document</h4>

	<form action="POST" action="#" id="gedd_file_form"
		name="gedd_file_form" enctype="multipart/form-data">
		<input type="hidden" name="MAX_FILE_SIZE" value="250000" />
		<table style="width: 95%">
			<tr>
				<td align="right" style="width: 40%">Type &nbsp;&nbsp; &nbsp;</td>
				<td>{html_options class="form-control" id='gedd_type'
					name='gedd_type' options=$listTypeDoc}</td>
			</tr>

			<tr>
				<td align="right" style="width: 40%">Nom Document &nbsp;&nbsp;
					&nbsp;</td>
				<td><input class="form-control" type="text" id="gedd_nom"
					name="gedd_nom"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Description &nbsp;&nbsp;
					&nbsp;</td>
				<td><input class="form-control" type="text"
					id="gedd_description" name="gedd_description"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Fichier &nbsp;&nbsp;
					&nbsp;</td>
				<td><input type="file" id="gedd_file" name="gedd_file"></td>
			</tr>
		</table>
		<br> <br>
	</form>
</div>


