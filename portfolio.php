<?php 
	session_start(); 
	require_once 'lib/config.php';
	spl_autoload_register(function($clase){
		require_once "lib/$clase.php";
	});
	$db = new Database(DB_HOST, DB_USER, DB_PASS, DB_NAME);
?>
<?php require 'inc/header.inc'; ?>

<div class="container"><!-- start main -->
	<div class="main row">
 	 	<h2 class="style">Lista de proyectos</h2>
	 	 <div class="grids_of_4 row">
				<div class="col-md-3 images_1_of_4">					
					<h3><a href="single-page.html">PhoenixAPI</a></h3>
					<p class="para">	Bot de Discord para administrar tus servidores de exaroton.</p>
					<h4><a href="https://github.com/Alex22sv/PhoenixAPI-Bot">Leer más</a></h4>
				</div>
				<div class="col-md-3 images_1_of_4">					
					<h3><a href="single-page.html">CommanderBot</a></h3>
					<p class="para">(Mejorado) Bot de Discord para administrar tus servidores de exaroton. Compatible con comandos de barra diagonal (/).</p>
					<h4><a href="https://github.com/Alex22sv/CommanderBot">Leer más</a></h4>
				</div>
				<div class="col-md-3 images_1_of_4">					
					 <h3><a href="single-page.html">Generador de contraseñas</a></h3>
					 <p class="para">Proyecto para portafolio para crear contraseñas seguras.</p>
					 <h4><a href="https://alex22sv.me/GeneradorDeContrasenas/">Leer más</a> </h4>
				</div>
				<div class="col-md-3 images_1_of_4">					
					<h3><a href="single-page.html">Reproductor de música</a></h3>
					<p class="para">Proyecto para portafolio para reproducir música.</p>
					<h4><a href="https://github.com/Alex22sv/ReproductorDeMusica">Leer más</a></h4>
			    </div>
				<div class="clear"></div>
			</div>
	 	<!-- <div class="grids_of_4 row">
				<div class="col-md-3 images_1_of_4">
					 <h3><a href="single-page.html">long established fact</a></h3>
					 <p class="para">There are many variations of passages of Lorem Ipsum available,</p>
					 <h4><a href="single-page.html">ipsum dolor</a> </h4>
				</div>
				<div class="col-md-3 images_1_of_4">
					 <h3><a href="single-page.html">Lorem Ipsum is simply</a></h3>
					 <p class="para">Our website design and development provides quality web solutions,</p>
					 <h4><a href="single-page.html">Lorem ipsum</a></h4>
				</div>
				<div class="col-md-3 images_1_of_4">ngle-page.html">Lorem Ipsum available</a></h3>
					 <p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do EIUSMOD tempor,</p>
					 <h4><a href="single-page.html">consectetur lipsum</a></h4>
				</div>
				<div class="col-md-3 images_1_of_4">
					  <h3><a href="single-page.html">Contrary to popular</a></h3>
					 <p class="para">There are many variations of passages of Lorem Ipsum available,</p>
					 <h4><a href="single-page.html">lipsum adipisicing</a></h4>
				</div>
				<div class="clear"></div>
		</div> -->
	</div>
</div><!-- end main -->

<?php require 'inc/footer.inc'; ?>