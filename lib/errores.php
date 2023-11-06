<?php                  

function miGestorErrores( $errno, $errstr, $errfile, $errline ) {
    
    if( !(error_reporting() & $errno ) ) {
        return;
    }
    
    switch( $errno ) {
        case E_USER_ERROR:
            echo "
                <div class='alerta alerta_error'>
                   <div class='alerta_icon'>
                       <i class='fa-solid fa-circle-exclamation'></i>
                   </div>
                   <div class='alerta_wrapper'> Error:  $errstr
                   </div><a href='#' class='close err'><i class='fa-solid fa-x'></i></a>
               </div>
                ";
            break;
            
        case E_USER_WARNING:
            echo "
                <div class='alerta alerta_warning'>
                   <div class='alerta_icon'>
                        <i class='fa-solid fa-triangle-exclamation'></i>
                   </div>
                   <div class='alerta_wrapper'> Error:  $errstr
                   </div><a href='#' class='close err'><i class='fa-solid fa-x'></i></a>
               </div>
                ";
            break;
            
        case E_USER_NOTICE:
            echo "
                <div class='alerta alerta_info'>
                   <div class='alerta_icon'>
                   <i class='fa-solid fa-circle-info'></i>
                   </div>
                   <div class='alerta_wrapper'> $errstr
                   </div><a href='#' class='close err'><i class='fa-solid fa-x'></i></a>
               </div>
                ";
            break;
        /*default:
            echo "Error desconocido: [$errno] $errstr<br>";*/
    }
    
    
    
}
set_error_handler( 'miGestorErrores' );
