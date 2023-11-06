<?php 
	session_start(); 
	require_once 'lib/config.php';
    require_once 'lib/PasswordHash.php';
	spl_autoload_register(function($clase){
		require_once "lib/$clase.php";
	});
	// Database
	$db = new Database(DB_HOST, DB_USER, DB_PASS, DB_NAME);
	if( ( isset($_SESSION['id']) && isset($_SESSION['usuario']) ) || isset($_COOKIE['id']) ){
        if(isset($_COOKIE['id'])){
            $_SESSION['id'] = $_COOKIE['id'];
            $_SESSION['usuario'] = $_COOKIE['usuario'];
            $_SESSION['nombre'] = $_COOKIE['nombre'];
            $_SESSION['descripcion'] = $_COOKIE['descripcion'];
            $_SESSION['imagen'] = $_COOKIE['imagen'];
        }
        header("Location: admin.php");
    }
    $ok = false;
?>

<?php require 'inc/header.inc'; ?>

<div class="main">
    <div class="container">
        <?php 
            if($_POST){
                extract($_POST, EXTR_OVERWRITE);
                // Convertir array en variables
                if(!file_exists("imagenes/usuarios")){
                    mkdir("imagenes/usuarios", 0777);
                }
                if($nombre && $usuario && $descripcion && $email && $contrasena && $confirmcontrasena){
                    if(strlen($nombre) > 30){
                        trigger_error("Tu nombre no puede superar los 30 caracteres.", E_USER_ERROR);
                        exit;
                    }
                    if(strlen($usuario) > 30){
                        trigger_error("Tu usuario no puede superar los 30 caracteres.", E_USER_ERROR);
                        exit;
                    }
                    if(strlen($email) > 50){
                        trigger_error("El correo electrónico no puede superar los 50 caracteres.", E_USER_ERROR);
                        exit;
                    }
                    if(strlen($descripcion) > 150){
                        trigger_error("Tu descripción no puede superar los 150 caracteres.", E_USER_ERROR);
                        exit;
                    }
                    $regex = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';
                    if(preg_match($regex, $email)){   
                        if(strlen($contrasena)>6){
                            if(strlen($contrasena)<51){
                                if($contrasena == $confirmcontrasena){
                                    $validarEmail = $db->validarDatos('email', 'usuarios', $email);
                                    if($validarEmail == 0){
                                        if(ValidarFoto($usuario)){
                                            $hasher = new PasswordHash(8, FALSE);
                                            // Encriptando contraseña
                                            $contrasenaEncriptada = $hasher->HashPassword($contrasena);
                                            $consultaAgregarCuenta = "INSERT INTO usuarios (`id`, `nombre`, `usuario`, `email`, `contrasena`, `descripcion`, `rutaImagen`) VALUES (NULL, '$nombre', '$usuario', '$email', '$contrasenaEncriptada', '$descripcion', '$rutaSubida')";
                                            // echo $consultaAgregarCuenta;
                                            if($db->preparar($consultaAgregarCuenta)){
                                                $db->ejecutar();
                                                trigger_error("Tu cuenta ha sido creada con éxito.", E_USER_NOTICE);
                                                $ok = true;
                                                $db->cerrar();
                                            } else {
                                                trigger_error("Error al preparar la consulta para agregar el usuario en la base de datos.", E_USER_ERROR);
                                                exit;
                                            }
                                        } else {
                                            trigger_error($error, E_USER_ERROR);
                                        }
                                    } else {
                                        trigger_error("Ese correo electrónico ya está registrado, prueba con otro.", E_USER_ERROR);
                                    } 
                                } else {
                                    trigger_error("Las contraseñas no coinciden.", E_USER_ERROR);
                                }
                            } else {
                                trigger_error("La contraseña no puede superar los 50 caracteres.", E_USER_ERROR);
                            }
                        } else {
                            trigger_error("La contraseña tiene que ser mayor a 6 caracteres.", E_USER_ERROR);
                        }
                    } else {
                        trigger_error("Correo electrónico no válido.", E_USER_ERROR);
                    }
                } else {
                    trigger_error("No puedes dejar campos vacíos.", E_USER_ERROR);
                }
            }
        ?>
        <?php if($ok) : ?>
            <img class='img-responsive' src='<?php echo $rutaSubida; ?>' alt='Foto de perfil'>
            <br>
            <a href="iniciarSesion.php" class="btn btn-primary">Iniciar sesión</a>
            <hr>
                        
        <?php else : ?>
            <form action="" enctype="multipart/form-data" method="POST" role="form" class="formulario">
                <legend>Crear cuenta</legend>
                <div class="form-group">
                    <input type="text" name="nombre" class="form-control" placeholder="Nombre">
                </div>
                <div class="form-group">
                    <input type="text" name="usuario" class="form-control" placeholder="Usuario">
                </div>
                <div class="form-group">
                    <input type="text" name="descripcion" class="form-control" placeholder="Descripción">
                </div>
                <div class="form-group">
                    <input name="email" type="text" class="form-control" id="" placeholder="Correo electrónico">
                </div>
                <div class="form-group">
                    <input name="contrasena" type="password" class="form-control" placeholder="Contraseña">
                </div>
                <div class="form-group">
                    <input name="confirmcontrasena" type="password" class="form-control" placeholder="Confirmar contraseña">
                </div>
                <div class="form-group">
                    <label for="">Elija su foto de perfil</label>
                    <input name="foto" type="file" class="form-control" id="">
                </div>
                <button type="submit" class="btn btn-primary">Crear cuenta</button>
                <a href="admin.php" class="pull-right">Cancelar</a>
            </form>
            <hr>

        <?php endif; ?>
    </div>
</div>

<?php require 'inc/footer.inc'; ?>