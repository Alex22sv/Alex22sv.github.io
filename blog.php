<?php 
	session_start(); 
	require_once 'lib/config.php';
	spl_autoload_register(function($clase){
		require_once "lib/$clase.php";
	});
	// Database
	$db = new Database(DB_HOST, DB_USER, DB_PASS, DB_NAME);
?>
<?php require 'inc/header.inc'; ?>

<div class="blog"><!-- start main -->
	<div class="container">
		<div class="main row">
			<div class="col-md-8 blog_left">
				<h2 class="style">Mis blogs más recientes</h2>
				<?php 
					$consultaContarPosts = "SELECT COUNT(id) FROM posts";
					if($db->preparar($consultaContarPosts)){
						$db->ejecutar();
						$db->prep()->bind_result($contadorPosts);
						$db->resultado();
						$db->liberar();
						
						$porPagina = 2;
						$paginas = ceil($contadorPosts / $porPagina);
						$pagina = ( isset($_GET['pagina'])) ? (int)$_GET['pagina'] : 1;
						$iniciar = ($pagina-1) * $porPagina;
					} else {
						trigger_error("Error al preparar la consulta para contar las publicaciones en la base de datos.", E_USER_ERROR);
						exit;
					}
					$consultaObtenerPosts = "SELECT id, titulo, cuerpo, fecha, archivo, autor, categoria, tags, vistas, likes, visibilidad, ruta, thumbnail FROM posts ORDER BY id DESC LIMIT $iniciar, $porPagina";
						if($db->preparar($consultaObtenerPosts)){
							$db->ejecutar();
							$db->prep()->bind_result($dbidpost, $dbtitulo, $dbcuerpo, $dbfecha, $dbarchivo, $dbautor, $dbcategoria, $dbtags, $dbvistas, $dblikes, $dbvisibilidad, $dbruta, $dbthumbnail);
							while($db->resultado()){
								if($dbvisibilidad == 1){
									$datetime = date('d/m/Y', $dbfecha);
									$fecha = date('d/m/Y H:i', $dbfecha);
									$thumbnailFixed = substr($dbthumbnail, 1);
									if(strlen($dbcuerpo)>=300){
										$cuerpoResumido = substr($dbcuerpo, 0, 300)."...";
									} else {
										$cuerpoResumido = $dbcuerpo;
									}
									if($_SESSION['idstaff'] && $_SESSION['nombre']){
										$editarButton = "<a class='btn btn-info acciones' href='editarPost.php?editar=$dbidpost'><i class='fa-solid fa-pencil'></i></a>";
									} else {
										$editarButton = "";
									}
									echo "<div class='blog_main'>
										<a href='.$dbruta'><img src='$thumbnailFixed' alt='' class='blog_img img-responsive'/></a>
										<h4><a href='.$dbruta'>$dbtitulo</a></h4>
											<div class='blog_list pull-left'>
												<ul class='list-unstyled'>
													<li><i class='fa fa-calendar-o'></i><span>$datetime</span></li>
													<li><i class='fa fa-user'></i><span>$dbautor</span></li>
													<li><i class='fa fa-eye'></i><span>$dbvistas vistas</span></li>
												</ul>
											</div>
										<div class='b_left pull-right'>
											<a href='.$dbruta'><i class='fa fa-heart'></i><span> $dblikes</span></a>
										</div>
										<div class='clearfix'></div>
										<p class='para'>$cuerpoResumido</p>
										<div class='read_more btm'>
											<a href='.$dbruta'>Leer más</a>
										</div>
									</div>";
								}
							}
						} else {
							trigger_error("Error al preparar la consulta para obtener las publicaciones en la base de datos.", E_USER_ERROR);
							exit;
						}
				?>
			</div>
			<div class="col-md-4 blog_right">
				<ul class="ads_nav list-unstyled">
					<h4>Publicidad</h4>
						<li><a href="#"><img src="assets/images/mapache_ad.png" alt="" class="ad_image"> </a></li>
						<li><a href="https://github.com/Alex22sv/PhoenixAPI-Bot"><img src="assets/images/phoenixapibot_ad.png" alt="" class="ad_image"> </a></li>
						<li><a href="https://github.com/Alex22sv/PhoenixAPI-Bot"><img src="assets/images/phoenixapibot_ad.png" alt="" class="ad_image"> </a></li>
						<li><a href="#"><img src="assets/images/mapache_ad.png" alt="" class="ad_image"> </a></li>
					<div class="clearfix"></div>
				</ul>
				<ul class="tag_nav list-unstyled">
					<h4>tags</h4>
						<?php 
							$consultaObtenerTags = "SELECT tags FROM posts";
							if($db->preparar($consultaObtenerTags)){
								$db->ejecutar();
								$db->prep()->bind_result($tags);
								$globalArray = array();
								while($db->resultado()){
									$array = explode(',', $tags);
									$globalArray = array_merge($globalArray, $array);
								}
								$db->liberar();
								$globalArray = array_unique($globalArray);
								foreach($globalArray as $tag){
									$tag = ucfirst($tag);
									echo "<li><a href='buscarPost.php?tag=$tag'>$tag</a></li>";
								}
							} else {
								trigger_error("Error al preparar la consulta de tags en la base de datos.", E_USER_ERROR);
								exit;
							}
						?>
				</ul>
				<!-- Sección de categorías -->
				<!-- start social_network_likes -->
					<!-- <div class="social_network_likes">
				      		 <ul class="list-unstyled">
				      		 	<li><a href="#" class="tweets"><div class="followers"><p><span>2k</span>Followers</p></div><div class="social_network"><i class="fa-brands fa-twitter"></i> </div></a></li>
				      			<li><a href="#" class="facebook-followers"><div class="followers"><p><span>5k</span>Followers</p></div><div class="social_network"><i class="fa-brands fa-facebook"> </i> </div></a></li>
				      			<li><a href="#" class="email"><div class="followers"><p><span>7.5k</span>members</p></div><div class="social_network"><i class="fa-brands fa-github"> </i></div> </a></li>
				      			<li><a href="#" class="dribble"><div class="followers"><p><span>10k</span>Followers</p></div><div class="social_network"><i class="fa-brands fa-instagram"> </i></div></a></li>
				      			<div class="clear"> </div>
				    		</ul>
		          	</div> -->
				<!-- <div class="news_letter">
					<h4>news letter</h4>
						<form>
							<span><input type="text" placeholder="Your email address"></span>
							<span  class="pull-right fa-btn btn-1 btn-1e"><input type="submit" value="subscribe"></span>
						</form>
				</div> -->
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
</div><!-- end main -->
<?php require 'inc/footer.inc'; ?>