{include file="_header.tpl"} {literal}
<!-- Le styles -->
<link href="../bootstrap.css" rel="stylesheet">
<style type="text/css">
/* Override some defaults */
html, body {

 background-image: url("../rsrc/img/background.jpg");

}

body {
	padding-top: 40px;
}

.container {
	width: 60%;
	
	
}

/* The white background content wrapper */
.container>.content {

	background-color: #fff;
	background-repeat:no-repeat;
	opacity: 0.9;
	width : 60%;
	-webkit-border-radius: 10px 10px 10px 10px;
	-moz-border-radius: 10px 10px 10px 10px;
	border-radius: 10px 10px 10px 10px;
	-webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
	-moz-box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
	box-shadow: 0 5px 2px rgba(0, 0, 0, .15);

}

.login-form{

}



</style>

{/literal}

</head>
<body>
	<div class="container" align="center">
		<div align="left">
        <h1 style="color: #008080;"><b>Bocal Store</b></h1>
		</div>
		

		<br>
		<br>
		<br><br><br><br>
		<br><br>
		<div class="content">
			<div class="row">
				<div class="login-form"  >


					<form class="form-signin" name="connexionForm" id="connexionForm" >
						<div align="center">
							<br>
							<br>
	
							<h3 style="color: gray;"><b>Bocal Store <br> Connexion</b></h3>
						
							<br>
							<br> <label for="inputEmail" class="sr-only">Email
								address</label> <input type="text" id="login" class="form-control"
								placeholder="Nom d'utilisateur" required autofocus style="width: 60%">
							<label for="inputPassword" class="sr-only">Password</label> <input
								type="password" id="pass" class="form-control"
								placeholder="Mot de passe" required style="width: 60%">
							<br><br>
							<button class="btn btn-lg btn-primary btn-success" type="submit"
								style="width: 60%;">Connexion</button>
						</div>
						<br>
						<br>
						<br>
						<br>
					</form>
				</div>
			</div>
		</div>




		{include file="_footer.tpl"}
	</div>
	<!-- /container -->

	{literal}
	<script type="text/javascript">
	$(document).ready(	
			function() {
				$("#connexionForm").submit(
					function() {
		
						$.ajax({
							type    : "POST",
							url     : 'login!Authentification',
							data    : "login="+ $("#login").val()+ "&pass="+ $("#pass").val()+ "&lang="+ $("#lang").val(),
							success : function(msg) {
								if (msg == 1) {						
									$("#errorMessage").hide();
									location.href = "home!Index";
								} else {
									$("#errorMessage").html({/literal}"{#errorLogin#}"{literal});					
									$("#errorMessage").show();
								}
							},
							error:function(xhr, ajaxOptions, thrownError){
					  		 	alert(msg);
								alert ("Error getRdvlist");
								alert(xhr.statusText);
								alert(thrownError);
						   }
						});
						return false;
				});
	});
</script>
	{/literal}

</body>
</html>
