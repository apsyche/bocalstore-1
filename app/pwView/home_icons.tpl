
<h2 style="color: #337ab7">Bocal Store</h2>
<h3 style="color: #337ab7" align="right">{$rowInfo.inf_nom_apc}</h3>
<HR>

<div class="row">
	<div class="col-md-4 ">


		<table class="table table-hover table-bordered"
			style="background-color: white;">
			<tr>
				<td onclick="openPage('four!index!fourList')"><img
					alt="Fourniseurs"
					src="rsrc/icons/png_icons/128/contact-table-icon393.png"
					{if $smarty.session.usr_right_four eq '0'}class="grayscale"
					{/if};
					style="width: 80px; height: 75px;"> <b>Fourniseurs</b>
				</td>
			</tr>

		</table>

		<table class="table table-hover table-bordered"
			style="background-color: white;">
			<tr>
				<td onclick="openPage('prd!index!prdList!index')"><img
					alt="Matériel" src="rsrc/icons/png_icons/128/dot-dash-icon481.png"
					{if $smarty.session.usr_right_cmd eq '0'}class="grayscale"
					{/if};
					style="width: 80px; height: 75px;"> <b>Produits</b>
				</td>
			</tr>
		</table>


	</div>
	<div class="col-md-4 ">



		<table class="table table-hover table-bordered"
			style="background-color: white;">
			<tr>
				<td onclick="openPage('sto!index!stoStock')"><img
					alt="Inventaire"
					src="rsrc/icons/png_icons/128/statistics-icon458.png"
					{if $smarty.session.usr_right_inv eq '0'}class="grayscale"
					{/if};
					style="width: 80px; height: 75px;"> <b>Inventaire</b>
				</td>
			</tr>
		</table>

		<table class="table table-hover table-bordered"
			style="background-color: white;">
			<tr>
				<td onclick="openPage('pret!index!pretList!index')"><img
					alt="Pret" src="rsrc/icons/png_icons/128/notepad-table-icon395.png"
					{if $smarty.session.usr_right_pret eq '0'}class="grayscale"
					{/if};
					style="width: 80px; height: 75px;"> <b>Pret matériel pour étudiant  </b></td>
			</tr>
		</table>

	</div>
	<div class="col-md-4 ">




		<table class="table table-hover table-bordered"
			style="background-color: white;">
			<tr>
				<td onclick="openPage('ged!index!gedList!index')"><img
					alt="Ged" src="rsrc/icons/png_icons/128/many-files-icon379.png"
					{if $smarty.session.usr_right_ged eq '0'}class="grayscale"
					{/if};
					style="width: 80px; height: 75px;"> <b>Gestion Electronique des Documents</b></td>
			</tr>

		</table>




		<table class="table table-hover table-bordered"
			style="background-color: white;">
			<tr onclick="openPage('param!index!paramInfo')">
				<td><img alt="Résident"
					src="rsrc/icons/png_icons/128/setting-icon985.png"
					{if $smarty.session.usr_right_param eq '0'}class="grayscale"
					{/if};
					style="width: 80px; height: 75px;"> <b>Paramètre</b>
				</td>
			</tr>
		</table>

	</div>
</div>