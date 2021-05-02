<h4>
	<span class="glyphicon glyphicon-arrow-right"></span> Liste des Associations
</h4>

<div class="btn-group btn-group-justified" role="group"
	style="width: 100%;">
	
	
	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default" onclick="select('');">
			<span class="glyphicon glyphicon-plus" aria-hidden="true"
				style="color: #428bca;"></span> &nbsp; Ajouter association
		</button>
	</div>
	
	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default" onclick="print('');">
			<span class="glyphicon glyphicon-print" aria-hidden="true"
				style="color: #428bca;"></span> &nbsp; Imprimer la liste
		</button>
	</div>
	

</div>

	<br><br>
	<table class="table table-hover  table-condensed ">
		<tr>
			<th>Num</th>
			<th>Association </th>
			<th>Activité </th>
		</tr>
		{$i=1}
		{foreach from=$assoList item=row}
		<tr onclick="select('{$row.asso_id}')">
			<td>{$i++}</td>
			<td>{$row.asso_nom}</td>
			<td>{$row.asso_activite}</td>
		</tr>
		{/foreach}

	</table>
