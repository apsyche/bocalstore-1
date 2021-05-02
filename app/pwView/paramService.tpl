<h3>Emplacements</h3>
<div class="" style="width: 95%">


	<ul class="nav nav-pills">
			<li class="nav-item"><a class="nav-link active" onclick="editService('N');"><i class="glyphicon glyphicon-plus"></i> Ajouter emplacement</a></li>
	</ul>

	<br><br>
	<table class="table table-hover  table-condensed ">
		<tr>
			<th>Nom </th>
			<th>Description</th>
			<th><p class=""> Fonctions</p></th>
		</tr>
		{foreach from=$srvList item=row}
		<tr>
			<td>{$row.srv_nom}</td>
			<td>{$row.srv_description}</td>
			<td style="width: 100px">
	 			<a class="btn btn-default btn-sm" onclick="editService('E','{$row.srv_id}','{$row.srv_nom|pwAddslashes}','{$row.srv_description|pwAddslashes}');">
	 			<i class="glyphicon glyphicon-edit"></i></a> 
	 			<a class="btn btn-default btn-sm" onclick="del('{$row.srv_id}');"> <i class="glyphicon glyphicon-trash"></i>
		 		</a>
 			</td>
		</tr>
		{/foreach}

	</table>

</div>


<div title="Service" id="srvDialog" name="srvDialog"  style="display: none; background-color: #f7f7f9">
	<h4>Ajouter / Modifier Emplacement</h4>
	<form action="POST" action="#" id="formService" name="formVformServiceillage">
		<input type="hidden" id="srv_id" name="srv_id">
		<table style="width: 95%">

			<tr>
				<td align="right" style="width: 40%">Nom &nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="srv_nom" name="srv_nom"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Description&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="srv_description" name="srv_description"></td>
			</tr>
		</table>		
	</form>
</div>
