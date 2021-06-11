<h4>
	<span class="glyphicon glyphicon-arrow-right"></span> Prets en Retard 
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
		<th>Date de retour prévu</th>
		<th>Téléphone</th>
		<th>Rendre</th>
	</tr>
	{foreach from=$pretRetard item=row}
	<tr onclick="select('{$row.fur_id}')">
		<td>{$row.prt_nom}</td>
		<td>{$row.prt_prenom}</td>
		<td>{$row.prd_nom}</td>
		<td>{$row.prt_date_pret}</td>
		<td>{$row.prt_date_retour_prevu}</td>
		<td>{$row.prt_num_tel}</td>
		<td><button type="button" class="btn btn-default btn-xs  btn btn-info" {if $smarty.session.usr_right_lecture eq '1'} disabled="disabled"
					{/if}; onclick="Rendre('{$row.prt_id}')"><span class="glyphicon glyphicon-chevron-down"></span></button></td>
	</tr>
	{/foreach}

</table>

<div title="RendreEnCours" id="RendreEnCours"	style="display: none; background-color: #f7f7f9">
	<h4>Rendre un produit</h4>
	<form action="POST" action="#" id="RendreEnCours" name="RendreEnCours" enctype="multipart/form-data">
		<table style="width: 95%">
			<tr>
				<td align="right" style="width: 40%">Date de rendu du produit : &nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="pret_date_rendu" name="pret_date_rendu"  readonly="readonly"> <span class="glyphicon glyphicon-calendar"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Commentaire :&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="com_pret" name="com_pret" ></td>
			</tr>

		</table>	
	</form>
</div>	
