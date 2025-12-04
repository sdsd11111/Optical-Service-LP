<?php
// Configuración de errores para depuración (desactivar en producción)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Headers para CORS y JSON
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Manejar preflight request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Solo permitir método POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// Importar PHPMailer
require_once 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Función para limpiar datos de entrada
function limpiarDatos($data) {
    if (is_array($data)) {
        return array_map('limpiarDatos', $data);
    }
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

// Función para validar email
function validarEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Función para registrar en el log
function registrarLog($mensaje, $tipo = 'INFO') {
    $logFile = __DIR__ . '/contacto.log';
    $fecha = date('Y-m-d H:i:s');
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'IP_DESCONOCIDA';
    $logMessage = "[$fecha] [$tipo] [$ip] $mensage" . PHP_EOL;
    file_put_contents($logFile, $logMessage, FILE_APPEND | LOCK_EX);
}

try {
    // Obtener datos del formulario
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    
    // Si no hay datos JSON, intentar con $_POST
    if (json_last_error() !== JSON_ERROR_NONE || $data === null) {
        $data = $_POST;
    }
    
    // Validar que existan los campos requeridos
    $camposRequeridos = ['name', 'email', 'message'];
    $camposFaltantes = [];
    
    foreach ($camposRequeridos as $campo) {
        if (empty($data[$campo])) {
            $camposFaltantes[] = $campo;
        }
    }
    
    if (!empty($camposFaltantes)) {
        throw new Exception('Faltan campos requeridos: ' . implode(', ', $camposFaltantes));
    }
    
    // Limpiar y validar datos
    $datosLimpios = [];
    $datosLimpios['nombre'] = limpiarDatos($data['name']);
    $datosLimpios['email'] = limpiarDatos($data['email']);
    $datosLimpios['telefono'] = isset($data['phone']) ? limpiarDatos($data['phone']) : '';
    $datosLimpios['asunto'] = isset($data['subject']) ? limpiarDatos($data['subject']) : 'Consulta desde el sitio web';
    $datosLimpios['mensaje'] = limpiarDatos($data['message']);
    
    // Validar email
    if (!validarEmail($datosLimpios['email'])) {
        throw new Exception('El email proporcionado no es válido');
    }
    
    // Validar longitud de campos
    if (strlen($datosLimpios['nombre']) < 2 || strlen($datosLimpios['nombre']) > 100) {
        throw new Exception('El nombre debe tener entre 2 y 100 caracteres');
    }
    
    if (strlen($datosLimpios['mensaje']) < 10 || strlen($datosLimpios['mensaje']) > 1000) {
        throw new Exception('El mensaje debe tener entre 10 y 1000 caracteres');
    }
    
    // Crear instancia de PHPMailer
    $mail = new PHPMailer(true);
    
    // Configuración del servidor SMTP
    $mail->isSMTP();
    $mail->Host = 'mail.opticaylentes.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'email@opticaylentes.com';
    $mail->Password = 'Q;fx@)k-6Aw;';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;
    $mail->CharSet = 'UTF-8';
    
    // Configuración del remitente y destinatario
    $mail->setFrom('email@opticaylentes.com', 'Sitio Web Óptica y Lentes');
    $mail->addAddress('email@opticaylentes.com', 'Óptica y Lentes');
    $mail->addReplyTo($datosLimpios['email'], $datosLimpios['nombre']);
    
    // Contenido del email
    $mail->isHTML(true);
    $mail->Subject = 'Consulta desde el sitio web: ' . $datosLimpios['asunto'];
    
    // Crear cuerpo del mensaje HTML
    $cuerpoHTML = "
    <html>
    <head>
        <meta charset='UTF-8'>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
            .content { padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>Nueva consulta desde el sitio web</h2>
                <p>Recibida el " . date('d/m/Y') . " a las " . date('H:i:s') . "</p>
            </div>
            
            <div class='content'>
                <div class='field'>
                    <div class='label'>Nombre:</div>
                    <div class='value'>" . htmlspecialchars($datosLimpios['nombre']) . "</div>
                </div>
                
                <div class='field'>
                    <div class='label'>Email:</div>
                    <div class='value'>" . htmlspecialchars($datosLimpios['email']) . "</div>
                </div>";
    
    if (!empty($datosLimpios['telefono'])) {
        $cuerpoHTML .= "
                <div class='field'>
                    <div class='label'>Teléfono:</div>
                    <div class='value'>" . htmlspecialchars($datosLimpios['telefono']) . "</div>
                </div>";
    }
    
    $cuerpoHTML .= "
                <div class='field'>
                    <div class='label'>Asunto:</div>
                    <div class='value'>" . htmlspecialchars($datosLimpios['asunto']) . "</div>
                </div>
                
                <div class='field'>
                    <div class='label'>Mensaje:</div>
                    <div class='value'>" . nl2br(htmlspecialchars($datosLimpios['mensaje'])) . "</div>
                </div>
            </div>
            
            <div class='footer'>
                <p>Este mensaje fue enviado desde el formulario de contacto de opticaylentes.com</p>
            </div>
        </div>
    </body>
    </html>";
    
    // Versión en texto plano
    $cuerpoTexto = "
Nueva consulta desde el sitio web
=================================

Nombre: {$datosLimpios['nombre']}
Email: {$datosLimpios['email']}
" . (!empty($datosLimpios['telefono']) ? "Teléfono: {$datosLimpios['telefono']}\n" : "") . "
Asunto: {$datosLimpios['asunto']}

Mensaje:
{$datosLimpios['mensaje']}

---
Enviado desde opticaylentes.com el " . date('d/m/Y H:i:s') . "
    ";
    
    $mail->Body = $cuerpoHTML;
    $mail->AltBody = $cuerpoTexto;
    
    // Enviar email
    $mail->send();
    
    // Registrar en log
    registrarLog("Consulta enviada de: {$datosLimpios['email']} ({$datosLimpios['nombre']})");
    
    // Respuesta exitosa
    echo json_encode([
        'success' => true,
        'message' => 'Tu mensaje ha sido enviado correctamente. Te responderemos pronto.'
    ]);
    
} catch (Exception $e) {
    // Registrar error en log
    $errorMsg = "Error al procesar el formulario: " . $e->getMessage();
    registrarLog($errorMsg, 'ERROR');
    
    // Respuesta de error
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.',
        'error' => $e->getMessage() // Solo para depuración, considerar remover en producción
    ]);
}
error_log("POST: " . print_r($_POST, true));
error_log("GET: " . print_r($_GET, true));
error_log("php://input: " . file_get_contents('php://input'));

