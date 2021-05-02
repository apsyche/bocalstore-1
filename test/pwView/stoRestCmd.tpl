<h4>
	<span class="glyphicon glyphicon-arrow-right"></span> Commandes / Produits en attente de livraison 
</h4>

<div class="btn-group btn-group-justified" role="group"
	style="width: 100%;">


	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default " onclick="printList('');">
			<span class="glyphicon glyphicon-print " aria-hidden="true" style="color: #428bca;"></span> &nbsp; Imprimer
		</button>
	</div>
	

	
</div>


<br>



<div style="width: 100%">


	<table class="table table-hover  table-condensed ">
		<tr>
			<th>Fournisseurs</th>
			<th>Produits</th>
			<th>Reste</th>
		</tr>
		{$i=1}
		{foreach from=$prdList item=row}
		<tr onclick="select('{$row.asso_id}')">
			<td>{$row.fur_raison_social}</td>
			<td>{$row.prd_nom}</td>
			<td>{$row.rest}</td>
		</tr>
		{/foreach}

	</table>


</div>
		