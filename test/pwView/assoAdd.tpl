<h4>
	<span class="glyphicon glyphicon-arrow-right"></span> Assiciation
</h4>

<div class="btn-group btn-group-justified" role="group" style="width: 100%;">
	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default" onclick="save('{$row.asso_id}');">
			<span class="glyphicon glyphicon-ok" aria-hidden="true" style="color: #428bca;"></span> &nbsp; Enregistrer
		</button>
	</div>
	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default" onclick="del('{$asso_id}');"> 
			<span class="glyphicon glyphicon-trash" aria-hidden="true" style="color: #428bca;"></span> &nbsp; Supprimer
		</button>
	</div>

</div>

<br>

<div style="width: 100%">
	<form class="form-inline" id="asso_form" name="asso_form">
		<input type="hidden" name="asso_id" id="asso_id" value="{$row.asso_id}">

		<fieldset class="pwFieldset">
			<legend>
				<span class="glyphicon glyphicon-comment" aria-hidden="true"></span> Informations Association
			</legend>
			<div class="row">
				<div class="col-md-6">
					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Nom Association</label> 
						<input type="text" class="form-control" id="asso_nom" name="asso_nom" style="width: 50%" value="{$row.asso_nom}" >
					</div>

					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Village</label> 

						{html_options class="form-control" name="asso_vlg_id"	id="asso_vlg_id" options=$listVillages  style="width: 50%" selected={$row.asso_vlg_id} } 
					</div>

					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Adresse</label> 
						<input type="text" class="form-control" id="asso_adresse" name="asso_adresse" style="width: 50%" value="{$row.asso_adresse}">
					</div>

					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Téléphone</label> 
						<input type="text" class="form-control" id="asso_tel" name="asso_tel" style="width: 50%" value="{$row.asso_tel}">
					</div>
					
					
					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Fax</label> 
						<input type="text" class="form-control" id="asso_fax" name="asso_fax" style="width: 50%" value="{$row.asso_fax}">
					</div>
					
					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Email</label> 
						<input type="text" class="form-control" id="asso_email" name="asso_email" style="width: 50%" value="{$row.asso_email}">
					</div>

				</div>
				<div class="col-md-6">

					

					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Type </label> 

						{html_options class="form-control" name="asso_type"	id="asso_type" options=$assoType  style="width: 50%" selected={$row.asso_type} } 
					</div>
					
					
					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Activité</label> 
						<input type="text" class="form-control" id="asso_activite" name="asso_activite" style="width: 50%" value="{$row.asso_activite}">
					</div>
					
					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Description</label> 
						<input type="text" class="form-control" id="asso_description" name="asso_description" style="width: 50%" value="{$row.asso_description}">
					</div>
					
					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Date de création</label>
						<input type="text" style="width: 20%" class="form-control" id="asso_date_creation" name="asso_date_creation" style="width: 50%" value="{$row.asso_date_creation}" readonly="readonly">
					</div>

					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Subvention Allouée / An</label> 
						<input type="text" class="form-control" id="asso_budget" name="asso_budget" style="width: 50%" value="{$row.asso_budget}">
					</div>
					
				</div>
			</div>

		</fieldset>
		<br>
		
		
		<fieldset class="pwFieldset">
			<legend>
				<span class="glyphicon glyphicon-comment" aria-hidden="true"></span> Direction
			</legend>
			<div class="row">
				<div class="col-md-6">
					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Nom Prédident</label> 
						<input type="text" class="form-control" id="asso_pre_nom" name="asso_pre_nom" style="width: 50%" value="{$row.asso_pre_nom}" >
					</div>

					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Adresse</label> 
						<input type="text" class="form-control" id="asso_pre_adresse" name="asso_pre_adresse" style="width: 50%" value="{$row.asso_pre_adresse}"  >
					</div>

					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Date de naissance</label> 
						<input type="text" style="width: 20%" class="form-control" id="asso_pre_ddn" name="asso_pre_ddn" style="width: 50%" value="{$row.asso_pre_ddn}" readonly="readonly">
					</div>


				</div>
				<div class="col-md-6">
					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Prénom Président</label>
						<input type="text" class="form-control" id="asso_pre_prenom" name="asso_pre_prenom" style="width: 50%" value="{$row.asso_pre_prenom}">
					</div>

					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Téléphone </label> 
						<input type="text" class="form-control"id="asso_pre_tel" name="asso_pre_tel" style="width: 50%" value="{$row.asso_pre_tel}">
					</div>

					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Email </label> 
						<input type="text" class="form-control" id="asso_pre_email" name="asso_pre_email" style="width: 50%" value="{$row.asso_pre_email}">
					</div>

					
				</div>
			</div>
			
			<hr>
			
			<div class="row">
				<div class="col-md-6">
					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Nom Trésorier</label> 
						<input type="text" class="form-control" id="asso_tre_nom" name="asso_tre_nom" style="width: 50%" value="{$row.asso_tre_nom}" >
					</div>

					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Adresse</label> 
						<input type="text" class="form-control" id="asso_tre_adresse" name="asso_tre_adresse" style="width: 50%" value="{$row.asso_tre_adresse}"  >
					</div>

					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Date de naissance</label> 
						<input type="text"  style="width: 20%" class="form-control" id="asso_tre_ddn" name="asso_tre_ddn" style="width: 50%" value="{$row.asso_tre_ddn}" readonly="readonly">
					</div>


				</div>
				<div class="col-md-6">
					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Prénom Trésorier</label>
						<input type="text" class="form-control" id="asso_tre_prenom" name="asso_tre_prenom" style="width: 50%" value="{$row.asso_tre_prenom}">
					</div>

					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Téléphone </label> 
						<input type="text" class="form-control" id="asso_tre_tel" name="asso_tre_tel" style="width: 50%" value="{$row.asso_tre_tel}">
					</div>

					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Email </label> 
						<input type="text" class="form-control" id="asso_tre_email" name="asso_tre_email" style="width: 50%" value="{$row.asso_tre_email}">
					</div>

					
				</div>
			</div>
			<hr>
			<div class="row">
				<div class="col-md-6">
					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Nom Secrétaire Général</label> 
						<input type="text" class="form-control" id="asso_sg_nom" name="asso_sg_nom" style="width: 50%" value="{$row.asso_sg_nom}" >
					</div>

					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Adresse</label> 
						<input type="text" class="form-control" id="asso_sg_adresse" name="asso_sg_adresse" style="width: 50%" value="{$row.asso_sg_adresse}"  >
					</div>

					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Date de naissance</label> 
						<input type="text" style="width: 20%" class="form-control" id="asso_sg_ddn" name="asso_sg_ddn" style="width: 50%" value="{$row.asso_sg_ddn}" readonly="readonly">
					</div>


				</div>
				<div class="col-md-6">
					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Nom Secrétaire Général</label>
						<input type="text" class="form-control" id="asso_sg_prenom" name="asso_sg_prenom" style="width: 50%" value="{$row.asso_sg_prenom}">
					</div>

					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Téléphone </label> 
						<input type="text" class="form-control" id="asso_sg_tel" name="asso_sg_tel" style="width: 50%" value="{$row.asso_sg_tel}">
					</div>

					<div class="">
						<label for="pos_tem1_nom" style="width: 30%">Email </label> 
						<input type="text" class="form-control" id="asso_sg_email" name="asso_sg_email" style="width: 50%" value="{$row.asso_sg_email}">
					</div>

					
				</div>
			</div>
			

		</fieldset>
	</form>
	<br>

</div>





