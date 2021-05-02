{include file="_header.tpl"} 
<script type="text/javascript" src="rsrc/js/{$filejs}"></script>

{include file="subHeader.tpl"} 

<body role="document">

		{include file="topToolBar.tpl"} </br> 


		<div class="container-fluid">
			<div class="row">
				<div class="col-md-2">
					{include file="assoLeftMenu.tpl"}
				</div>
				<div class="col-md-10 pagediv">
					{include file={$frametpl}}

				</div>


			</div>

		</div>
		

</body>

</html>