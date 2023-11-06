<?php 
	session_start(); 
	require_once 'lib/config.php';
	spl_autoload_register(function($clase){
		require_once "lib/$clase.php";
	});
	// Database
	$db = new Database(DB_HOST, DB_USER, DB_PASS, DB_NAME);
	if(!$_SESSION['id'] && !$_SESSION['usuario']){
        header("Location: iniciarSesion.php");
        exit;
    }
    $idStaff = $_SESSION['id'];
    $usuarioStaff = $_SESSION['usuario'];
    $nombreStaff = $_SESSION['nombre'];
?>
<?php require 'inc/header.inc'; ?>

<div class="main">
    <div class="container">
        <?php if($_POST){
            extract($_POST, EXTR_OVERWRITE);
            // Convertir array en variables
            if(!file_exists("imagenes/thumbnails/")){
                mkdir("imagenes/thumbnails/", 0777);
            }
            if($titulo && $cuerpo && $categoria && $tags){
                if(strlen($titulo) > 60){
                    trigger_error("El título de la publicación no puede superar los 60 caracteres.", E_USER_ERROR);
                    exit;
                }
                if(strlen($cuerpo) > 12000){
                    trigger_error("El cuerpo de la publicación no puede superar los 12,000 caracteres.", E_USER_ERROR);
                    exit;
                }
                if(strlen($tags) > 300){
                    trigger_error("Los tags no puede superar los 300 caracteres.", E_USER_ERROR);
                    exit;
                }
                $archivo = date("Y-m-d-H-i-s");
                if(validarthumbnail($archivo)){
                    $fecha = time();
                    $filename = "index.php";
                    $rutaPublicacion = "/posts/$archivo.php";
                    $origin = "/posts/single.php";
                    $destination = "/posts/$archivo.php";
                    $consultaAgregarPublicacion = "INSERT INTO posts (`id`, `titulo`, `cuerpo`, `fecha`, `archivo`, `autor`,`categoria`, `tags`, `visibilidad`, `ruta`, `thumbnail`) VALUES (NULL, '$titulo', '$cuerpo', $fecha, '$archivo', '$autor', '$categoria', '$tags', $visibilidad, '$rutaPublicacion', '../$rutaSubidaThumbnail')";
                    // echo $consultaAgregarPublicacion;
                    if($db->preparar($consultaAgregarPublicacion)){
                        $db->ejecutar();
                        $file = fopen($rutaPublicacion, 'x');
                        if ($file != false) {
                            if(copy($origin, $rutaPublicacion)){
                                trigger_error("Publicación realizada con éxito.", E_USER_NOTICE);
                                $ok = true;
                                $db->cerrar();
                            } else {
                                trigger_error("Ocurrió un fallo al copiar el contenido base a la publicación.", E_USER_ERROR);
                                exit;
                            }  
                        } else {
                            trigger_error("Ocurrió un fallo al crear el archivo de la publicación.", E_USER_ERROR);
                                exit;
                        }
                    } else {
                        trigger_error("Error al preparar la consulta en la base de datos para agregar la publicación.", E_USER_ERROR);
                        exit;
                    }
                } else {
                    trigger_error($error, E_USER_ERROR);
                }
                } else {
                    trigger_error("No puedes dejar campos vacíos.", E_USER_ERROR);
                } 
        }
        ?>
        <?php if($ok) : ?>
            <a href="<?php echo $rutaPublicacion; ?>" class="btn btn-primary">Ver publicación</a>
            <hr>
        <?php else : ?> 
            <form action="" enctype="multipart/form-data" method="POST" role="form" class="formulario">
                <legend>Hacer una nueva publicación</legend>
                <div class="form-group">
                    <label for="titulo">Ingresa el título de la publicación: </label>
                    <input type="text" name="titulo" class="form-control" id="titulo" placeholder="Título">
                </div>
                <div class="form-group">
                    <label for="cuerpo">Ingresa el cuerpo de la publicación: </label>
                    <textarea name="cuerpo" id="cuerpo" cols="120" rows="10" class="form-control" placeholder="Cuerpo"></textarea>
                </div>
                <div class="form-group">
                    <input type="hidden" name="autor" value="<?php echo $nombreStaff; ?>">
                </div>
                <div class="form-group">
                    <label for="categoria">¿A qué categoría corresponde esta publicación? </label>
                    <select name="categoria" id="categorias" class="form-control">
                        <option value="Noticia">Noticia</option>
                        <option value="Opinión">Opinión</option>
                        <option value="Receta de cocina">Receta de cocina</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="tags">Ingresa los tags para la publicación, separados por comas: </label>
                    <input type="text" name="tags" class="form-control" placeholder="Tags">
                </div>
                <div class="form-group">
                    <label for="visibilidad">¿Esta publicación debería estar disponible para todo el mundo? </label>
                    <select name="visibilidad" id="visibilidad" class="form-control">
                        <option value="1">Sí</option>
                        <option value="0">No</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="thumbnail">Ingresa una imagen para el encabezado de la publicación: </label>
                    <input name="foto" type="file" class="form-control" id="thumbnail">
                </div>
                <button type="submit" class="btn btn-primary">Publicar</button>
                <a href="admin.php" class="pull-right">Cancelar publicación</a>
            </form>
        <?php endif; ?>
    </div>
</div>

<?php require 'inc/footer.inc'; ?>
