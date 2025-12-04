export const emailConfig = {
  host: 'mail.opticaylentes.com',  // Servidor SMTP del cPanel
  port: 465,                       // Puerto seguro para SMTP
  secure: true,                    // Usar SSL
  auth: {
    user: 'email@opticaylentes.com', // Tu correo
    pass: 'Q;fx@)k-6Aw;'             // Tu contraseña
  },
  tls: {
    // No fallar en certificados inválidos
    rejectUnauthorized: false
  },
  debug: true, // Habilita la depuración
  logger: true // Habilita el registro
};

export const emailFrom = 'email@opticaylentes.com';
// Puedes cambiar este correo si quieres que los mensajes lleguen a otra dirección
export const emailTo = 'email@opticaylentes.com';
