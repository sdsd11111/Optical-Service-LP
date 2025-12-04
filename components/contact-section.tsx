"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, MessageCircle, Clock, Mail, Instagram } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validación básica
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Por favor complete todos los campos requeridos");
      }

      // Validación de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Por favor ingrese un correo electrónico válido");
      }

      // Enviar el formulario a la API Route de Next.js
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar el mensaje');
      }

      // Limpiar el formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Mostrar mensaje de éxito
      toast({
        title: "¡Mensaje enviado!",
        description: "Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.",
        variant: "default"
      });

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : 'Ocurrió un error al enviar el mensaje',
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contacto</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Agenda tu consulta especializada y descubre la solución perfecta para tu visión
            </p>
          </div>
          <div className="flex flex-col space-y-12">
            {/* Top Row - Contact Info and Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-primary">Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">Horarios</div>
                      <div className="text-muted-foreground">
                        Lun - Vie: 8:00 AM - 6:00 PM
                        <br />
                        Sáb: 8:00 AM - 2:00 PM
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-primary mb-4">Síguenos en Redes Sociales</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 hover:bg-green-50 bg-transparent"
                        asChild
                      >
                        <a href="https://wa.me/593992989719" target="_blank" rel="noopener noreferrer">
                          <MessageSquare className="h-4 w-4 text-green-600" />
                          <span className="hidden sm:inline">WhatsApp</span>
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 hover:bg-pink-50 bg-transparent"
                        asChild
                      >
                        <a href="https://www.instagram.com/service_optical/" target="_blank" rel="noopener noreferrer">
                          <Instagram className="h-4 w-4 text-pink-600" />
                          <span className="hidden sm:inline">Instagram</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Agenda tu Consulta</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="text-sm font-medium mb-2 block">Nombre <span className="text-red-500">*</span></label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Tu nombre completo"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="text-sm font-medium mb-2 block">Teléfono</label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Tu número de teléfono"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="text-sm font-medium mb-2 block">Email <span className="text-red-500">*</span></label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="text-sm font-medium mb-2 block">Asunto</label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full p-2 border border-input rounded-md bg-background"
                        >
                          <option value="">Selecciona un servicio</option>
                          <option>Lentes de Contacto Esclerales</option>
                          <option>Terapia Visual</option>
                          <option>Elaboración de Lentes</option>
                          <option>Armazones</option>
                          <option>Consulta General</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="text-sm font-medium mb-2 block">Mensaje <span className="text-red-500">*</span></label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Cuéntanos sobre tu problema visual o consulta..."
                          required
                          rows={4}
                        />
                      </div>

                      <div>
                        <Button
                          type="submit"
                          className="w-full bg-primary hover:bg-primary/90 text-white"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Enviando...
                            </>
                          ) : 'Enviar Mensaje'}
                        </Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Mapa */}
            <div className="w-full">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-primary">Nuestra Ubicación</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg overflow-hidden h-[400px] w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.7454245997235!2d-79.2003306!3d-3.9950798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTknNDIuNCJTIDc5wrAxMicwMS4yIlc!5e0!3m2!1ses-419!2sec!4v1694939223126!5m2!1ses-419!2sec"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
