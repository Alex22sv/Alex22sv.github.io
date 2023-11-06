<?php 
	session_start(); 
	require_once '../lib/config.php';
	spl_autoload_register(function($clase){
		require_once "../lib/$clase.php";
	});
	$filename = basename($_SERVER['PHP_SELF']);
	$basename = basename($filename);
	$pos = strrpos($basename, '.');
	if ($pos !== false) {
		$nombreArchivo = substr($basename, 0, $pos);
	} else {
		$nombreArchivo = $basename;
	}
	
	// Database
	$db = new Database(DB_HOST, DB_USER, DB_PASS, DB_NAME);

	$consultaObtenerPublicacion = "SELECT id, titulo, cuerpo, fecha, archivo, autor, categoria, tags, vistas, likes, visibilidad, ruta, thumbnail FROM posts WHERE archivo = '$nombreArchivo'";
	if($db->preparar($consultaObtenerPublicacion)){
		$db->ejecutar();
		$db->prep()->bind_result($idpost, $titulopost, $cuerpopost, $fechapost, $archivopost, $autorpost, $categoriapost, $tagspost, $vistaspost, $likespost, $visibilidadpost, $rutapost, $thumbnailpost);
		$db->resultado();
		$db->liberar();
	} else {
		trigger_error("Error al preparar la consulta de la publicación en la base de datos.", E_USER_ERROR);
		exit;
	}
	// Obtener información del autor
	$consultaObtenerInformacionAutor = "SELECT id, usuario, descripcion, rutaImagen FROM usuarios WHERE nombre = '$autorpost'";
	if($db->preparar($consultaObtenerInformacionAutor)){
		$db->ejecutar();
		$db->prep()->bind_result($idautor, $usuarioautor, $descautor, $rutaImagenAutor);
		$db->resultado();
		$db->liberar();
	} else {
		trigger_error("Error al preparar la consulta de la información del autor en la base de datos.", E_USER_ERROR);
	}
	// Conteo de publicaciones dentro de la misma categoría
	$consultaPublicacionesMismaCategoria = "SELECT COUNT(*) FROM posts WHERE categoria = '$categoriapost' AND visibilidad = 1";
	if($db->preparar($consultaPublicacionesMismaCategoria)){
		$db->ejecutar();
		$db->prep()->bind_result($postsCategoria);
		$db->resultado();
		$db->liberar();
	} else {
		trigger_error("Error al preparar la consulta de publicaciones de la misma categoría en la base de datos.", E_USER_ERROR);
		exit;
	}
	// Actualizar la cantidad de vistas
    $consultaActualizarContadorVistas = "UPDATE posts SET vistas = vistas + 1 WHERE id = $idpost";
    if($db->preparar($consultaActualizarContadorVistas)){
        $db->ejecutar();
        $db->liberar();
    } else {
        trigger_error("Error al preparar la consulta para actualizar el contador de vistas en la base de datos.", E_USER_ERROR);
        exit;
    }
