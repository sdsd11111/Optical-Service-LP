import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, MessageCircle, Clock, Mail, Facebook, Instagram } from "lucide-react"

export function ContactSection() {
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
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-primary">Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold">Ubicación</div>
                        <div className="text-muted-foreground">Centro de Loja, Ecuador</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                        <Phone className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold">Teléfono</div>
                        <div className="text-muted-foreground">+593 7 123-4567</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                        <MessageCircle className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold">WhatsApp</div>
                        <div className="text-muted-foreground">+593 98 765-4321</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                        <Mail className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-muted-foreground">info@opticalservice.ec</div>
                      </div>
                    </div>

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
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-primary mb-4">Síguenos en Redes Sociales</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 hover:bg-blue-50 bg-transparent"
                        asChild
                      >
                        <a href="https://facebook.com/opticalservice" target="_blank" rel="noopener noreferrer">
                          <Facebook className="h-4 w-4 text-blue-600" />
                          <span className="hidden sm:inline">Facebook</span>
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 hover:bg-pink-50 bg-transparent"
                        asChild
                      >
                        <a href="https://instagram.com/opticalservice" target="_blank" rel="noopener noreferrer">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nombre</label>
                    <Input placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Teléfono</label>
                    <Input placeholder="Tu número de teléfono" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="tu@email.com" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Servicio de interés</label>
                  <select className="w-full p-2 border border-input rounded-md bg-background">
                    <option>Lentes de Contacto Esclerales</option>
                    <option>Terapia Visual</option>
                    <option>Elaboración de Lentes</option>
                    <option>Armazones</option>
                    <option>Consulta General</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Mensaje</label>
                  <Textarea placeholder="Cuéntanos sobre tu problema visual o consulta..." rows={4} />
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90">Enviar Consulta</Button>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">O contáctanos directamente:</p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href="https://wa.me/593987654321" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp: +593 98 765-4321
                    </a>
                  </Button>
                </div>
              </CardContent>
              </Card>
            </div>

            {/* Map Section - Full Width Below */}
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
  )
}
