	<h3>Utilisateurs</h3>
<div class="" style="width: 95%">


	<ul class="nav nav-pills">
			<li class="nav-item"><a class="nav-link active" onclick="editUser('N');"><i class="glyphicon glyphicon-plus"></i> Ajouter Personne</a></li>
		</ul>

	<br><br>
	<table class="table table-hover table-bordered ">
		<tr style="height: 100px">
			<th>Nom</th>
			<th>Prénom</th>
			<th>Login</th>
			<th>Mail</th>
			
			<th><p class="verticalText"> Fournisseurs </p></th>
			<th><p class="verticalText"> Produits </p></th>
			<th><p class="verticalText"> Inventaire </p></th>
			<th><p class="verticalText"> Prêt </p></th>
			<th><p class="verticalText"> Ged </p></th>
			<th><p class="verticalText"> Paramétrage </p></th>
			<th><p class=""> Fonctions</p></th>
		</tr>
		{foreach from=$user item=row}
		<tr>
			<td>{$row.usr_lname}</td>
			<td>{$row.usr_fname}</td>
			<td>{$row.usr_login}</td>
			<td>{$row.usr_mail}</td>
			<td>{if $row.usr_right_four} <span class="glyphicon glyphicon-ok-sign" ></span> {/if}</td>
			<td>{if $row.usr_right_cmd} <span class="glyphicon glyphicon-ok-sign" ></span> {/if}</td>
			<td>{if $row.usr_right_inv} <span class="glyphicon glyphicon-ok-sign" ></span> {/if}</td>
			<td>{if $row.usr_right_pret } <span class="glyphicon glyphicon-ok-sign" ></span> {/if}</td>
			<td>{if $row.usr_right_ged } <span class="glyphicon glyphicon-ok-sign" ></span> {/if}</td>
			<td>{if $row.usr_right_param} <span class="glyphicon glyphicon-ok-sign" ></span> {/if}</td>


			<td style="width: 100px">
 			<a class="btn btn-default btn-sm" onclick="editUser('E','{$row.usr_id}','{$row.usr_lname|pwAddslashes}','{$row.usr_fname|pwAddslashes}','{$row.usr_login}',
 																'{$row.usr_mail|pwAddslashes}','{$row.usr_right_four}','{$row.usr_right_cmd}','{$row.usr_right_inv}','{$row.usr_right_pret}'
 																,'{$row.usr_right_ged}','{$row.usr_right_param}');">
 			<i class="glyphicon glyphicon-edit"></i></a> 
 		
 			<a class="btn btn-default btn-sm" onclick="del('{$row.usr_id}');"> <i class="glyphicon glyphicon-trash"></i>
	 		</a>
 		</td>
		</tr>
		{/foreach}

	</table>

</div>


<div title="utilisateur" id="userDialog" style="display: none; background-color: #f7f7f9">
	<h4>Ajouter / Modifier Utilisateur</h4>
	<form action="POST" action="#" id="formUser" name="formUser">
		<input type="hidden" id="usr_id" name="usr_id">
		<table style="width: 95%">

			<tr>
				<td align="right" style="width: 40%">Nom&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="usr_lname" name="usr_lname"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Prénom&nbsp;&nbsp;&nbsp;	</td>
				<td><input class="form-control" type="text" id="usr_fname" name="usr_fname"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Login&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="usr_login" name="usr_login"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Mot de passe&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="password" id="usr_psw" name="usr_psw"></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Mail&nbsp;&nbsp;&nbsp;</td>
				<td><input class="form-control" type="text" id="usr_mail" name="usr_mail"></td>
			</tr>
		</table>
		<table style="width: 95%">
			<tr>
				<td align="right" style="width: 40%">Fournisseur&nbsp;&nbsp;&nbsp;</td>
				<td> <input  id="usr_right_four" name="usr_right_four" class="form-control" type="checkbox" value="1"></label></td>

				<td align="right" style="width: 40%">Produits&nbsp;&nbsp;&nbsp;</td>
				<td> <input  id="usr_right_cmd" name="usr_right_cmd" class="form-control" type="checkbox" value="1"></label></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">Inventaire&nbsp;&nbsp;&nbsp;</td>
				<td> <input   id="usr_right_inv" name="usr_right_inv" class="form-control" type="checkbox" value="1"></label></td>

				<td align="right" style="width: 40%">Pret&nbsp;&nbsp;&nbsp;</td>
				<td> <input id="usr_right_pret" name="usr_right_pret"   class="form-control" type="checkbox" value="1"></label></td>
			</tr>
			<tr>
				<td align="right" style="width: 40%">GED&nbsp;&nbsp;&nbsp;</td>
				<td> <input  id="usr_right_ged" name="usr_right_ged"  class="form-control" type="checkbox" value="1"></label></td>
				
				<td align="right" style="width: 40%">Paramètrage&nbsp;&nbsp;&nbsp;</td>
				<td> <input  id="usr_right_param" name="usr_right_param"  class="form-control" type="checkbox" value="1"></label></td>
			</tr>		
		</table>
		
	</form>
</div>
