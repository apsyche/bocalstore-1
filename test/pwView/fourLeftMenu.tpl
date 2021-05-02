<br>
<br>


<div class="col-sm-3 col-md-2 sidebar" style="width: 13%">
	<h3>
		<img alt="foures" src="rsrc/icons/png_icons/128/transport-icon887.png" style="width: 40px; height: 40px;"> <b>	Fournisseurs</b>
	</h3>


	<ul class="nav nav-sidebar">
		<li><a href="home!index"><span class="glyphicon glyphicon-th"></span>&nbsp; Tableau de brord&nbsp;&nbsp;</a></li>
	</ul>

	<ul class="nav nav-sidebar">
		<li class="{if $frame eq 'fourList' }active{/if}">
		<a href="four!index!fourList"><span class="glyphicon glyphicon-th-list"></span>&nbsp; Liste Fournisseurs &nbsp;&nbsp;</a></li>

		{if $fur_id neq ''}

		<li class="{if $frame eq 'fourAdd' }active{/if}">
			<a href="four!index!fourAdd!{$fur_id}"><span class="glyphicon glyphicon-tags"></span>&nbsp; Fournisseurs&nbsp;&nbsp;</a></li>

		

		<li class="{if $frame eq 'fourProd' }active{/if}">
			<a href="four!index!fourProd!{$fur_id}"><span class="glyphicon glyphicon-th-large"></span>&nbsp; Produits &nbsp;&nbsp;</a></li>
				
	
		<li class="{if $frame eq 'fourDoc' }active{/if}">
			<a href="four!index!fourDoc!{$fur_id}"><span class="glyphicon glyphicon-file"></span>&nbsp; Documents &nbsp;&nbsp;</a></li>
		{/if}

	</ul>



</div>





