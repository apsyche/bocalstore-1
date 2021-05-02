<h4>
	<span class="glyphicon glyphicon-arrow-right"></span> Prets en cours 
</h4>

<div class="btn-group btn-group-justified" role="group" style="width: 100%;">

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
		<th>Produits</th>
		<th>Produits</th>
		<th>Produits</th>
		<th>Produits</th>
		<th>Produits</th>
	</tr>
	{foreach from=$pretEnCours item=row}
	<tr onclick="select('{$row.fur_id}')">
		<td>{$row.prd_nom}</td>
		<td>{$row.prd_nom}</td>
		<td>{$row.prd_nom}</td>
		<td>{$row.prd_nom}</td>
		<td>{$row.prd_nom}</td>
	</tr>
	{/foreach}

</table>
