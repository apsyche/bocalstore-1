{include file="_header.tpl"} 
<script type="text/javascript" src="rsrc/js/{$filejs}"></script>

{include file="subHeader.tpl"} 


<body role="document">

		{include file="topToolBar.tpl"} </br> </br>


		<div class="container-fluid">
			<div class="row">
				{include file="paramLeftMenu.tpl"}

				<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
			
					{include file={$frametpl}}

				</div>


			</div>

		</div>

</body>

</html>