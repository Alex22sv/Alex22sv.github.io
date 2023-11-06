<?php
    session_start();
    if(!$_SESSION['id'] && !$_SESSION['usuario']){
        header("Location: iniciarSesion.php");
        exit;
    }
    $caduca = time()-95365;
    if(isset($_COOKIE['id'])){
        setcookie('id', $_SESSION['id'], $caduca);
        setcookie('usuario', $_SESSION['usuario'], $caduca);
        setcookie('nombre', $_SESSION['nombre'], $caduca);
        setcookie('descripcion', $_SESSION['descripcion'], $caduca);
        setcookie('imagen', $_SESSION['imagen'], $caduca);

    }
    session_unset();
    session_destroy();
    header('Refresh:5;url=index.php');
?>
<?php require 'inc/header.inc'; ?>

<div class="main">
    <div class="container">
        <div class="row">
            <div class="cold-sm-4 caja text-center col-centrar">
                <h4>Has cerrado sesión y serás redireccionado al inicio en 5 segundos. Si no funciona, presiona el botón.</h4>
                <a href="index.php" class="btn btn-primary">Regresar al inicio</a>
            </div>
        </div>
        <hr>
    </div>
</div>

<?php require 'inc/footer.inc'; ?>