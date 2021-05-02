<br>
<br>


<div class="col-sm-3 col-md-2 sidebar" style="width: 13%">
	<h3>
		<img alt="ecoles" src="rsrc/icons/png_icons/128/people-icon1096.png" style="width: 40px; height: 40px;"> <b>Association</b>
	</h3>


	<ul class="nav nav-sidebar">
		<li><a href="home!index"><span class="glyphicon glyphicon-th"></span>&nbsp; Tableau de brord&nbsp;&nbsp;</a></li>
	</ul>

	<ul class="nav nav-sidebar">
		<li class="{if $frame eq 'assoList' }active{/if}">
		<a href="asso!index!assoList"><span class="glyphicon glyphicon-th-list"></span>&nbsp; Liste Association &nbsp;&nbsp;</a></li>

		{if $asso_id neq ''}

		<li class="{if $frame eq 'assoAdd' }active{/if}">
			<a href="asso!index!assoAdd!{$asso_id}"><span class="glyphicon glyphicon-grain"></span>&nbsp; Association&nbsp;&nbsp;</a></li>

		<li class="{if $frame eq 'assoSubv' }active{/if}">
			<a href="asso!index!assoSubv!{$asso_id}"><span class="glyphicon glyphicon-piggy-bank"></span>&nbsp; Subventions&nbsp;&nbsp;</a></li>
		
		
		<li class="{if $frame eq 'assoDoc' }active{/if}">
			<a href="asso!index!assoDoc!{$asso_id}"><span class="glyphicon glyphicon-file"></span>&nbsp; Documents&nbsp;&nbsp;</a></li>
		
		{/if}

	</ul>



</div>





