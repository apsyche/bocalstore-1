<br>
<br>


<div class="col-sm-3 col-md-2 sidebar" style="width: 13%">
	<h3>
		<img alt="Personnel"
			src="rsrc/icons/png_icons/128/worldmap-icon454.png"
			style="width: 40px; height: 40px;"> <b>Personnel</b>
	</h3>


	<ul class="nav nav-sidebar">
		<li><a href="home!index"><span class="glyphicon glyphicon-th"></span>&nbsp;
				Tableau de brord&nbsp;&nbsp;</a></li>
	</ul>

	<ul class="nav nav-sidebar">
		<li class="{if $frame eq 'persList' }active{/if}"><a
			href="pers!index!persList"><span class="glyphicon glyphicon-th-list"></span>&nbsp;
				Liste personnel &nbsp;&nbsp;</a></li>

		{if $per_id neq ''}

		<li class="{if $frame eq 'persAdd' }active{/if}"><a
			href="pers!index!persAdd!{$per_id}"><span
				class="glyphicon glyphicon-user"></span>&nbsp;
				Personnel&nbsp;&nbsp;</a></li>

		

		<li class="{if $frame eq 'persCarriere' }active{/if}"><a
			href="pers!index!persCarriere!{$per_id}"><span
				class="glyphicon glyphicon-hourglass"></span>&nbsp;
				Carrière&nbsp;&nbsp;</a></li>
				
				<li class="{if $frame eq 'persConge' }active{/if}"><a
			href="pers!index!persConge!{$per_id}"><span
				class="glyphicon glyphicon-plane"></span>&nbsp; Congé&nbsp;&nbsp;</a></li>

		<li class="{if $frame eq 'persDossier' }active{/if}"><a
			href="pers!index!persDossier!{$per_id}"><span
				class="glyphicon glyphicon-folder-close"></span>&nbsp;
				Dossier Disciplinaire&nbsp;&nbsp;</a></li>
		{/if}

	</ul>



</div>





