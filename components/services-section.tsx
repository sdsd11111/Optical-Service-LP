'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Glasses, Contact, Brain, Frame } from "lucide-react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useEffect, useState } from "react"

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
      features: ["Lentes Esclerales", "Lentes Blandos", "Lentes Terapéuticos", "Lentes de Cilindro Extendido"],
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

  // Estado para los carruseles
  const [currentContactIndex, setCurrentContactIndex] = useState(0);
  const [currentTherapyIndex, setCurrentTherapyIndex] = useState(0);
  const [currentFramesIndex, setCurrentFramesIndex] = useState(0);

  // Efecto para el carrusel automático
  useEffect(() => {
    const contactInterval = setInterval(() => {
      setCurrentContactIndex((prev) => (prev + 1) % 3); // 3 imágenes
    }, 3000);

    const therapyInterval = setInterval(() => {
      setCurrentTherapyIndex((prev) => (prev + 1) % 4); // 4 imágenes
    }, 3500);

    const framesInterval = setInterval(() => {
      setCurrentFramesIndex((prev) => (prev + 1) % 2); // 2 imágenes
    }, 4000);

    return () => {
      clearInterval(contactInterval);
      clearInterval(therapyInterval);
      clearInterval(framesInterval);
    };
  }, []);

  // Imágenes para cada servicio
  const contactImages = [
    "/contact-lens-service.jpg",
    "/Lentes de contacto 1.jpg",
    "/Lentes de contacto 2.jpg",
    "/Lentes de contacto 3.jpg"
  ];

  const therapyImages = [
    "/visual-therapy-service.jpg",
    "/Terapia visual 1.jpg",
    "/Terapia visual 2.jpg",
    "/Terapia visual 3.jpg",
    "/Terapia visual 4.jpg"
  ];

  const framesImages = [
    "/frames-service.jpg",
    "/Armazones 1.jpg",
    "/Armazones 2.jpg"
  ];

  // Función para obtener la imagen actual
  const getCurrentImage = (serviceTitle: string) => {
    switch(serviceTitle) {
      case 'Lentes de Contacto':
        return contactImages[currentContactIndex % contactImages.length];
      case 'Terapia Visual':
        return therapyImages[currentTherapyIndex % therapyImages.length];
      case 'Armazones':
        return framesImages[currentFramesIndex % framesImages.length];
      default:
        return serviceTitle === 'Elaboración de Lentes' ? "/lens-elaboration-service.jpg" : "/placeholder.svg";
    }
  };

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
                  <Image 
                    src={getCurrentImage(service.title)} 
                    alt={service.title} 
                    fill 
                    className="object-cover transition-opacity duration-1000"
                    style={{
                      opacity: 1,
                      transition: 'opacity 1s ease-in-out'
                    }}
                  />
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
