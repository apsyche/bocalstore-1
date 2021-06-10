<h4>
	<span class="glyphicon glyphicon-arrow-right"></span> Liste
	Fournisseurs
</h4>

<div class="btn-group btn-group-justified" role="group"
	style="width: 100%;">
	<div class="btn-group" 	role="group">
		<button type="button" class="btn btn-default" 
			{if $smarty.session.usr_right_lecture eq '1'} disabled="disabled"
					{/if}; onclick="select('') ">
			<span class="glyphicon glyphicon-plus" aria-hidden="true"
				style="color: #428bca;"></span> &nbsp; Ajouter Fournisseur
		</button>
	</div>
	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default" onclick="print('');">
			<span class="glyphicon glyphicon-print" aria-hidden="true"
				style="color: #428bca;"></span> &nbsp; Imprimer la liste
		</button>
	</div>


</div>

<br>
<br>
<table class="table table-hover  table-condensed ">
	<tr>
		<th>Fourniseur</th>
		<th>Nom contact</th>
		<th>Prénom contact</th>
		<th>Téléphone</th>
		<th>Email</th>
	</tr>
	{foreach from=$fourList item=row}
	<tr onclick="select('{$row.fur_id}')">
		<td>{$row.fur_raison_social}</td>
		<td>{$row.fur_nom_corresp}</td>
		<td>{$row.fur_prenom_corresp}</td>
		<td>{$row.fur_tel_1}</td>
		<td>{$row.fur_mail}</td>
	</tr>
	{/foreach}

</table>
