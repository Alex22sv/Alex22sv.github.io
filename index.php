<?php 
	session_start(); 
	require_once 'lib/config.php';
	spl_autoload_register(function($clase){
		require_once "lib/$clase.php";
	});
	$db = new Database(DB_HOST, DB_USER, DB_PASS, DB_NAME);
?>
<?php require 'inc/header.inc'; ?>

<div class="slider_bg"><!-- start slider -->
<div class="container">
		<div class="row slider">
		<div class="wmuSlider example1"><!-- start wmuSlider example1 -->
			   <div class="wmuSliderWrapper">
				   <article style="position: absolute; width: 100%; opacity: 0;"> 
				  	 	<div class="slider_img text-center">
				   			<ul class="list-unstyled list_imgs">
				   				<li><img src="assets/images/slider1.png" alt="" class="responsive"/></li>
				   			</ul>
			           	</div>
				   </article>
				   <article style="position: relative; width: 100%; opacity: 1;"> 
				  	 	<div class="slider_img text-center">
				   			<ul class="list-unstyled list_imgs">
				   				<li><img src="assets/images/slider2.jpeg" alt="" class="responsive"/></li>
				   			</ul>
			           	</div>
				   </article>
				 </div>
                <ul class="wmuSliderPagination">
                	<li><a href="#" class="">0</a></li>
                	<li><a href="#" class="">1</a></li>
                </ul>
			<script src="assets/js/jquery.wmuSlider.js"></script> 
		     <script>
				 $('.example1').wmuSlider();         
			</script>
        </div><!-- end wmuSlider example1 -->
        <div class="clearfix"></div>
      </div>
</div>
</div>
<div class="main_bg"  id="about"><!-- start about us -->
<div class="container">
	<div class="row about">
		<div class="col-md-3 about_img">
			<img src="assets/images/logo.JPG" alt="" class="responsive"/>
		</div>
		<div class="col-md-9 about_text">
			<h3>Alexander M.</h3>
			<h4>Desarrollador de software</h4>
			<p>Hola! Soy Alex22sv, más conocido como Alex. Actualmente estoy estudiando Ingeniería Informática. Tengo un poco de experiencia en desarrollo de bots de Discord (usando Discord.js), también plugins de Minecraft (no he hecho mucho pero tengo los conocimientos básicos) y desarrollo de páginas web (puedo crear páginas web front y back end, pero todavía me falta aprender a subirlas a un host). </p>
			<div class="soc_icons navbar-right">
				<ul class="list-unstyled text-center">
					<li><a href="https://discord.com/invite/7VPhYTVh55"><i class="fa-brands fa-discord"></i></a></li>
					<li><a href="https://twitter.com/alex22_sv"><i class="fa-brands fa-twitter"></i></a></li>
					<li><a href="https://github.com/Alex22sv"><i class="fa-brands fa-github"></i></a></li>
					<li><a href="https://www.reddit.com/user/Alex22_SV/"><i class="fa-brands fa-reddit"></i></a></li>
				</ul>	
			</div>
		</div>
	</div>
</div>
</div>
<?php require 'inc/footer.inc'; ?>