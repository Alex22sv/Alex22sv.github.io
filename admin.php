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
		<div class="row accionesAdmin">
            <div style="color: red; border: 3px solid red;margin:auto;width:75%;">
                <h2 class="text-center" style="text-align: center;">
                    Hola <?php echo $usuarioStaff; ?>, bienvenido a la administración de <?php echo WEB_NAME ?>
                </h2>
            </div>
        </div>
        <hr>
        <!-- Div para mostrar las acciones para admins -->
        <div class="row accionesAdmin">
            <a href="comandos.php" class="btn btn-warning" style="color: white;">Terminal de SQL <i class="fa-solid fa-terminal"></i></a>
            &nbsp;
            <a href="http://localhost/phpmyadmin/" target="_blank" class="btn btn-warning" style="color: white;">phpMyAdmin</a>
            &nbsp;
            <a href="logout.php" class="btn btn-danger" style="color: white;">Cerrar sesión &nbsp; <i class="fa-solid fa-right-from-bracket"></i></a>
        </div>
        <hr class="horizontal">
        <div id="stafflist" style="display: block;">
            <div class="row caja">
                <div class="caja-cabecera">
                    <h3 class="text-center">Usuarios &nbsp; <a href="agregarUsuario.php" class="btn btn-success">Agregar usuario <i class="fa-solid fa-plus"></i></a></h3>
                </div>
                <div class="caja-cuerpo">
                    <div class="col-sm-12">
                        <table class="table table-cell">
                        <thead>
                                <th>ID</th>
                                <th>Usuario</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Descripción</th>
                                <th>Acciones</th>
                        </thead>                
                            <tbody>
                                <?php 
                                // Staff
                                $consultaObtenerStaff = "SELECT id, usuario, nombre, email, descripcion FROM usuarios ORDER BY id";
                                if($db->preparar($consultaObtenerStaff)){
                                    $db->ejecutar();
                                    $db->prep()->bind_result($dbid, $dbusuario, $dbnombre, $dbemail, $dbdesc);
                                } else {
                                    trigger_error("Error al preparar la consulta de los usuarios en la base de datos.", E_USER_ERROR);
                                    exit;
                                }
                                while($db->resultado()){
                                    echo "<tr>
                                        <td>$dbid</td>
                                        <td>$dbusuario</td>
                                        <td>$dbnombre</td>
                                        <td>$dbemail</td>
                                        <td>$dbdesc</td>
                                        <td>
                                            <a class='btn btn-info acciones' href='editarUsuario.php?editar=$dbid'><i class='fa-solid fa-pencil'></i></a>
                                            <a class='btn btn-danger acciones' href='editarUsuario.php?confirmeliminar=$dbid'><i class='fa-solid fa-trash'></i></a>
                                        </td>
                                    </tr>            
                                    ";
                                }
                                $db->liberar();
                                ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <hr class="horizontal">  
        <div id="postslist" style="display: block;">
            <div class="row caja">
                <div class="caja-cabecera">
                    <h3 class="text-center">Publicaciones &nbsp; <a href="agregarPost.php" class="btn btn-success">Publicar <i class="fa-solid fa-plus"></i></a></h3>
                </div>
                <div class="caja-cuerpo">
                    <div class="col-sm-12">
                        <table class="table table-cell">
                            <thead>
                                <th>ID</th>
                                <th>Título</th>
                                <th>Fecha</th>
                                <th>Autor</th>
                                <th>Visibilidad</th>
                                <th>Acciones</th>
                            </thead>
                            <tbody>
                                <?php 
                                    // Publicaciones en una tabla
                                    $consultaObtenerPublicaciones = "SELECT id, titulo, fecha, autor, visibilidad, ruta FROM posts ORDER BY id DESC";
                                    if($db->preparar($consultaObtenerPublicaciones)){
                                        $db->ejecutar();
                                        $db->prep()->bind_result($id, $titulo, $fecha, $autor, $visibilidad, $ruta);
                                    } else {
                                        trigger_error("Error al preparar la consulta de los productos en la base de datos.", E_USER_ERROR);
                                        exit;
                                    }
                                    while($db->resultado()){
                                        if($visibilidad == 1){
                                            $visible = "Visible";
                                        } else {
                                            $visible = "Oculta";
                                        }
                                        /* $cuerpoSubstr = substr($cuerpo, 0, 50); */
                                        $fechaFormato = date("d/m/Y H:i", $fecha);
                                        echo "<tr>
                                            <td><a href='.$ruta'>$id</a></td>
                                            <td><a href='.$ruta'>$titulo</a></td>
                                            <td>$fechaFormato</td>
                                            <td>$autor</td>
                                            <td>$visible</td>
                                            <td>
                                                <a class='btn btn-info acciones' href='editarPost.php?editar=$id'><i class='fa-solid fa-pencil'></i></a>
                                                <a class='btn btn-danger acciones' href='editarPost.php?confirmeliminar=$id'><i class='fa-solid fa-trash'></i></a>
                                            </td>
                                        </tr>";
                                    } 
                                    $db->liberar();
                                ?>  
                            </tbody>
                        </table>
                    </div> 
                </div>
            </div>
        </div>
        <hr class="horizontal">  
        <hr>
	</div>
</div>
<?php require 'inc/footer.inc'; ?>