
<nav class="navbar navbar-inverse navbar-fixed-top">
	<div class="container-fluid">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed"
				data-toggle="collapse" data-target="#navbar" aria-expanded="false"
				aria-controls="navbar">
				<span class="sr-only">Toggle navigation</span> <span
					class="icon-bar"></span> <span class="icon-bar"></span> <span
					class="icon-bar"></span>
			</button>
			<a class="navbar-brand"  href="home!index">{$title}</a>

		</div>
		<div id="navbar" class="navbar-collapse collapse">
			<ul class="nav navbar-nav navbar-right">


				<li class="active"><a href="#">v{$version}</a></li>
			
			<li><a href="profil!index!profilAbout"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> {$smarty.session.userLName}&nbsp;{$smarty.session.userFName}</a></li>
			<li><a href="logOut!Logout"> <span class="glyphicon glyphicon-log-out" aria-hidden="true"></span> Déconnexion</a></li>
			
 		
			</ul>
		</div>
	</div>
</nav>
