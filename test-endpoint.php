<?php
// Configuración básica de CORS
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Para peticiones OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Desactivar visualización de errores
ini_set('display_errors', 0);
error_reporting(0);

try {
    // Obtener datos JSON del cuerpo de la petición
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    
    // Registrar la petición
    $log = date('Y-m-d H:i:s') . " - " . $json . "\n";
    file_put_contents('test-endpoint.log', $log, FILE_APPEND);
    
    // Respuesta de éxito
    echo json_encode([
        'success' => true,
        'message' => '¡Endpoint de prueba funcionando!',
        'data_received' => $data,
        'server' => [
            'php_version' => phpversion(),
            'server_software' => $_SERVER['SERVER_SOFTWARE'] ?? 'N/A'
        ]
    ]);
    
} catch (Exception $e) {
    // Registrar el error
    $errorLog = date('Y-m-d H:i:s') . " - ERROR: " . $e->getMessage() . "\n";
    file_put_contents('test-endpoint-error.log', $errorLog, FILE_APPEND);
    
    // Respuesta de error
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Error en el servidor',
        'debug' => [
            'message' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine()
        ]
    ]);
}
