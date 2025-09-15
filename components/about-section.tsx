import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Eye, Heart } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

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
      number: "100%",
      label: "Compromiso",
      description: "Dedicados a tu bienestar visual",
    },
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
