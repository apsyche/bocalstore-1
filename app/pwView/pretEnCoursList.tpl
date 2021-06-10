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
		<th>Nom</th>
		<th>Prénom</th>
		<th>Produits</th>
		<th>Date de debut</th>
		<th>Date de retour prévu</th>
		<th>Téléphone</th>
		<th></th>
	</tr>
	{foreach from=$pretEnCours item=row}
	<tr onclick="select('{$row.prt_id}')">
		<td>{$row.prt_nom}</td>
		<td>{$row.prt_prenom}</td>
		<td>{$row.prd_nom}</td>
		<td>{$row.prt_date_pret}</td>
		<td>{$row.prt_date_retour_prevu}</td>
		<td>{$row.prt_num_tel}</td>
		<td><button type="button" {if $smarty.session.usr_right_lecture eq '1'} disabled="disabled"
					{/if}; onclick="Rendu('{$row.prt_id}');">Rendu</button></td>
	</tr>
	{/foreach}

</table>
