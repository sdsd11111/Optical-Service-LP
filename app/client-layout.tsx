'use client';

import { ReactNode } from 'react';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Libre_Baskerville } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

// Configurar la fuente Libre Baskerville
const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre-baskerville',
});

export default function ClientLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable} ${libreBaskerville.variable}`}>
      <head>
        <Script id="form-handler" strategy="afterInteractive">
          {`
            // Función para manejar el envío del formulario
            function handleFormSubmit(event) {
              event.preventDefault();
              const form = event.target;
              const formData = new FormData(form);
              
              fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                  'Accept': 'application/json'
                }
              })
              .then(response => {
                if (response.ok) {
                  alert('¡Mensaje enviado con éxito!');
                  form.reset();
                } else {
                  throw new Error('Error al enviar el mensaje');
                }
              })
              .catch(error => {
                console.error('Error:', error);
                alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
              });
            }

            // Agregar manejador al formulario cuando el DOM esté listo
            document.addEventListener('DOMContentLoaded', function() {
              const form = document.querySelector('form[action*="contacto.php"]');
              if (form) {
                form.addEventListener('submit', handleFormSubmit);
              }
            });
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
