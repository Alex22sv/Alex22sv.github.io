<?php 
    // Validando archivo de foto de perfil
    function ValidarFoto($usuario, $update = false) {
        if($update) {
            borrarCarpetas("imagenes/usuarios/$usuario");
            /* $dir = "imagenes/$nombre";
            $gestor = opendir($dir);
            while(false != ($archivo = readdir($gestor))){
                if($archivo != "." && $archivo != ".." && $archivo != 'Thumbs.db'){
                    unlink("$dir/$archivo");
                }
            }
            closedir($gestor);
            sleep(1); */
        }
        global $dirSubida;
        global $rutaSubida;
        global $error;

        $dirSubida = "imagenes/usuarios/$usuario/";
        $foto = $_FILES['foto'];

        $nombreFoto = $foto['name'];
        $nombreTmp = $foto['tmp_name'];
        $rutaSubida = "{$dirSubida}profile.jpg";
        $extArchivo = preg_replace('/image\//', '', $foto['type']);

        // Verifica la extensión del archivo
        if($extArchivo == 'jpeg' || $extArchivo == 'png'){
            if(!file_exists($dirSubida)) {
                mkdir($dirSubida, 0777);
            }
    
            if(move_uploaded_file($nombreTmp, $rutaSubida)){
                // echo "<img class='img-responsive' src='$rutaSubida' alt=''>";
                return true;
            } else {
                $error = "No se pudo mover el archivo.";
            }
        } else {
            $error = "Has incluido un archivo que no es una imagen.";

        }
        return $error;
    }

    // Borra las carpetas de las fotos
    function borrarCarpetas($dir){

        $gestor = opendir($dir);
        while (false != ($archivo = readdir($gestor))){
            if($archivo != "." && $archivo != '..'){
                if(!unlink("$dir/$archivo")){
                    borrarCarpetas("$dir/$archivo");
                }
            }
        }
        closedir($gestor);
        rmdir($dir);
        sleep(1);
    }
    function borrarArchivo($dir){
        if(unlink($dir)){
            return true;
        } else {
            return false;
        }
    }
    // Validando archivo de producto
    function validarfotoproducto($codigoproducto, $update = false){
        if($update) {
            borrarCarpetas("imagenes/productos/$codigoproducto/");
        }
        global $dirSubidaProducto;
        global $rutaSubidaProducto;
        global $errorProducto;

        $dirSubidaProducto = "imagenes/productos/$codigoproducto/";
        $foto = $_FILES['foto'];

        $nombreFoto = $foto['name'];
        $nombreTmp = $foto['tmp_name'];
        $rutaSubidaProducto = "{$dirSubidaProducto}producto.jpg";
        $extArchivo = preg_replace('/image\//', '', $foto['type']);

        // Verifica la extensión del archivo
        if($extArchivo == 'jpeg' || $extArchivo == 'png'){
            if(!file_exists($dirSubidaProducto)) {
                mkdir($dirSubidaProducto, 0777);
            }
    
            if(move_uploaded_file($nombreTmp, $rutaSubidaProducto)){
                // echo "<img class='img-responsive' src='$rutaSubida' alt=''>";
                return true;
            } else {
                $errorProducto = "No se pudo mover el archivo.";
            }
        } else {
            $errorProducto = "Has incluido un archivo que no es una imagen.";

        }
        return $errorProducto;

    }
    // Validando thumbnail
    function validarthumbnail($archivo, $update = false){
        if($update) {
            borrarCarpetas("imagenes/thumbnails/$archivo/");
        }
        global $dirSubidaThumbnail;
        global $rutaSubidaThumbnail;
        global $errorThumbnail;

        $dirSubidaThumbnail = "imagenes/thumbnails/$archivo/";
        $foto = $_FILES['foto'];

        $nombreFoto = $foto['name'];
        $nombreTmp = $foto['tmp_name'];
        $rutaSubidaThumbnail= "{$dirSubidaThumbnail}thumbnail.jpg";
        $extArchivo = preg_replace('/image\//', '', $foto['type']);

        // Verifica la extensión del archivo
        if($extArchivo == 'jpeg' || $extArchivo == 'png'){
            if(!file_exists($dirSubidaThumbnail)) {
                mkdir($dirSubidaThumbnail, 0777);
            }
    
            if(move_uploaded_file($nombreTmp, $rutaSubidaThumbnail)){
                // echo "<img class='img-responsive' src='$rutaSubida' alt=''>";
                return true;
            } else {
                $errorThumbnail = "No se pudo mover el archivo.";
            }
        } else {
            $errorThumbnail = "Has incluido un archivo que no es una imagen.";

        }
        return $errorThumbnail;

    }

    // Obtén la fecha del día
    function fechaDelDia(){
        $fecha = getdate();
        $diaN = date('d');
        $anio = date('Y');
        $meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
        $dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
        $dia2 = $dias[$fecha['wday']-1];
        $mes = $meses[$fecha['mon']-1];
        echo "$dia2 $diaN de $mes de $anio";
    }
?>