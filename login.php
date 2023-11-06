<?php 
	session_start(); 
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
?>
<?php require 'inc/header.inc'; ?>

<div class="main">
    <div class="container caja">
    <?php  
        if($_POST){
            require_once 'lib/config.php';
            spl_autoload_register(function($clase){
                require_once "lib/$clase.php";
            });
            // Database
            $db = new Database(DB_HOST, DB_USER, DB_PASS, DB_NAME);
            extract($_POST, EXTR_OVERWRITE);
            if($usuario && $contrasena){
                $validarUsuario = $db->validarDatos('usuario', 'usuarios', $usuario);
                    if($validarUsuario != 0){
                        $consultaObtenerDatos = "SELECT id, nombre, usuario, email, contrasena, descripcion, rutaImagen FROM usuarios WHERE usuario = '$usuario'";
                        if($db->preparar($consultaObtenerDatos)){
                            $db->ejecutar();
                            $db->prep()->bind_result($idusuario, $nombreusuario, $username, $emailusuario, $contrasenausuario, $descripcionusuario, $imagenusuario);
                            $db->resultado();
                            // Verificar contraseña
                            $hasher = new PasswordHash(8, FALSE);
                            if($hasher->CheckPassword($contrasena, $contrasenausuario)){
                                $_SESSION['id'] = $idusuario;
                                $_SESSION['usuario'] = $username;
                                $_SESSION['nombre'] = $nombreusuario;
                                $_SESSION['descripcion'] = $descripcionusuario;
                                $_SESSION['imagen'] = $imagenusuario;
                                
                                $caduca = time()+365*24*60*60;
                                if($recordar == 'activo'){
                                    setcookie('id', $_SESSION['id'], $caduca);
                                    setcookie('usuario', $_SESSION['usuario'], $caduca);
                                    setcookie('nombre', $_SESSION['nombre'], $caduca);
                                    setcookie('descripcion', $_SESSION['descripcion'], $caduca);
                                    setcookie('imagen', $_SESSION['imagen'], $caduca);
                                }
                                $db->cerrar();
                                trigger_error("Has iniciado sesión correctamente.", E_USER_NOTICE);
                                header("Location:admin.php");
                                $ok = true;
                            } else {
                                trigger_error("Contraseña incorrecta.", E_USER_ERROR);
                                header("Refresh:5;url=iniciarSesion.php");
                                echo "<br>
                                <a href='iniciarSesion.php' class='btn btn-primary'>Regresar</a>
                                <hr>";
                            }
                        } else {
                            trigger_error("Error al preparar la consulta en la base de datos.", E_USER_ERROR);
                            echo "<br>
                            <a href='iniciarSesion.php' class='btn btn-primary'>Regresar</a>
                            <hr>";
                        }
                    } else {
                        trigger_error("Ese usuario no está registrado, prueba con otro.", E_USER_ERROR);
                        header("Refresh:5;url=iniciarSesion.php");
                        echo "<br>
                        <a href='iniciarSesion.php' class='btn btn-primary'>Regresar</a>
                        <hr>";
                    }
            } else {
                trigger_error("No puedes dejar campos vacíos", E_USER_ERROR);
                header("Refresh:5;url=iniciarSesion.php");
                echo "<br>
                <a href='iniciarSesion.php' class='btn btn-primary'>Regresar</a>
                <hr>";
            }
        }
    ?>

    <?php if($ok) : ?>
        <a href="admin.php" class="btn btn-primary" style="text-align: center;">Ir a la administración</a>
        <hr>
                    
    <?php else : ?>

    <?php endif; ?>
    </div>
    <hr>
    </div>
</div>

<?php require 'inc/footer.inc'; ?>