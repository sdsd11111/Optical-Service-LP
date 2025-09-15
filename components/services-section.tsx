import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Glasses, Contact, Brain, Frame } from "lucide-react"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      icon: Glasses,
      title: "Elaboración de Lentes",
      description:
        "Lentes personalizados con tecnología avanzada, incluyendo filtros blue light block para protección digital.",
      features: ["Filtros Blue Light Block", "Lentes progresivos", "Antirreflejantes", "Fotocromáticos"],
      highlight: false,
      image: "/lens-elaboration-service.jpg",
    },
    {
      icon: Contact,
      title: "Lentes de Contacto",
      description:
        "Especialistas en lentes esclerales, la alternativa más segura a la cirugía para córneas irregulares.",
      features: ["Lentes Esclerales", "Lentes Blandos", "Lentes Rígidos", "Ortoqueratología"],
      highlight: true,
      image: "/contact-lens-service.jpg",
    },
    {
      icon: Brain,
      title: "Terapia Visual",
      description: "Ejercicios especializados para mejorar habilidades visuales y problemas de procesamiento visual.",
      features: ["Ejercicios oculares", "Coordinación binocular", "Enfoque visual", "Seguimiento ocular"],
      highlight: false,
      image: "/visual-therapy-service.jpg",
    },
    {
      icon: Frame,
      title: "Armazones",
      description: "Amplia selección de monturas de diseño y funcionales para todos los estilos y necesidades.",
      features: ["Diseño exclusivo", "Materiales premium", "Ajuste personalizado", "Garantía extendida"],
      highlight: false,
      image: "/frames-service.jpg",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Soluciones integrales para tu salud visual con tecnología de vanguardia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  service.highlight ? "ring-2 ring-accent/20 bg-accent/5" : ""
                }`}
              >
                {service.highlight && (
                  <Badge className="absolute -top-3 left-6 bg-accent text-accent-foreground">Servicio Principal</Badge>
                )}

                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>

                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-lg ${
                        service.highlight ? "bg-accent text-accent-foreground" : "bg-primary/10 text-primary"
                      }`}
                    >
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">{service.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
