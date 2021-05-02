<h4>
	<span class="glyphicon glyphicon-arrow-right"></span> Fournisseur
</h4>

<div class="btn-group btn-group-justified" role="group"
	style="width: 100%;">
	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default" onclick="save('{$row.fur_id}');">
			<span class="glyphicon glyphicon-ok" aria-hidden="true" style="color: #428bca;"></span> &nbsp; Enregistrer
		</button>
	</div>

	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default "
			onclick="print('{$fur_id}');">
			<span class="glyphicon glyphicon-print " aria-hidden="true"
				style="color: #428bca;"></span> &nbsp; Imprimer
		</button>
	</div>
	
	
	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default" onclick="del('{$row.fur_id}');">
			<span class="glyphicon glyphicon-trash" aria-hidden="true" style="color: #428bca;"></span> &nbsp; Supprimer
		</button>
	</div>
	
</div>


<br>



<div style="width: 100%">
	<form class="form-inline" id="four_add_form" name="four_add_form">
		<input type="hidden" name="fur_id" id="fur_id" value="{$row.fur_id}">

		<fieldset class="pwFieldset">
			<legend>
				<span class="glyphicon glyphicon-comment" aria-hidden="true"></span> Informations Fournisseur
			</legend>
			<div class="row">
				<div class="col-md-6">
					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Nom Fournisseur</label> 
						<input type="text" class="form-control" id="fur_raison_social" name="fur_raison_social" style="width: 50%" value="{$row.fur_raison_social}" >
					</div>

					<div class="">
						<label for="fur_adresse" style="width: 30%">Adresse</label>
						<input type="text" class="form-control" id="fur_adresse" name="fur_adresse" style="width: 50%" value="{$row.fur_adresse}">
					</div>

					<div class="">
						<label for="fur_ville" style="width: 30%">Ville </label> 
						<input type="text" class="form-control" id="fur_ville" name="fur_ville" style="width: 50%" value="{$row.fur_ville}">
					</div>

					<div class="">
						<label for="fur_cp" style="width: 30%">Code Postal</label> 
						<input type="text" class="form-control" id="fur_cp" name="fur_cp" style="width: 50%" value="{$row.fur_cp}">
					</div>

					
				</div>
				<div class="col-md-6">
					<div class="">
						<label for="fur_tel_1" style="width: 30%">Téléphone 1 </label>
						<input type="text" class="form-control" id="fur_tel_1" name="fur_tel_1" style="width: 50%" value="{$row.fur_tel_1}">
					</div>

					<div class="">
						<label for="fur_tel_2" style="width: 30%">Téléphone 2 </label> 
						<input type="text" class="form-control" id="fur_tel_2" name="fur_tel_2" style="width: 50%" value="{$row.fur_tel_2}">
					</div>
					
					<div class="">
						<label for="fur_mail" style="width: 30%">Mail </label> 
						<input type="text" class="form-control" id="fur_mail" name="fur_mail" style="width: 50%" value="{$row.fur_mail}">
					</div>
				
					<div class="">
						<label for="fur_site_internet" style="width: 30%">Site Internet </label> 
						<input type="text" class="form-control" id="fur_site_internet" name="fur_site_internet" style="width: 50%" value="{$row.fur_site_internet}">
					</div>

				</div>
			</div>


</fieldset>
<br>

<fieldset class="pwFieldset">
			<legend>
				<span class="glyphicon glyphicon-link" aria-hidden="true"></span> Informations Correspondant
			</legend>
			<div class="row">
				<div class="col-md-6">
					
					<div class="">
						<label for="fur_adresse" style="width: 30%">Nom Correspondant</label>
						<input type="text" class="form-control" id="fur_nom_corresp" name="fur_nom_corresp" style="width: 50%" value="{$row.fur_nom_corresp}">
					</div>

					<div class="">
						<label for="fur_prenom_corresp" style="width: 30%">Prénom Correspondant </label> 
						<input type="text" class="form-control" id="fur_prenom_corresp" name="fur_prenom_corresp" style="width: 50%" value="{$row.fur_prenom_corresp}">
					</div>
					
					
				</div>
				<div class="col-md-6">
					
					<div class="">
						<label for=" fur_mail_corresp " style="width: 30%">Mail Correspondant </label>
						<input type="text" class="form-control" id=" fur_mail_corresp " name="fur_mail_corresp" style="width: 50%" value="{$row.fur_mail_corresp}">
					</div>
					<div class="">
						<label for="fur_tel_corresp" style="width: 30%">Tél 1 Correspondant</label> 
						<input type="text" class="form-control" id="fur_tel_corresp" name="fur_tel_corresp" style="width: 50%" value="{$row.fur_tel_corresp}">
					</div>
					

				</div>
			</div>


</fieldset>

<br>

<fieldset class="pwFieldset">
			<legend>
				<span class="glyphicon glyphicon-piggy-bank" aria-hidden="true"></span> Banque
			</legend>
			<div class="row">
				<div class="col-md-6">
							
					
					<div class="">
						<label for="fur_mail" style="width: 30%">RIB</label> 
						<input type="text" class="form-control" id="fur_rib" name="fur_rib" style="width: 50%" value="{$row.fur_rib}">
					</div>
				</div>
				<div class="col-md-6">
					<div class="">
						<label for="fur_tel_2" style="width: 30%">IBAN</label> 
						<input type="text" class="form-control" id="fur_iban" name="fur_iban" style="width: 50%" value="{$row.fur_iban}">
					</div>
					

				</div>
			</div>


</fieldset>
</form>

<br>

</div>

		