// Configuración de encabezados primero
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Función para enviar respuesta JSON
function sendJsonResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

// Manejar errores fatales
register_shutdown_function(function() {
    $error = error_get_last();
    if ($error !== null && in_array($error['type'], [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR])) {
        error_log("Error fatal: " . print_r($error, true));
        sendJsonResponse(['success' => false, 'error' => 'Error interno del servidor'], 500);
    }
});

// Configuración de zona horaria
date_default_timezone_set('America/Lima');

// Configuración de correo
$to = 'email@opticaylentes.com';
$subject = 'Nuevo mensaje del sitio web - ' . date('Y-m-d H:i:s');

// Archivo de log
$logFile = __DIR__ . '/contacto.log';
$logMessage = "[" . date('Y-m-d H:i:s') . "] Intento de envío de correo\n";

// Obtener los datos del formulario
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Verificar si hubo un error al decodificar el JSON
if (json_last_error() !== JSON_ERROR_NONE) {
    $errorMsg = "Error al decodificar JSON: " . json_last_error_msg() . "\nInput: " . $input;
    error_log($errorMsg);
    sendJsonResponse(['success' => false, 'error' => 'Formato de datos inválido', 'debug' => $errorMsg], 400);
}

$logMessage = "Datos recibidos: " . print_r($data, true) . "\n";
error_log($logMessage);

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$phone = $data['phone'] ?? '';
$formSubject = $data['subject'] ?? 'Sin asunto';
$message = $data['message'] ?? '';

// Validar campos requeridos
if (empty($name) || empty($email) || empty($message)) {
    sendJsonResponse(['success' => false, 'error' => 'Por favor complete todos los campos requeridos'], 400);
}

// Validar email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendJsonResponse(['success' => false, 'error' => 'Por favor ingrese un correo electrónico válido'], 400);
}

// Construir el mensaje
$email_message = "
<html>
<head>
    <title>Nuevo mensaje de contacto</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f4f4f4; padding: 10px; border-radius: 5px; }
        .message { margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>Nuevo mensaje de contacto</h2>
        </div>
        <p><strong>Nombre:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Teléfono:</strong> " . ($phone ?: 'No proporcionado') . "</p>
        <p><strong>Asunto:</strong> $formSubject</p>
        <div class='message'>
            <h3>Mensaje:</h3>
            <p>" . nl2br(htmlspecialchars($message)) . "</p>
        </div>
    </div>
</body>
</html>
";

// Cargar PHPMailer manualmente
try {
    $phpmailerPath = __DIR__ . '/vendor/phpmailer/phpmailer/src/';
    
    if (!file_exists($phpmailerPath . 'Exception.php')) {
        throw new Exception("No se encontró Exception.php en: " . $phpmailerPath);
    }
    if (!file_exists($phpmailerPath . 'PHPMailer.php')) {
        throw new Exception("No se encontró PHPMailer.php en: " . $phpmailerPath);
    }
    if (!file_exists($phpmailerPath . 'SMTP.php')) {
        throw new Exception("No se encontró SMTP.php en: " . $phpmailerPath);
    }
    
    require $phpmailerPath . 'Exception.php';
    require $phpmailerPath . 'PHPMailer.php';
    require $phpmailerPath . 'SMTP.php';
    
} catch (Exception $e) {
    error_log("Error al cargar PHPMailer: " . $e->getMessage());
    sendJsonResponse([
        'success' => false, 
        'error' => 'Error de configuración del servidor',
        'debug' => $e->getMessage()
    ], 500);
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    // Configuración del servidor
    $mail->isSMTP();
    $mail->Host       = 'mail.opticaylentes.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'email@opticaylentes.com';
    $mail->Password   = 'Q;fx@)k-6Aw;';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    $mail->CharSet    = 'UTF-8';

    // Remitente y destinatario
    $mail->setFrom('email@opticaylentes.com', 'Optica y Lentes');
    $mail->addAddress('email@opticaylentes.com', 'Optica y Lentes');
    $mail->addReplyTo($email, $name);

    // Contenido
    $mail->isHTML(true);
    $mail->Subject = "$subject: $formSubject";
    $mail->Body    = $email_message;
    $mail->AltBody = strip_tags($email_message);

    // Enviar correo
    $mail->send();
    
    $logMessage .= "Correo enviado exitosamente a $to\n";
    file_put_contents($logFile, $logMessage, FILE_APPEND);
    
    sendJsonResponse([
        'success' => true,
        'message' => 'Mensaje enviado correctamente',
        'debug' => 'Correo enviado a ' . $to
    ]);
    
} catch (Exception $e) {
    $errorMsg = "Error al enviar correo: " . $e->getMessage() . "\n";
    $logMessage .= $errorMsg;
    file_put_contents($logFile, $logMessage, FILE_APPEND);
    
    sendJsonResponse([
        'success' => false,
        'error' => 'Error al enviar el mensaje. Por favor, intente más tarde.'
    ], 500);
}
