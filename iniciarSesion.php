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
    <div class="container">
        <form action="login.php" enctype="multipart/form-data" method="POST" role="form" class="formulario">
            <legend>Iniciar sesión</legend>
            <div class="form-group">
                <input name="usuario" type="text" class="form-control" id="usuarioInput" placeholder="Usuario">
            </div>
            <div class="form-group">
                <input name="contrasena" type="password" class="form-control" id="contrasenaInput" placeholder="Contraseña">
            </div>
            <button type="submit" class="btn btn-primary">Iniciar sesión</button> &nbsp;&nbsp;
            <!-- <a href="registrar.php" class="pull-right">Registrarse</a> -->
            <label for="recordarBtn" class="checkbox-inline">
                <input name="recordar" type="checkbox" value="activo" id="recordarBtn"> Mantener sesión iniciada.
            </label>
        </form>
        <hr>
    </div>
</div>

<?php require 'inc/footer.inc'; ?>