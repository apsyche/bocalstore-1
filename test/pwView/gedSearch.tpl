<h4>
	<span class="glyphicon glyphicon-arrow-right"></span> Recherche Documents
</h4>

<div class="btn-group btn-group-justified" role="group"
	style="width: 100%;">
	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default" onclick="search();">
			<span class="glyphicon glyphicon-search" aria-hidden="true" style="color: #428bca;"></span> &nbsp; Recherche
		</button>
	</div>

	
</div>

<br>

<div style="width: 100%">

		<fieldset class="pwFieldset">
			<legend>
				<span class="glyphicon glyphicon-search aria-hidden="true"></span>
				Recherche
			</legend>
			
			<div class="row">
			  <div class="col-md-4">Type Docuement {html_options class="form-control" id='type' name='gedd_type' options=$listTypeDoc} </div>
			  <div class="col-md-4">Nom <input class="form-control" type="text" id="name" name="gedd_nom"></div>
			  <div class="col-md-4">Description <input style="width: 97%" class="form-control" type="text" id="desc" name="gedd_nom"></div>
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
		 		<td>{$r.gedd_nom}</td>
		 		<td>{$listTypeDoc[$r.gedd_type]}</td>
		 		<td>{$r.gedd_description}</td>
		 		<td><a href="gedList!ReadFile!{$r.gedd_id}" >{$r.gedd_nom_file}</a></td>
		 		<td><button type="button" class="btn btn-danger btn-xs" onclick="delDoc('{$r.gedd_id}');">
		    	<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
		    </button></td>
		 	</tr>
		 {/foreach}
		</table>
		
		</fieldset>
		
		<br>
</div>
	
	
	
	
	
	