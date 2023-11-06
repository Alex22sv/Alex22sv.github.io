
<!--A Design by W3layouts
Author: W3layout
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
-->
<?php 
    $archivoActual = $_SERVER['SCRIPT_NAME'];
    require '../lib/errores.php';
    require '../lib/ayudantes.php';
	require '../lib/config.php';
	date_default_timezone_set('America/El_Salvador');
?>
<!DOCTYPE HTML>
<html>
<head>
<title>Alex22sv</title>
<!-- Bootstrap -->
<link href="../assets/css/bootstrap.min.css" rel='stylesheet' type='text/css' />
<link href="../assets/css/bootstrap.css" rel='stylesheet' type='text/css' />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
 <!--[if lt IE 9]>
     <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
     <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
<link href='http://fonts.googleapis.com/css?family=Kreon:300,400,700' rel='stylesheet' type='text/css'>
<link href="../assets/css/style.css" rel="stylesheet" type="text/css" media="all" />
<!-- start plugins -->
<script type="text/javascript" src="../assets/js/jquery.min.js"></script>
	<script>
		$(function() {
			var pull 		= $('#pull');
				menu 		= $('nav ul');
				menuHeight	= menu.height();
			$(pull).on('click', function(e) {
				e.preventDefault();
				menu.slideToggle();
			});
			$(window).resize(function(){
        		var w = $(window).width();
        		if(w > 320 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        		}
    		});
		});
	</script>
<!----font-Awesome----->
   	<link rel="stylesheet" href="../assets/fonts/css/font-awesome.min.css">
<!----font-Awesome----->
</head>
<body>
<div class="header_bg" id="home"><!-- start header -->
<div class="container">
	<div class="row header text-center specials">
		<div class="h_logo">
			<a href="index.php"><img src="../assets/images/logo.png" alt="" class="responsive"/></a>
		</div>
		<nav class="top-nav">
			<ul class="top-nav nav_list">
				<li><a href="../portfolio.php">Portafolio</a></li>
				<li class="page-scroll"><a href="index.php#about">Acerca</a></li>
				<li class="logo page-scroll"><a title="hexa" href="../index.php"><img src="../assets/images/logo.png" alt="" class="responsive"/></a></li>
			    <li class="page-scroll"><a href="../blog.php">Blog</a></li>
				<li class="page-scroll"><a href="#contact">Contacto</a></li>
				<?php if($_SESSION['id'] && $_SESSION['usuario']) : ?>
					<li class="page-scroll"><a href="../admin.php"><i class="fa-solid fa-user"></i><i class="fa-solid fa-crown"></i></a></li>
				<?php endif; ?>
			</ul>
			<a href="#" id="pull"><img src="../assets/images/nav-icon.png" title="menu" /></a>
		</nav>
		<div class="clearfix"></div>
	</div>
</div>
</div>