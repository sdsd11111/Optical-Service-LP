<?php
// Archivo de prueba para verificar que PHP está funcionando
header('Content-Type: text/plain');

echo "PHP está funcionando correctamente\n\n";

// Mostrar información del servidor
echo "Versión de PHP: " . phpversion() . "\n";
echo "Sistema operativo: " . php_uname() . "\n";

// Verificar si la función mail está habilitada
if (function_exists('mail')) {
    echo "La función mail() está habilitada\n";
} else {
    echo "ADVERTENCIA: La función mail() NO está habilitada\n";
}

// Mostrar información del servidor SMTP
ini_get('SMTP') ? $smtp = ini_get('SMTP') : $smtp = 'No configurado';
ini_get('smtp_port') ? $smtp_port = ini_get('smtp_port') : $smtp_port = 'No configurado';

echo "\nConfiguración SMTP:\n";
echo "Servidor SMTP: $smtp\n";
echo "Puerto SMTP: $smtp_port\n";

// Probar la configuración de correo
echo "\nProbando configuración de correo...\n";
$test_email = 'email@opticaylentes.com';
$test_subject = 'Prueba de correo desde ' . $_SERVER['HTTP_HOST'];
$test_message = "Este es un mensaje de prueba para verificar que el envío de correos funciona correctamente.\n\n";
$test_message .= "Fecha y hora: " . date('Y-m-d H:i:s') . "\n";
$test_message .= "Servidor: " . $_SERVER['SERVER_SOFTWARE'] . "\n";

$headers = "From: $test_email\r\n";
$headers .= "Reply-To: $test_email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (@mail($test_email, $test_subject, $test_message, $headers)) {
    echo "Mensaje de prueba enviado correctamente a $test_email\n";
} else {
    echo "ERROR: No se pudo enviar el mensaje de prueba\n";
    echo "Verifica la configuración de correo en tu servidor.\n";
}

// Mostrar información de los headers
echo "\nHeaders de la solicitud:\n";
foreach (getallheaders() as $name => $value) {
    echo "$name: $value\n";
}
?>
