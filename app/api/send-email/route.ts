import { NextResponse } from 'next/server';

// Esta API no funcionará en la exportación estática
// Se proporciona un mensaje de error claro
const isStaticExport = process.env.NEXT_PHASE === 'phase-production-build';

// Solo importa nodemailer si no es una exportación estática
let nodemailer: any;
let emailConfig: any;
let emailFrom: string;
let emailTo: string;

if (!isStaticExport) {
  nodemailer = require('nodemailer');
  const emailConfigModule = require('@/lib/email-config');
  emailConfig = emailConfigModule.emailConfig;
  emailFrom = emailConfigModule.emailFrom;
  emailTo = emailConfigModule.emailTo;
}

export async function POST(request: Request) {
  // Si es una exportación estática, devolver un error
  if (isStaticExport) {
    return NextResponse.json(
      { 
        error: 'El envío de correos no está disponible en la versión estática del sitio.',
        message: 'Por favor, despliega la versión completa del sitio con soporte para API routes.'
      },
      { status: 501 }
    );
  }

  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validar los datos del formulario
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, correo electrónico y mensaje son campos requeridos' },
        { status: 400 }
      );
    }

    // Crear un transportador reutilizable usando la configuración SMTP
    const transporter = nodemailer.createTransport({
      ...emailConfig,
      logger: true, // Habilita el registro para depuración
      debug: true, // Habilita la salida de depuración
    });

    // Configurar el correo electrónico
    const mailOptions = {
      from: `"${name}" <${emailFrom}>`,
      to: emailTo,
      subject: `Nuevo mensaje de contacto: ${subject || 'Sin asunto'}`,
      text: `
        Has recibido un nuevo mensaje de contacto a través del sitio web:
        
        Nombre: ${name}
        Correo: ${email}
        Teléfono: ${phone || 'No proporcionado'}
        
        Mensaje:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Correo:</strong> ${email}</p>
          ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
          <p><strong>Asunto:</strong> ${subject || 'No especificado'}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
            <h3 style="margin-top: 0;">Mensaje:</h3>
            <p style="white-space: pre-line;">${message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 0.9em; color: #666;">
            Este es un mensaje automático. Por favor, no responda directamente a este correo.
          </p>
        </div>
      `,
    };

    // Enviar el correo electrónico
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Mensaje enviado: %s', info.messageId);
    
    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Por favor, intente nuevamente más tarde.' },
      { status: 500 }
    );
  }
}