?>
<?php require '../inc/postheader.inc'; ?>
    <!------------ Start Content ---------------->
       <div class="main"> 
			<?php if($visibilidadpost == 1) : ?>
				<div class="reservation_top">
					<div class="container">
						<div class="row">
							<div class="col-md-8">
								<div class="post1">
									<?php 
									if($_SESSION['id'] && $_SESSION['usuario']){
										$editarPostButton = "<a class='btn btn-info acciones' href='../editarPost.php?editar=$idpost'><i class='fa-solid fa-pencil'></i></a>";
									} else {
										$editarPostButton = "";
									}
									?>
									<h3><?php echo "$titulopost &nbsp; $editarPostButton"; ?></h3>
									<div class="post1_header">
										<span class="post1_header_date">
											<time datetime="<?php echo date('d/m/Y', $fechapost); ?>" title="date"><?php echo date('d/m/Y H:i', $fechapost); ?></time>
										</span>
										<span class="post1_header_by" title="admin">Por <?php echo $autorpost; ?></span>
										<!-- <span class="post1_header_in" title="bookmark"><a href="#">In aenean nonummy</a></span> -->
										<span class="post1_header_comments" title="comment"><i class="fa fa-eye"></i> <?php echo $vistaspost; ?> | <i class="fa fa-heart"></i> <?php echo $likespost; ?>
										</span>
									</div>
									<img src="<?php echo $thumbnailpost; ?>" class="img-responsive" alt=""/>
									<p><?php echo $cuerpopost; ?></p>
								</div>
								<div class="comments-list">
									<ul class="comment-list">
										<h5 class="post-author_head">Publicación escrita por <a href="#" rel="author"><?php echo $autorpost; ?></a></h5>
										<li><img src="<?php echo "../".$rutaImagenAutor; ?>" class="img-responsive" alt="">
										<div class="desc">
												<p><?php echo $descautor; ?></p>
										</div>
										<div class="clearfix"></div>
										</li>
									</ul>
								</div>
								<hr class="horizontal">
									
							</div>
							<div class="col-md-4">
								<div class="category_widget">
								<h3>Categoría</h3>
								<ul class="list-unstyled arrow">
									<li><a href="../buscarPost.php?categoria=<?php echo $categoriapost; ?>"><?php echo $categoriapost; ?> <span class="badge pull-right"><?php echo $postsCategoria; ?></span></a></li>
								</ul>
								</div>
								<ul class="tag_nav list-unstyled">
								<h3>Tags</h3>
									<!-- <li><a href="#">Web Design</a></li> -->
									<?php
										$array = explode(", ", $tagspost);
										foreach($array as $tag){
											echo "<li><a href='../buscarPost.php?tag=$tag'>$tag</a></li> ";
										}
									?>				
								</ul>
								<ul class="recent-list">
								<h3>Publicaciones recientes</h3>
								<?php 
										$consultaPublicacionesRecientes = "SELECT titulo, fecha, archivo FROM posts ORDER BY id DESC LIMIT 3";
										if($db->preparar($consultaPublicacionesRecientes)){
											$db->ejecutar();
											$db->prep()->bind_result($tituloReciente, $fechaReciente, $archivoReciente);
										} else {
											trigger_error("Error al preparar la consulta de publicaciones recientes en la base de datos.", E_USER_ERROR);
											exit;
										}
										while($db->resultado()){
											$fechaRecienteFormato = date("d/m/Y", $fechaReciente);
											echo "<li><a href='$archivoReciente.php'>$tituloReciente</a><br><span>$fechaRecienteFormato</span></li>";
										}
										$db->liberar();
										
								?>
								</ul>
							</div>
						</div>
					</div>
	     		</div>
			<?php elseif(($visibilidadpost == 0) && ($_SESSION['id']) && ($_SESSION['usuario'])) : ?>
				<div class="reservation_top">
					<div class="container">
						<div class="row">
							<div class="col-md-8">
								<div class="post1">
									<?php 
									if($_SESSION['id'] && $_SESSION['usuario']){
										$editarPostButton = "<a class='btn btn-info acciones' href='../editarPost.php?editar=$idpost'><i class='fa-solid fa-pencil'></i></a>";
									} else {
										$editarPostButton = "";
									}
									?>
									<h3><?php echo "$titulopost &nbsp; $editarPostButton"; ?></h3>
									<div class="post1_header">
										<span class="post1_header_date">
											<time datetime="<?php echo date('d/m/Y', $fechapost); ?>" title="date"><?php echo date('d/m/Y H:i', $fechapost); ?></time>
										</span>
										<span class="post1_header_by" title="admin">Por <?php echo $autorpost; ?></span>
										<!-- <span class="post1_header_in" title="bookmark"><a href="#">In aenean nonummy</a></span> -->
										<span class="post1_header_comments" title="comment">Publicación oculta <i class="fa-solid fa-eye-slash"></i> &nbsp; | &nbsp; <i class="fa fa-eye"></i> <?php echo $vistaspost; ?> | <i class="fa fa-heart"></i> <?php echo $likespost; ?>
										</span>
									</div>
									<img src="<?php echo $thumbnailpost; ?>" class="img-responsive" alt=""/>
									<p><?php echo $cuerpopost; ?></p>
								</div>
								<div class="comments-list">
									<ul class="comment-list">
										<h5 class="post-author_head">Publicación escrita por <a href="#" rel="author"><?php echo $autorpost; ?></a></h5>
										<li><img src="<?php echo "../".$rutaImagenAutor; ?>" class="img-responsive" alt="">
										<div class="desc">
												<p><?php echo $autordesc; ?></p>
										</div>
										<div class="clearfix"></div>
										</li>
									</ul>
								</div>
								<hr class="horizontal">
							</div>	
							<div class="col-md-4">
								<div class="category_widget">
								<h3>Categoría</h3>
								<ul class="list-unstyled arrow">
									<li><a href="#"><?php echo $categoria; ?> <span class="badge pull-right"><?php echo $postsCategoria; ?></span></a></li>
								</ul>
								</div>
								<ul class="blog-list1">
								<h3>Tags</h3>
									<!-- <li><a href="#">Web Design</a></li> -->
									<?php
										$array = explode(", ", $tagspost);
										foreach($array as $tag){
											echo "<li><a href='#'>$tag</a></li> ";
										}
									?>				
								</ul>
								<ul class="recent-list">
								<h3>Publicaciones recientes</h3>
								<?php 
										$consultaPublicacionesRecientes = "SELECT titulo, fecha, archivo FROM posts WHERE visibilidad = 1 ORDER BY id DESC LIMIT 3";
										if($db->preparar($consultaPublicacionesRecientes)){
											$db->ejecutar();
											$db->prep()->bind_result($tituloReciente, $fechaReciente, $archivoReciente);
										} else {
											trigger_error("Error al preparar la consulta de publicaciones recientes en la base de datos.", E_USER_ERROR);
											exit;
										}
										while($db->resultado()){
											$fechaRecienteFormato = date("d/m/Y", $fechaReciente);
											echo "<li><a href='$archivoReciente.php'>$tituloReciente</a><br><span>$fechaRecienteFormato</span></li>";
										}
										$db->liberar();
										
								?>
								</ul>
							</div>
						</div>
					</div>
	     		</div>
			<?php else : ?>
				<div class="container text-center centrar">
					<div class="col-sm-12">
					<?php trigger_error("Esta publicación actualmente no se encuentra disponible.", E_USER_WARNING); ?>	
					<a href="../index.php" class="btn btn-primary">Volver a la página principal</a>
					<hr>
					</div>
				</div>
			<?php endif; ?>
       </div>
	   <?php require '../inc/postfooter.inc'; ?>