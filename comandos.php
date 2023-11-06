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
            <div class="col-md-10" style="color: red; border: 3px solid red;">
                <h2 class="text-center" style="text-align: center;">
                    Bienvenido a la terminal de SQL <i class="fa-solid fa-terminal"></i>
                </h2>
            </div>
        </div>
        <hr>
        <div class="row">
            <form action="" class="formulario" method="POST">
                <div class="form-group">
                    <label for="">Inserta el comando a continuación: </label>
                    <input type="text" name="comando" id="comandoinput" class="form-control">
                    <button type="submit" class="btn btn-primary">Ejecutar</button>
                    <a href="admin.php" class="pull-right">Volver a la administración</a>
                </div>
            </form>
        </div>
        <hr class="horizontal">
        <div class="row caja">
            <div class="col-md-11">
                <h4>Comandos recientes: </h4>
                <div class="comandosrecientes">
                    <table class="table table-cell">
                        <thead>
                            <th>Comando</th>
                            <th>Fecha</th>
                            <th>Acciones</th>
                        </thead>
                        <tbody>
                           
                            <?php 
                                if(isset($_POST['comando'])){
                                    $comando = $_POST['comando'];
                                    $fecha = time();
                                    $fechaFixed = date("d/m/Y", $fecha);
                                    $onclick = `copiarTexto("$comando")`;
                                    echo "<tr>
                                        <td>$comando</td>
                                        <td>$fechaFixed</td>
                                        <!-- <td><a href='#' onclick='$onclick' class='btn btn-copy'>Copiar</a></td> -->
                                    </tr>";
                                }
                                $consultaObtenerComandosRecientes = "SELECT id, comando, fecha FROM comandosrecientes WHERE idusuario = '$idStaff' ORDER BY id DESC LIMIT 3";
                                if($db->preparar($consultaObtenerComandosRecientes)){
                                    $db->ejecutar();
                                    $db->prep()->bind_result($idcomandoreciente, $comandoreciente, $fechacomando);
                                } else {
                                    trigger_error("Error al preparar la consulta obtener los comandos recientes en la base de datos.", E_USER_ERROR);
                                    exit;
                                }
                                while($db->resultado()){
                                    $fixedDate = date("d/m/Y", $fechacomando);
                                    $onclick = `copiarTexto("$comandoreciente")`;
                                    echo "<tr>
                                        <td>$comandoreciente</td>
                                        <td>$fixedDate</td>
                                        <!-- <td><a href='#' onclick='$onclick' class='btn btn-copy'>Copiar</a></td> -->
                                    </tr>";
                                }
                                $db->liberar();
                            ?>
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </div>
        <hr>
        <?php if($_POST) : ?>
            <div class="row">
                <h4>Resultado: </h4>
                <?php 
                    if(isset($_POST['comando'])) {
                        $comando = $_POST['comando'];
                        $keywords = explode(' ', $comando);
                        $firstKeyword = strtolower($keywords[0]);
                        $firstKeywordUpper = strtoupper($keywords[0]);
                        // Save the recent command to the database
                        $fecha = time();
                        $consultaGuardarComando = "INSERT INTO comandosrecientes (`id`, `comando`, `fecha`, `idusuario`) VALUES (NULL, '$comando', $fecha, '$idStaff')";
                        if($db->preparar($consultaGuardarComando)){
                            $db->ejecutar();
                            $db->liberar();
                        } else {
                            trigger_error("Error al preparar la consulta para guardar el comando reciente en la base de datos.", E_USER_ERROR);
                            exit;
                        }
                        if($firstKeyword == "select") {
                            // Execute the query
                            $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
                            $result = mysqli_query($conn, $comando);

                            // Check if the query returned any rows
                            if (mysqli_num_rows($result) > 0) {
                                trigger_error("La consulta de estilo <b>$firstKeywordUpper</b> ha sido realizada con éxito.", E_USER_NOTICE);
                                // Start a table
                                echo "<table class='table table-cell'>";

                                // Print the column names as table headers
                                $row = mysqli_fetch_assoc($result);
                                echo "<tr>";
                                foreach ($row as $key => $value) {
                                    echo "<th>$key</th>";
                                }
                                echo "</tr>";

                                // Go back to the first row of the result set
                                mysqli_data_seek($result, 0);

                                // Print the rows
                                while ($row = mysqli_fetch_assoc($result)) {
                                    echo "<tr>";
                                    foreach ($row as $value) {
                                        echo "<td>$value</td>";
                                    }
                                    echo "</tr>";
                                }

                                // End the table
                                echo "</table>";
                            } else {
                                trigger_error("No hay resultados.", E_USER_NOTICE);
                            }
                        } elseif($firstKeyword == "delete"){
                            $db->preparar($comando);
                            $db->ejecutar();
                            if($db->filasAfectadas() > 0){
                                trigger_error("La consulta de estilo <b>$firstKeywordUpper</b> ha sido realizada con éxito.", E_USER_NOTICE);
                            } else {
                                trigger_error("Error al realizar la eliminación en la base de datos.", E_USER_ERROR);
                                exit;
                            }
                            $db->liberar();
                        } else {
                            if($db->preparar($comando)){
                                $db->ejecutar();
                                trigger_error("La consulta de estilo <b>$firstKeywordUpper</b> ha sido realizada con éxito.", E_USER_NOTICE);
                                $db->cerrar();
                            } else {
                                trigger_error("Error al preparar la consulta en la base de datos.", E_USER_ERROR);
                                exit;
                            }
                        }
                        
                    }
                ?>
            </div>
        
        <?php endif; ?>
    </div>
</div>
<?php require 'inc/footer.inc'; ?>