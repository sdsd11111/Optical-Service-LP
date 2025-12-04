"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Sun, Monitor } from "lucide-react"
import { ProductModal } from "./product-modal"

export function ProductsSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedProducts, setSelectedProducts] = useState<any[]>([])

  const products = [
    {
      icon: Shield,
      title: "Lentes de contacto Escleral",
      description:
        "La solución más avanzada para córneas irregulares, queratocono y ojo seco severo. Alternativa segura a la cirugía.",
      image: "/scleral-contact-lenses.jpg",
      benefits: ["Sin cirugía", "Visión nítida", "Comodidad total"],
      modalProducts: [
        {
          title: "Lentes Esclerales para Queratocono",
          description: "Diseño especializado para córneas irregulares con queratocono avanzado",
          image: "/keratoconus-scleral-lens.jpg",
        },
        {
          title: "Lentes Esclerales para Ojo Seco",
          description: "Reservorio de lágrimas para casos severos de síndrome de ojo seco",
          image: "/dry-eye-scleral-lens.jpg",
        },
        {
          title: "Lentes Post-Quirúrgicos",
          description: "Rehabilitación visual después de trasplante de córnea",
          image: "/post-surgical-scleral-lens.jpg",
        },
        {
          title: "Lentes para Degeneración Marginal",
          description: "Corrección óptica para degeneración marginal pelúcida",
          image: "/marginal-degeneration-lens.jpg",
        },
        {
          title: "Lentes Esclerales Pediátricos",
          description: "Diseño especial para niños con córneas irregulares",
          image: "/pediatric-scleral-lens.jpg",
        },
        {
          title: "Lentes de Alto Rendimiento",
          description: "Para deportistas y actividades de alta demanda visual",
          image: "/high-performance-scleral-lens.jpg",
        },
      ],
    },
    {
      icon: Sun,
      title: "Gafas de Sol Polarizadas con UV",
      description:
        "Protección completa contra rayos UV con tecnología polarizada para máximo confort visual en exteriores.",
      image: "/polarized-uv-sunglasses.jpg",
      benefits: ["Gafas de sol Polarizadas", "Gafas con Filtro Uv", "Gafas Espejadas"],
      modalProducts: [
        {
          title: "Gafas Deportivas Polarizadas",
          description: "Diseño ergonómico para actividades deportivas al aire libre",
          image: "/sport-polarized-sunglasses.jpg",
        },
        {
          title: "Gafas de Conducción",
          description: "Lentes especializados para reducir deslumbramiento al conducir",
          image: "/driving-sunglasses.jpg",
        },
        {
          title: "Gafas de Playa y Agua",
          description: "Protección máxima contra reflejos del agua y arena",
          image: "/beach-water-sunglasses.jpg",
        },
        {
          title: "Gafas de Montaña",
          description: "Protección UV extrema para alta montaña y nieve",
          image: "/mountain-snow-sunglasses.jpg",
        },
        {
          title: "Gafas Fotocromáticas",
          description: "Se adaptan automáticamente a los cambios de luz",
          image: "/photochromic-sunglasses.jpg",
        },
        {
          title: "Gafas de Diseñador",
          description: "Estilo y protección en monturas de alta gama",
          image: "/designer-sunglasses.png",
        },
      ],
    },
    {
      icon: Monitor,
      title: "Filtros Blue Light Block",
      description:
        "Protección especializada contra la luz azul de pantallas digitales, reduciendo fatiga visual y mejorando el descanso.",
      image: "/blue-light-blocking-glasses.png",
      benefits: ["Menos fatiga", "Mejor sueño", "Ojos protegidos"],
      modalProducts: [
        {
          title: "Gafas para Oficina",
          description: "Diseño profesional para largas jornadas frente al ordenador",
          image: "/office-blue-light-glasses.jpg",
        },
        {
          title: "Gafas Gaming",
          description: "Optimizadas para gamers y sesiones prolongadas de juego",
          image: "/gafas gaming.jpg",
        },
        {
          title: "Gafas para Estudiantes",
          description: "Comodidad y protección para estudios y tareas digitales",
          image: "/gafas para estudiantes.jpg",
        },
        {
          title: "Gafas de Lectura Digital",
          description: "Magnificación y protección para lectura en dispositivos",
          image: "/gafas de lectura digital.jpg",
        },
        {
          title: "Gafas Nocturnas",
          description: "Filtro especial para uso en horas de la noche",
          image: "/gafas nocturnas.jpg",
        },
        {
          title: "Gafas Graduadas con Filtro",
          description: "Combinación de corrección visual y protección blue light",
          image: "/gafas graduadas con filtro.jpg",
        },
      ],
    },
  ]

  const handleMoreInfo = (product: any) => {
    setSelectedCategory(product.title)
    setSelectedProducts(product.modalProducts)
    setModalOpen(true)
  }

  return (
    <>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Productos Destacados</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Tecnología de vanguardia para soluciones visuales especializadas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 p-2 bg-white/90 rounded-lg">
                      <product.icon className="h-5 w-5 text-accent" />
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-balance">{product.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-pretty">{product.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.benefits.map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full bg-transparent" onClick={() => handleMoreInfo(product)}>
                      Más información
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProductModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        category={selectedCategory}
        products={selectedProducts}
      />
    </>
  )
}
