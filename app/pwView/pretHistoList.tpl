<h4>
	<span class="glyphicon glyphicon-arrow-right"></span> Historique des Prets
</h4>

<div class="btn-group btn-group-justified" role="group" style="width: 100%;">

	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default" onclick="printList('');">
			<span class="glyphicon glyphicon-print" aria-hidden="true"
				style="color: #428bca;"></span> &nbsp; Imprimer toute la liste
		</button>
	</div>
</div>

<br>
<br>
<table class="table table-hover  table-condensed ">
	<tr>
		<th>Nom</th>
		<th>Prénom</th>
		<th>Produits</th>
		<th>Date de debut</th>
		<th>Date de retour</th>
	</tr>
	{foreach from=$pretHisto item=row}
	<tr onclick="select('{$row.fur_id}')">
		<td>{$row.prt_nom}</td>
		<td>{$row.prt_prenom}</td>
		<td>{$row.prd_nom}</td>
		<td>{$row.prt_date_pret}</td>
		<td>{$row.prt_date_retour}</td>
	</tr>
	{/foreach}

</table>
