{include file="_header.tpl"} 
<script type="text/javascript">
var usr_right_lecture = {$smarty.session.usr_right_lecture};
</script>

<script type="text/javascript" src="rsrc/js/{$filejs}"></script>

{include file="subHeader.tpl"} 

</head>

<body role="document">


		{include file="topToolBar.tpl"} <br>

		<div class="container-fluid">
			<div class="row">
				<div class="col-md-2">
					{include file="stoLeftMenu.tpl"}
				</div>
				<div class="col-md-10 pagediv">
					{include file={$frametpl}}
				</div>


			</div>

		</div>
</body>

</html>

