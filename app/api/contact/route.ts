import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        // Validar campos requeridos
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Faltan campos requeridos' },
                { status: 400 }
            );
        }

        // Configurar el transportador de correo
        // NOTA: Estas credenciales deben estar en variables de entorno
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true', // true para 465, false para otros puertos
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Configurar el correo
        const mailOptions = {
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: process.env.SMTP_TO || process.env.SMTP_USER, // A quién le llega el correo (el dueño del negocio)
            subject: `Nuevo mensaje de contacto: ${subject || 'Sin asunto'}`,
            text: `
        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone || 'No especificado'}
        Asunto: ${subject || 'No especificado'}
        
        Mensaje:
        ${message}
      `,
            html: `
        <h3>Nuevo mensaje de contacto desde el sitio web</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No especificado'}</p>
        <p><strong>Asunto:</strong> ${subject || 'No especificado'}</p>
        <br/>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        // Enviar el correo
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Correo enviado exitosamente' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error enviando correo:', error);
        return NextResponse.json(
            { error: 'Error al enviar el correo' },
            { status: 500 }
        );
    }
}
