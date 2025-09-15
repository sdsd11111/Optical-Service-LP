import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Eye, Heart, Handshake, CreditCard } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { useEffect, useState } from "react"

export function AboutSection() {
  const stats = [
    {
      icon: Award,
      number: "12",
      label: "Años de experiencia",
      description: "Brindando soluciones visuales especializadas",
    },
    {
      icon: Users,
      number: "3000+",
      label: "Casos de éxito",
      description: "Pacientes satisfechos con resultados excepcionales",
    },
    {
      icon: Eye,
      number: "1°",
      label: "En lentes esclerales",
      description: "Especialistas certificados en Loja",
    },
    {
      icon: Heart,
      number: "Tratamientos",
      label: "Lentes de contacto especializados para Queratocono",
      description: "Una solución que se hace antes de un transplante de córnea, a través de lentes esclerales.",
    },
  ]

  const partners = [
    {
      name: 'Fundación SER',
      logo: '/fundacion ser.jpg',
      alt: 'Logo Fundación SER'
    },
    {
      name: 'Coopmego',
      logo: '/coopmego.png',
      alt: 'Logo Coopmego'
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Quiénes Somos</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Somos especialistas en <strong>lentes de contacto esclerales</strong>, una alternativa innovadora a la
              cirugía para córneas delicadas, y en <strong>terapia visual</strong> personalizada.
            </p>
          </div>

          {/* Desktop Grid - Hidden on mobile */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={`desktop-${index}`} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold text-foreground mb-2">{stat.label}</div>
                  <p className="text-sm text-muted-foreground text-pretty">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Grid - Only visible on mobile */}
          <div className="md:hidden space-y-6">
            {/* First two stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.slice(0, 2).map((stat, index) => (
                <Card key={`mobile-${index}`} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-2 mx-auto">
                      <stat.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="font-semibold text-foreground text-sm mb-1">{stat.label}</div>
                    <p className="text-xs text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Convenios y Facilidades de Pago Card - Mobile */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-primary/10 rounded-full">
                    <Handshake className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Convenios y Facilidades de Pago</h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  Trabajamos con convenios empresariales y ofrecemos facilidades de pago. Colaboramos con la Fundación SER y Coopmego para tu bienestar visual.
                </p>
                
                <div className="relative mx-auto max-w-xs">
                  <Carousel
                    opts={{
                      align: 'center',
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {partners.map((partner, index) => (
                        <CarouselItem key={index} className="flex justify-center">
                          <div className="relative w-full h-16">
                            <Image
                              src={partner.logo}
                              alt={partner.alt}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 200px, 250px"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
                
                <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                  <CreditCard className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>Aceptamos múltiples medios de pago</span>
                </div>
              </CardContent>
            </Card>

            {/* Remaining stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.slice(2).map((stat, index) => (
                <Card key={`mobile-${index+2}`} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-2 mx-auto">
                      <stat.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="font-semibold text-foreground text-sm mb-1">{stat.label}</div>
                    <p className="text-xs text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Convenios y Facilidades de Pago Card - Desktop */}
          <div className="hidden md:block col-span-full lg:col-span-2">
            <Card className="hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-primary/10 rounded-full">
                    <Handshake className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Convenios y Facilidades de Pago</h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  Trabajamos con convenios empresariales y ofrecemos facilidades de pago. Colaboramos con la Fundación SER y Coopmego para tu bienestar visual.
                </p>
                
                <div className="relative mx-auto max-w-xs">
                  <Carousel
                    opts={{
                      align: 'center',
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {partners.map((partner, index) => (
                        <CarouselItem key={index} className="flex justify-center">
                          <div className="relative w-full h-16">
                            <Image
                              src={partner.logo}
                              alt={partner.alt}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 200px, 250px"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
                
                <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                  <CreditCard className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>Aceptamos múltiples medios de pago</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Mobile Carousel - Only visible on mobile */}
          <div className="md:hidden w-full max-w-sm mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-1">
                {stats.map((stat, index) => (
                  <CarouselItem key={`mobile-${index}`} className="pl-4 basis-10/12">
                    <Card className="text-center hover:shadow-lg transition-shadow h-full">
                      <CardContent className="p-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                          <stat.icon className="h-8 w-8 text-accent" />
                        </div>
                        <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                        <div className="font-semibold text-foreground mb-2">{stat.label}</div>
                        <p className="text-sm text-muted-foreground text-pretty">{stat.description}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-4">
                <CarouselPrevious className="relative left-0 top-0 -translate-y-0" />
                <CarouselNext className="relative right-0 top-0 -translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
