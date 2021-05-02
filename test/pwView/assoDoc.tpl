<h4>
	<span class="glyphicon glyphicon-arrow-right"></span> Documents
</h4>

<div class="btn-group btn-group-justified" role="group"
	style="width: 100%;">
	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default"
			onclick="addDocs('{$row.asso_id}');">
			<span class="glyphicon glyphicon-plus" aria-hidden="true"
				style="color: #428bca;"></span> &nbsp; Ajouter Documents
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
					
					
						<div class="row">
							<div class="col-md-3">
								<b>Email : </b> 
							</div>
							<div class="col-md-6">
								<p>{$row.asso_email}</p>
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
								<b>Budget Alloué : </b> 
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
				<span class="glyphicon glyphicon-file" aria-hidden="true"></span>
				Documents
			</legend>
			
		<table class="table table-hover  table-condensed ">
			<tr>
				<th>Nom Document</th>
				<th>Type</th>
				<th>Description</th>
		
				<th>Fichier</th>
				<th style="width: 100px">Supprimer</th>
			</tr>
		 {foreach from=$listDoc item=r}
		 	<tr>
		 		<td>{$r.assd_nom}</td>
		 		<td>{$listTypeDoc[$r.assd_type]}</td>
		 		<td>{$r.assd_description}</td>
		 		<td><a href="assoDoc!ReadFile!{$r.assd_id}">{$r.assd_nom_file}</a></td>
		 		<td><button type="button" class="btn btn-danger btn-xs" onclick="delDoc('{$r.assd_id}','{$row.asso_id}');">
		    	<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
		    </button></td>
		 	</tr>
		 {/foreach}
		</table>
		
		</fieldset>
		
		<br>
</div>
	
	
	

<div title="Document" id="addDocDialog"	style="display: none; background-color: #f7f7f9">
	<h4>Ajouter / Modifier Document</h4>

	<form action="POST" action="#" id="assd_file_form" name="assd_file_form" enctype="multipart/form-data">
		<input type="hidden" name="MAX_FILE_SIZE" value="250000" /> <input
			type="hidden" id="assd_asso_id" name="assd_asso_id" value="{$row.asso_id}">
		<table style="width: 95%">
			<tr>
				<td align="right" style="width: 40%">Type &nbsp;&nbsp; &nbsp;</td>
				<td>{html_options class="form-control" id='assd_type' name='assd_type' options=$listTypeDoc}</td>
			</tr>

			<tr>
				<td align="right" style="width: 40%">Nom Document &nbsp;&nbsp; &nbsp;</td>
				<td><input class="form-control" type="text" id="assd_nom" name="assd_nom"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Description &nbsp;&nbsp; &nbsp;</td>
				<td><input class="form-control" type="text" id="assd_description" name="assd_description"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%" > Fichier &nbsp;&nbsp; &nbsp;</td>
				<td><input  type="file" id="assd_file" name="assd_file"></td>
			</tr>
		</table>
		<br>
		<br>
	</form>
</div>
	
	
	