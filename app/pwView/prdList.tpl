<h4>
	<span class="glyphicon glyphicon-arrow-right"></span> Produits
</h4>

<div class="btn-group btn-group-justified" role="group"
	style="width: 100%;">
	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default"
			onclick="saveCat('');">
			<span class="glyphicon glyphicon-plus" aria-hidden="true"
				style="color: #428bca;"></span> &nbsp; Ajouter une catégorie
		</button>
	</div>

	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default" onclick="saveProd('');">
			<span class="glyphicon glyphicon-plus" aria-hidden="true"
				style="color: #428bca;"></span> &nbsp; Ajouter un produit à la
			catégorie séléctionnée
		</button>
	</div>


</div>

<br>

<div style="width: 100%">
	
	<fieldset class="pwFieldset">
		<legend>
			<span class="glyphicon glyphicon-file" aria-hidden="true"></span>
			Produits
		</legend>

		<div class="row">
			<div class="col-md-6">
				<input type="hidden" id="four_id" value="{$row.fur_id}"> <input
					type="hidden" id="select_cat_id" value="">
				<h4>Catégories</h4>
				<table class="table table-hover table-bordered table-condensed"
					id="tableCat">

				</table>
			</div>
			<div class="col-md-6">
				<h4>Produits</h4>
				<table class="table table-hover table-bordered table-condensed"
					id="tableProd">

				</table>
			</div>
		</div>
	</fieldset>
	<br>
</div>



<div title="Catégorie" id="addCatDialog"
	style="display: none; background-color: #f7f7f9">
	<h4>Ajouter / Modifier Catégorie</h4>

	<form action="POST" action="#" id="edoc_file_form"
		name="edoc_file_form" enctype="multipart/form-data">
		<table style="width: 95%">

			<tr>
				<td align="right" style="width: 40%">Nom
					&nbsp;&nbsp; &nbsp;</td>
				<td><input class="form-control" type="text" id="cat_nom"
					name="cat_nom"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Description &nbsp;&nbsp;
					&nbsp;</td>
				<td><input class="form-control" type="text"
					id="cat_description" name="cat_description"></td>
			</tr>
		</table>
		<br> <br>
	</form>
</div>


<div title="Catégorie" id="addProdDialog"
	style="display: none; background-color: #f7f7f9">
	<h4>Ajouter / Modifier Prduit</h4>

	<form action="POST" action="#" id="edoc_file_form"
		name="edoc_file_form" enctype="multipart/form-data">
		<input type="hidden" name="prd_id" id="prd_id" value="0">
		<table style="width: 95%">

			<tr>
				<td align="right" style="width: 40%">Nom &nbsp;&nbsp;
					&nbsp;</td>
				<td><input class="form-control" type="text" id="prd_nom"
					name="prd_nom"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Description &nbsp;&nbsp;
					&nbsp;</td>
				<td><input class="form-control" type="text"
					id="prd_description" name="prd_description"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Prix indicatif &nbsp;&nbsp;
					&nbsp;</td>
				<td><input class="form-control" type="text" id="prd_prix_ht"
					name="prd_prix_ht" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"></td>
			</tr>
		</table>
		<br> <br>
	</form>
</div>

