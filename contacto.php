<?php
$destino = "abel.am91@gmail.com";

$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['email'];
$mensaje = $_POST['mensaje'];

$asunto = "contacto desde nuestra web";

$header = "Enviado desde la pagina de AGUSTIN MARTINEZ";
$email = "De: $nombre \n";
$email .= "Correo: $correo \n ";
$email .= "Mensaje: $mensaje";
// $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;


mail($destino, $email, $header);
echo "<script>alert('correo enviado exitosamente')</script>";
echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>"


?>