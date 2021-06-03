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
		<button type="button" class="btn btn-default " {if $smarty.session.usr_right_lecture eq '1'} disabled="disabled"
					{/if}; onclick="addMultiples();">
			<span class="glyphicon glyphicon-tags " aria-hidden="true" style="color: #428bca;"></span> &nbsp; Ajout multiple
		</button>
	</div>
	
	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default " {if $smarty.session.usr_right_lecture eq '1'} disabled="disabled"
					{/if}; onclick="edit('N');">
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
			  	<span class="glyphicon glyphicon-barcode" > </span>  Code barre <br> <input class="form-control" type="text" id="num_inv" name="num_inv"  value="">
			  	<span class="glyphicon glyphicon-inbox" > </span> Emplacement {html_options class="form-control" id='srv_id' name='srv_id' options=$listService}
			  </div>
			  <div class="col-md-2">
			  	<span class="glyphicon glyphicon-calendar" > </span>  Date Achat Début <br> <input class="form-control" type="text" id="sto_date_achat_deb" name="sto_date_achat_deb"  value="" readonly="readonly">
			  	<span class="glyphicon glyphicon-calendar" > </span>  Date Achat Fin <br> <input class="form-control" type="text" id="sto_date_achat_fin" name="sto_date_achat_fin"  value="" readonly="readonly">
			  </div>
			  <div class="col-md-2">
			    <span class="glyphicon glyphicon-indent-left" > </span> Catégorie {html_options class="form-control" id='cat_id' name='cat_id' options=$listCatNull}
			  	<span class="glyphicon glyphicon glyphicon-tag" > </span> Produit {html_options class="form-control" id='prd_id' name='prd_id' options=$listPrdNull}
			  	
			  
			  	
			  </div>
			  <div class="col-md-2">
			  	 <span class="glyphicon glyphicon-bookmark" > </span> Libelé Produit<br><input class="form-control" type="text" id="nom_prod" name="nom_prod" value="">
			  	 <span class="glyphicon glyphicon-download-alt" > </span> Fournisseurs {html_options class="form-control" id='fur_id' name='fur_id' options=$lisFournisseurs}
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
	<script>document.getElementById("locklecture").disabled = true;</script>{		
</fieldset>

<br>

</div>
	




<div title="Edition Produit" id="editInventaire"	style="display: none; background-color: #f7f7f9">
	<h4>Produit : </h4>
	<form action="POST" action="#" id="produitList" name="produitList" enctype="multipart/form-data">
		<table style="width: 95%">
			<tr>
				<td align="right" style="width: 40%">Code stock&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="sto_id" name="sto_id" readonly="readonly"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Fournisseurs&nbsp;&nbsp;&nbsp;	</td>
				<td>{html_options class="form-control" id='sto_fur_id' name='sto_fur_id' options=$lisFournisseurs}</td>
			</tr>
			
			<tr>
				<td align="right" style="width: 40%">Catégorie&nbsp;&nbsp;&nbsp;	</td>
				<td>{html_options class="form-control" id='sto_cat_id' name='sto_cat_id' options=$listCat}</td>
			</tr>
			
			<tr>
				<td align="right" style="width: 40%">Nom Produit&nbsp;&nbsp;&nbsp;	</td>
				<td>{html_options class="form-control" id='sto_prd_id' name='sto_prd_id' options=$listPrd}</td>
			</tr>
			
			<tr>
				<td align="right" style="width: 40%">Libelé Catégorie&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="sto_libele_cat" name="sto_libele_cat" readonly="readonly"></td>
			</tr>
			
			<tr>
				<td align="right" style="width: 40%">Libelé produit&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="sto_libele_prd" name="sto_libele_cat" readonly="readonly"></td>
			</tr>
			
			<tr>
				<td align="right" style="width: 40%">Code Barre&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="sto_num_inventaire" name="sto_num_inventaire"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Date Achat&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="sto_date_achat" name="sto_date_achat"  readonly="readonly"> <span class="glyphicon glyphicon-calendar"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Prix Achat Indcatif &nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="sto_prix_achat_ht" name="sto_prix_achat_ht" readonly="readonly"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Années Amortissement&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="sto_annne_amortissement" name="sto_annne_amortissement"></td>
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
				<td align="right" style="width: 40%">Possibilité de pret&nbsp;&nbsp;&nbsp;</td>
				<td>{html_options class="form-control" id='sto_pret' name='sto_pret' options=$yesNoList style="width: 40%" }</td>
			</tr>
			
			<tr>
				<td align="right" style="width: 40%">Date sorti inventaire&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="sto_date_sorti_inventaire" name="sto_date_sorti_inventaire" readonly="readonly"> <span class="glyphicon glyphicon-calendar"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Commentaire&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="sto_commentaire" name="sto_commentaire"></td>
			</tr>
			</table>
			
		<br> 
		<br>
	</form>
</div>	

<!-- Ajout multiples  -->



<div title="Ajout Multiple" id="addMultipleInventaire"	style="display: none; background-color: #f7f7f9">
	<h4>Ajout Multiples Produits : </h4>
	<form action="POST" action="#" id="addMultiplesProduitList" name="addMultiplesProduitList" enctype="multipart/form-data">
		<table style="width: 95%">
		
			<tr>
				<td align="right" style="width: 40%">Nombre de produits&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="nbr_prd" name="nbr_prd" ></td>
			</tr>
			
			<tr>
			<td></td>
			<td>-</td>
			</tr>
		
			<tr>
				<td align="right" style="width: 40%">Fournisseurs&nbsp;&nbsp;&nbsp;	</td>
				<td>{html_options class="form-control" id='sto_fur_id2' name='sto_fur_id2' options=$lisFournisseurs}</td>
			</tr>
			
			<tr>
				<td align="right" style="width: 40%">Catégorie&nbsp;&nbsp;&nbsp;	</td>
				<td>{html_options class="form-control" id='sto_cat_id2' name='sto_cat_id2' options=$listCat}</td>
			</tr>
			
			<tr>
				<td align="right" style="width: 40%">Nom Produit&nbsp;&nbsp;&nbsp;	</td>
				<td>{html_options class="form-control" id='sto_prd_id2' name='sto_prd_id2' options=$listPrd}</td>
			</tr>
			
			<tr>
				<td align="right" style="width: 40%">Date Achat&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="sto_date_achat2" name="sto_date_achat2"  readonly="readonly"> <span class="glyphicon glyphicon-calendar"></td>
			</tr>
			
			
			<tr>
				<td align="right" style="width: 40%">Années Amortissement&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="sto_annne_amortissement2" name="sto_annne_amortissement2"></td>
			</tr>
			
			<tr id="tr_srv">
				<td align="right" style="width: 40%">Service&nbsp;&nbsp;&nbsp;</td>
				<td>{html_options class="form-control" id='sto_srv_id2' name='sto_srv_id2' options=$listService}</td>
			</tr>
			
		
			<tr>
				<td align="right" style="width: 40%">Sortie Inventaire&nbsp;&nbsp;&nbsp;</td>
				<td>{html_options class="form-control" id='sto_sorti_inventaire2' name='sto_sorti_inventaire2' options=$yesNoList style="width: 40%" }</td>
			</tr>
			
			<tr>
				<td align="right" style="width: 40%">Possibilité de pret&nbsp;&nbsp;&nbsp;</td>
				<td>{html_options class="form-control" id='sto_pret2' name='sto_pret2' options=$yesNoList style="width: 40%" }</td>
			</tr>
			
			<tr>
				<td align="right" style="width: 40%">Date sorti inventaire&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" style="width: 40%" id="sto_date_sorti_inventaire2" name="sto_date_sorti_inventaire2" readonly="readonly"> <span class="glyphicon glyphicon-calendar"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Commentaire&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="sto_commentaire2" name="sto_commentaire2"></td>
			</tr>
		</table>	
		<br> 
		<br>
	</form>
</div>	



		