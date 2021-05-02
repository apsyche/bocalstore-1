<h4>
	<span class="glyphicon glyphicon-arrow-right"></span> Inventaire
</h4>

<div class="btn-group btn-group-justified" role="group"
	style="width: 100%;">


	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default " onclick="print('{$cmd_id}');">
			<span class="glyphicon glyphicon-print " aria-hidden="true" style="color: #428bca;"></span> &nbsp; Imprimer
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
			  <div class="col-md-3">
			  	 Code Produit <input class="form-control" type="text" id="comGuichet" name="comGuichet"  style="width: 30%" value="">
			  	 <a class="btn btn-warning btn-xs" onclick="searchPrd();"> <i class="glyphicon glyphicon-search"></i></a>
			  </div>
			  <div class="col-md-3">
			  	 Code Inventaire <input class="form-control" type="text" id="comGuichet" name="comGuichet"  style="width: 30%" value="">
			  	 <a class="btn btn-warning btn-xs" onclick="del('{$row.vlg_id}');"> <i class="glyphicon glyphicon-search"></i></a>
			  </div>
			  <div class="col-md-3">
			  	{html_options class="form-control" id='cmd_fur_id' name='cmd_fur_id' options=$lisFournisseurs  style="width: 70%"}
			  </div>
			  <div class="col-md-3">
			  	{html_options class="form-control" id='cmd_fur_id' name='cmd_fur_id' options=$lisFournisseurs  style="width: 70%"}
			  </div>
			 </div>

			
</fieldset>

<br>

<fieldset class="pwFieldset">
			<legend>
				<span class="glyphicon glyphicon-link" aria-hidden="true"></span> Produits
			</legend>
			
	<table class="table table-hover  table-condensed " id="tableInventaire" >
		

	</table>
			
</fieldset>

<br>

</div>
	

<div title="Produits" id="addProduitCommande"	style="display: none; background-color: #f7f7f9">
	<h4>Fournisseur :  {$lisFournisseurs[$row.cmd_fur_id]} </h4>

	<form action="POST" action="#" id="produitList" name="produitList" enctype="multipart/form-data">
			<input type="hidden" id="form_cmd_id" name="form_cmd_id"  value="{$row.cmd_id}">
			<input type="hidden" id="form_fur_id" name="form_fur_id"  value="{$row.cmd_fur_id}">
			<table id="tableProd" class="table table-hover table-bordered  table-condensed" >
			
			</table>
			
		<br> 
		<br>
	</form>
</div>	




<div title="Edition Produit" id="editStock"	style="display: none; background-color: #f7f7f9">
	<h4>Produit : </h4>
	<form action="POST" action="#" id="produitList" name="produitList" enctype="multipart/form-data">
			<input type="hidden" id="form_cmd_id" name="form_cmd_id"  value="{$row.cmd_id}">
			<input type="hidden" id="form_fur_id" name="form_fur_id"  value="{$row.cmd_fur_id}">
			<table style="width: 95%">

			<tr>
				<td align="right" style="width: 40%">Code Produit&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="sto_prd_id" name="sto_prd_id" readonly="readonly"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Libelé Produit&nbsp;&nbsp;&nbsp;	</td>
				<td><input class="form-control" type="text" id="sto_libele_prd" name="sto_libele_prd"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Catégorie&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="sto_libele_cat" name="sto_libele_cat"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">N° Inventaire&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="sto_num_inventaire" name="sto_num_inventaire"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Date Achat&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="sto_date_achat" name="sto_date_achat"  readonly="readonly"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Prix Achat HT&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="sto_date_achat" name="sto_prix_achat_ht"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">TVA&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="sto_tva" name="sto_tva"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Années Amortissement&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="sto_annne_amortissement" name="sto_annne_amortissement"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">sto_etat_stock&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="sto_etat_stock" name="sto_etat_stock"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">sto_date_sorti_stock&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="sto_date_sorti_stock" name="sto_date_sorti_stock" readonly="readonly" ></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">sto_affactation&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="sto_affactation" name="sto_affactation"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">sto_sorti_inventaire&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="sto_affactation" name="sto_sorti_inventaire"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">sto_date_sorti_inventaire&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="sto_date_sorti_inventaire" name="sto_date_sorti_inventaire" readonly="readonly"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">sto_commentaire&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="sto_commentaire" name="sto_commentaire"></td>
			</tr>
			
			
		<br> 
		<br>
	</form>
</div>	

		