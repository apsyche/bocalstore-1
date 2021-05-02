<h4>
	<span class="glyphicon glyphicon-arrow-right"></span> Inventaire
</h4>

<div class="btn-group btn-group-justified" role="group"
	style="width: 100%;">

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
		<button type="button" class="btn btn-default " onclick="receveCommande();">
			<span class="glyphicon glyphicon-copy " aria-hidden="true" style="color: #428bca;"></span> &nbsp; Reception Commande
		</button>
	</div>
	
	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default " onclick="edit('N');">
			<span class="glyphicon glyphicon-download-alt " aria-hidden="true" style="color: #428bca;"></span> &nbsp; Ajouter Produit à l'inventaire
		</button>
	</div>
	
	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default " onclick="printList('');">
			<span class="glyphicon glyphicon-print " aria-hidden="true" style="color: #428bca;"></span> &nbsp; Imprimer
		</button>
	</div>
	
	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default " onclick="printCSV('');">
			<span class="glyphicon glyphicon-list-alt " aria-hidden="true" style="color: #428bca;"></span> &nbsp; Fichier CSV
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
			  	<span class="glyphicon glyphicon-barcode" > </span>  Code Inventaire <br> <input class="form-control" type="text" id="num_inv" name="num_inv"  value="">
			  	<span class="glyphicon glyphicon-tag" > </span>  Réf Produit <br> <input class="form-control" type="text" id="prd_ref" name="prd_ref"  value="">
			  </div>
			  
			  
			  <div class="col-md-2">
			  	<span class="glyphicon glyphicon-link" > </span> Service {html_options class="form-control" id='num_srv' name='num_srv' options=$listService}
			  	<span class="glyphicon glyphicon-calendar" > </span>  Date Achat Début <br> <input class="form-control" type="text" id="sto_date_achat_deb" name="sto_date_achat_deb"  value="" readonly="readonly">
			  </div>
			  <div class="col-md-2">
			    <span class="glyphicon glyphicon-blackboard" > </span> Ecoles {html_options class="form-control" id='num_ecole' name='num_ecole' options=$listEcloes}
			  	<span class="glyphicon glyphicon-calendar" > </span>  Date Achat Fin <br> <input class="form-control" type="text" id="sto_date_achat_fin" name="sto_date_achat_fin"  value="" readonly="readonly">
			  </div>
			  <div class="col-md-2">
			  	 <span class="glyphicon glyphicon-bookmark" > </span> Libelé Produit<br><input class="form-control" type="text" id="nom_prod" name="nom_prod" value="">
			  	 <span class="glyphicon glyphicon-indent-left" > </span> Fournisseurs {html_options class="form-control" id='fur_id' name='fur_id' options=$lisFournisseurs}
			  </div>
			  <div class="col-md-2">
			  	 <span class="glyphicon glyphicon-th-list" > </span> Grouper Par <br>{html_options class="form-control" id='groupBy_id' name='groupBy_id' options=$groupByList}
			  	 <span class="glyphicon glyphicon-sort-by-attributes-alt" > </span> Limite {html_options class="form-control" id='limit' name='limit' options=$limit}
			  </div>
			  <div class="col-md-2">
			    <span class="glyphicon glyphicon-book" > </span> Hors Inventaire <br>{html_options class="form-control" id='hors_inv' name='hors_inv' options=$sortieInventaire}
			  </div>
			 </div>

			
			
</fieldset>

<br>

<fieldset class="pwFieldset">
			<legend>
				<span class="glyphicon glyphicon-link" aria-hidden="true"></span> Produits
			</legend>
			
	<table class="table table-hover  table-condensed " id="tableInventaire">
		

	</table>
			
</fieldset>

<br>

</div>
	

<div title="Commande" id="receveCommande"	style="display: none; background-color: #f7f7f9">
	<h4>Réception Commande</h4>

	<form action="POST" action="#" id="CommandeList" name="produitList" enctype="multipart/form-data">
		Commande {html_options class="form-control" id='select_cmd_id' name='select_cmd_id' options=$lisCommandes  style="width: 100%"}
		<br> 
		<br>
	</form>
</div>	



<div title="Reception Commande" id="receveCommandeList"	style="display: none; background-color: #f7f7f9">
	<h4>Réception Commande</h4>

	<form action="POST" action="#" id="CommandeListRecev" name="CommandeListRecev" enctype="multipart/form-data">
		<table id="tableProd" class="table table-hover table-bordered  table-condensed" >
			
		</table>
		<br> 
		<br>
	</form>
</div>	



<div title="Edition Produit" id="editInventaire"	style="display: none; background-color: #f7f7f9">
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
				<td align="right" style="width: 40%">Fournisseurs&nbsp;&nbsp;&nbsp;	</td>
				<td>{html_options class="form-control" id='sto_fur_id' name='sto_fur_id' options=$lisFournisseurs}</td>
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
				<td align="right" style="width: 40%">N° Inventaire (Code Barre)&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="sto_num_inventaire" name="sto_num_inventaire"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Date Achat&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="sto_date_achat" name="sto_date_achat"  readonly="readonly"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Prix Achat HT&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="sto_prix_achat_ht" name="sto_prix_achat_ht">DA</td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">TVA&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 20%" id="sto_tva" name="sto_tva"> %</td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Années Amortissement&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="sto_annne_amortissement" name="sto_annne_amortissement"></td>
			</tr>
			
			
			
			<tr>
				<td align="right" style="width: 40%">Affactation&nbsp;&nbsp;&nbsp;</td>
				<td>{html_options class="form-control" id='sto_type_srv_ecl' name='sto_type_srv_ecl' options=$affectList onChange='changeListAffectation()'}</td>
			</tr>
			<tr id="tr_ecl">
				<td align="right" style="width: 40%">Ecoles&nbsp;&nbsp;&nbsp;</td>
				<td>{html_options class="form-control" id='sto_ecl_id' name='sto_ecl_id' options=$listEcloes}</td>
			</tr>
			<tr id="tr_srv">
				<td align="right" style="width: 40%">Service&nbsp;&nbsp;&nbsp;</td>
				<td>{html_options class="form-control" id='sto_srv_id' name='sto_srv_id' options=$listService}</td>
			</tr>
			
			
			
			<tr>
				<td align="right" style="width: 40%">Sortie Inventaire&nbsp;&nbsp;&nbsp;</td>
				<td>{html_options class="form-control" id='sto_sorti_inventaire' name='sto_sorti_inventaire' options=$yesNoList style="width: 40%" }</td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Date sorti inventaire&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="sto_date_sorti_inventaire" name="sto_date_sorti_inventaire" readonly="readonly"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Commentaire&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="sto_commentaire" name="sto_commentaire"></td>
			</tr>
			
			
		<br> 
		<br>
	</form>
</div>	

		