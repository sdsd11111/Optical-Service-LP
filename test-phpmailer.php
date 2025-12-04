<?php
// Configuración de errores
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Configuración de encabezados
header('Content-Type: text/plain; charset=utf-8');

echo "=== PRUEBA DE PHPMailer ===\n";

// Cargar PHPMailer
try {
    $phpmailerPath = __DIR__ . '/vendor/phpmailer/phpmailer/src/';
    
    echo "Buscando archivos de PHPMailer en: $phpmailerPath\n";
    
    $files = [
        'Exception.php' => file_exists($phpmailerPath . 'Exception.php'),
        'PHPMailer.php' => file_exists($phpmailerPath . 'PHPMailer.php'),
        'SMTP.php' => file_exists($phpmailerPath . 'SMTP.php')
    ];
    
    foreach ($files as $file => $exists) {
        echo "$file: " . ($exists ? 'ENCONTRADO' : 'NO ENCONTRADO') . "\n";
    }
    
    if (in_array(false, $files, true)) {
        throw new Exception("Faltan archivos de PHPMailer");
    }
    
    require $phpmailerPath . 'Exception.php';
    require $phpmailerPath . 'PHPMailer.php';
    require $phpmailerPath . 'SMTP.php';
    
    echo "\nPHPMailer cargado correctamente\n";
    
    // Crear una instancia de PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    
    // Configuración del servidor SMTP
    $mail->isSMTP();
    $mail->Host = 'mail.opticaylentes.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'email@opticaylentes.com';
    $mail->Password = 'Q;fx@)k-6Aw;';
    $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->CharSet = 'UTF-8';
    
    echo "\nConfiguración SMTP completada\n";
    
    // Configurar remitente y destinatario
    $mail->setFrom('email@opticaylentes.com', 'Prueba PHPMailer');
    $mail->addAddress('email@opticaylentes.com', 'Destinatario');
    
    // Contenido del correo
    $mail->isHTML(true);
    $mail->Subject = 'Prueba de PHPMailer - ' . date('Y-m-d H:i:s');
    $mail->Body = '<h1>¡Hola!</h1><p>Este es un correo de prueba.</p>';
    $mail->AltBody = '¡Hola! Este es un correo de prueba.';
    
    echo "\nIntentando enviar correo...\n";
    
    // Enviar correo
    $mail->send();
    
    echo "\n¡Correo enviado exitosamente!\n";
    
} catch (Exception $e) {
    echo "\nERROR: " . $e->getMessage() . "\n";
    echo "Archivo: " . $e->getFile() . "\n";
    echo "Línea: " . $e->getLine() . "\n";
    
    if (isset($mail)) {
        echo "\nDetalles del error de PHPMailer:\n";
        echo $mail->ErrorInfo . "\n";
    }
}
