<h4>
	<span class="glyphicon glyphicon-arrow-right"></span> Suventions
</h4>

<div class="btn-group btn-group-justified" role="group" style="width: 100%;">

	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default" onclick="addSubv('{$asso_id}');"> 
			<span class="glyphicon glyphicon-plus " aria-hidden="true" style="color: #428bca;"></span> &nbsp; Ajouter Subvention
		</button>
	</div>

</div>

<br>

<div style="width: 100%">
		<fieldset class="pwFieldset">
			<legend>
				<span class="glyphicon glyphicon-comment" aria-hidden="true"></span> Informations Association
			</legend>
			<div class="row">
				<div class="col-md-6">
						<div class="row">
							<div class="col-md-3">
								<b>Nom Association :</b> 
							</div>
							<div class="col-md-6">
								<p>{$row.asso_nom}</p>
							</div>
						</div>
						
						<div class="row">
							<div class="col-md-3">
								<b>Village :</b> 
							</div>
							<div class="col-md-6">
								<p>{$listVillages[$row.asso_vlg_id]}</p>
							</div>
						</div>
						
						<div class="row">
							<div class="col-md-3">
								<b>Adresse : </b> 
							</div>
							<div class="col-md-6">
								<p>{$row.asso_adresse}</p>
							</div>
						</div>
		
						<div class="row">
							<div class="col-md-3">
								<b>Téléphone : </b> 
							</div>
							<div class="col-md-6">
								<p>{$row.asso_tel}</p>
							</div>
						</div>
		
						<div class="row">
							<div class="col-md-3">
								<b>Fax : </b> 
							</div>
							<div class="col-md-6">
								<p>{$row.asso_fax}</p>
							</div>
						</div>

				</div>
				<div class="col-md-6">

					<div class="row">
							<div class="col-md-3">
								<b>Type : </b> 
							</div>
							<div class="col-md-6">
								<p>{$assoType[$row.asso_type]}</p>
							</div>
					</div>
						
						
					<div class="row">
							<div class="col-md-3">
								<b>Activité : </b> 
							</div>
							<div class="col-md-6">
								<p>{$row.asso_activite}</p>
							</div>
					</div>
					
					<div class="row">
							<div class="col-md-3">
								<b>Description : </b> 
							</div>
							<div class="col-md-6">
								<p>{$row.asso_description}</p>
							</div>
					</div>
					
					
					<div class="row">
							<div class="col-md-3">
								<b>Date de création : </b> 
							</div>
							<div class="col-md-6">
								<p>{$row.asso_date_creation|date_format:"%d/%m/%Y"}</p>
							</div>
					</div>
					
					<div class="row">
							<div class="col-md-3">
								<b>Budget Alloué / An : </b> 
							</div>
							<div class="col-md-6">
								<p>{$row.asso_budget}</p>
							</div>
					</div>

					
				</div>
			</div>

		</fieldset>
		<br>
		
		
	

		
		<fieldset class="pwFieldset">
		<legend>
			<span class="glyphicon glyphicon-erase" aria-hidden="true"></span> Suvbention
		</legend>
		
		<table class="table table-hover  table-condensed" style="margin-bottom: 0;">
						<tr>
							<th>Date </th>
							<th>Montant </th>
							<th>Description</th>

							<th style="width: 100px">Fct</th>
						</tr>
						{foreach from=$subList item=r}
						<tr>
							<td>{$r.asub_date|date_format:"%d/%m/%Y"}</td>
							<td>{$r.asub_montant} DA</td>
							<td>{$r.asub_description}</td>

							<td>
								<button type="button" class="btn btn-danger btn-xs" onclick="delSub('{$asso_id}','{$r.asub_id}');">
									<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
								</button>
								
							</td>
						</tr>
						{/foreach}

					</table>
		
	</fieldset>
	<br>
	
</div>


<div title="Subvention" id="subventionDialog"	style="display: none; background-color: #f7f7f9">
	<h4>Ajouter Subvention</h4>

	<form action="POST" action="#" id="subventionForm" name="subventionForm" enctype="multipart/form-data">
			<input type="hidden" id="asub_asso_id" name="asub_asso_id"  value="{$asso_id}">
		
	    
		    <table style="width: 95%">
			<tr>
				<td align="right" style="width: 40%">Date&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control"  style="width: 40%" type="text" id="asub_date" name="asub_date" readonly="readonly"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Montant&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control"  style="width: 40%" type="text" id="asub_montant" name="asub_montant" ></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Description&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control"   type="text" id="asub_description" name="asub_description" ></td>
			</tr>
		</table>	
		<br> 
		<br>
	</form>
</div>	






