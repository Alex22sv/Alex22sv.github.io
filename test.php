<?php 
    $contra = "AlexSniper1";
    $contra2 = "prueba1234";
    require 'lib/PasswordHash.php';
    $hasher = new PasswordHash(8, FALSE);
    // Encriptando contraseña
    $hash = $hasher->HashPassword($contra);
    echo $hash;
    echo "<br>";
    // Comprobando contraseña
    if($hasher->CheckPassword($contra2, $hash)){
        echo "Clave correcta<br>";
    } else {    
        echo "Clave incorrecta<br>";
    }
/*     echo "<br>Fecha de este momento: " . time() . "<br>";


    $unique = uniqid();
    echo "<br>Id único: $unique<br>"; */
?>