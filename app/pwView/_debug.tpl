{include file="_header.tpl"} {literal}
<style type="text/css">
/* Her your special CSS Code */
body {
	
}
</style>
</head>
{/literal}

<body>

	<div class="container">
		<br>
		<!-- Main component for a primary marketing message or call to action -->
		<div class="jumbotron">

			<div class="row">
				<div class="col-md-9">
					<b><h2>Pwit Debug</h2></b> <u><h3>Error:</h3></u>
					<p>{$debug1}</p>

					<u><h3>Details:</h3></u>
					<p>{$debug2}</p>
				</div>

				<div class="col-md-3" align="center">
					<img alt="logo_pwit" width="150px" height="150px"
						src="../rsrc/img/logo.png"> <br>
				</div>
			</div>


		</div>

	</div>
	<!-- /container -->


	{literal}
	<script type="text/javascript">
		/* Her your special JS Code */
	</script>
	{/literal} {include file="_footer.tpl"}
</body>
</html>
