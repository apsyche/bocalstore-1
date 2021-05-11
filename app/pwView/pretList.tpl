<h4>
	<span class="glyphicon glyphicon-arrow-right"></span> Produits avec possibilité de pret
</h4>

<div class="btn-group btn-group-justified" role="group" style="width: 100%;">

	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default " onclick="refresh();">
			<span class="glyphicon glyphicon-search " aria-hidden="true" style="color: #428bca;"></span> &nbsp; Recherche
		</button>
	</div>
	
	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default " onclick="emptySearch();">
			<span class="glyphicon glyphicon-unchecked " aria-hidden="true" style="color: #428bca;"></span> &nbsp; Vider la Recherche
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


<div style="width: 100%">
	
<fieldset class="pwFieldset couleurfs">
		
			<legend>
				<span class="glyphicon glyphicon-search" aria-hidden="true"></span> Recherche
			</legend>
			
			<div class="row">
			  <div class="col-md-2">
			  	<span class="glyphicon glyphicon-barcode" > </span> Code barre <br> <input class="form-control" type="text" id="num_inv" name="num_inv"  value="">
			  	<span class="glyphicon glyphicon-inbox" > </span> Emplacement {html_options class="form-control" id='srv_id' name='srv_id' options=$listService}
			  </div>

			  <div class="col-md-2">
			    <span class="glyphicon glyphicon-indent-left" > </span> Catégorie {html_options class="form-control" id='cat_id' name='cat_id' options=$listCatNull}
			  	<span class="glyphicon glyphicon glyphicon-tag" > </span> Produit {html_options class="form-control" id='prd_id' name='prd_id' options=$listPrdNull}
			  	
			
			  </div>
			  <div class="col-md-4">
			  	 <span class="glyphicon glyphicon-bookmark" > </span> Libellé produit<br><input class="form-control" type="text" id="nom_prod" name="nom_prod" value="">
			  	 <span class="glyphicon glyphicon-download-alt" > </span> Fournisseurs {html_options class="form-control" id='fur_id' name='fur_id' options=$lisFournisseurs}
			  </div>

			</div>

</fieldset>

</br>
<fieldset class="pwFieldset">
			<legend>
				<span class="glyphicon glyphicon-link" aria-hidden="true"></span> Matériel
			</legend>
			
	<table class="table table-hover  table-condensed " id="tableMateriel">
		

	</table>
			
</fieldset>

<br>

</div>





<div title="Prêt matériel" id="addPretMat"	style="display: none; background-color: #f7f7f9">
	<h4>Informations : </h4>
	<form action="POST" action="#" id="pretMat" name="pretMat" enctype="multipart/form-data">
		<table style="width: 95%">

			<tr>
				<td align="right" style="width: 40%">Nom&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="prt_nom" name="prt_nom"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Prénom&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="prt_prenom" name="prt_prenom"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">E-mail&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="prt_prenom" name="prt_prenom"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Numéro de téléphone &nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="prt_num_tel" name="prt_num_tel"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Niveau d'étude&nbsp;&nbsp;&nbsp;	</td>
				<td>{html_options class="form-control" id='prt_diplome' name='prt_diplome' options=$diplome}</td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Date de prêt &nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="prt_date_pret" name="prt_date_pret" readonly="readonly"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Date retour prévu&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="prt_date_retour_prevu" name="prt_date_retour_prevu" readonly="readonly"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Commentaire &nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="prt_commentaire" name="prt_commentaire"></td>
			</tr>
			
			</table>
		<br> 
		<br>
	</form>
</div>	


