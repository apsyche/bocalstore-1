<h4>
	<span class="glyphicon glyphicon-arrow-right"></span> Personnel
</h4>

<div class="btn-group btn-group-justified" role="group"
	style="width: 100%;">
	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default" onclick="select('');">
			<span class="glyphicon glyphicon-plus" aria-hidden="true"
				style="color: #428bca;"></span> &nbsp; Ajouter personnel
		</button>
	</div>


</div>

	<br><br>
	<table class="table table-hover  table-condensed ">
		<tr>
			<th>Nom </th>
			<th>Nom JF</th>
			<th>Prénom</th>

		</tr>
		{foreach from=$listPersonnel item=row}
		<tr onclick="select('{$row.per_id}')">
			<td>{$row.per_nom}</td>
			<td>{$row.per_nom_jf}</td>
			<td>{$row.per_prenom}</td>

		{/foreach}

	</table>
