"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { useState } from "react"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "María González",
      age: "45 años",
      condition: "Queratocono",
      quote:
        "Ha sido muy bonito el mundo verlo de color, porque para mí era gris. Cuando me puse los lentes, fue increíble",
      image: "/maria gonzales.jpg",
      rating: 5,
    },
    {
      name: "Carlos Mendoza",
      age: "38 años",
      condition: "Ojo seco severo",
      quote:
        "Después de años de molestias, los lentes esclerales me devolvieron la comodidad. Ahora puedo trabajar sin dolor",
      image: "/professional-man-smiling.png",
      rating: 5,
    },
    {
      name: "Ana Rodríguez",
      age: "28 años",
      condition: "Miopía alta",
      quote: "La terapia visual mejoró mi coordinación ocular. Mi rendimiento laboral aumentó significativamente",
      image: "/ana rodriguez.jpg",
      rating: 5,
    },
    {
      name: "Luis Herrera",
      age: "52 años",
      condition: "Astigmatismo irregular",
      quote:
        "Pensé que necesitaría cirugía, pero los lentes esclerales fueron la solución perfecta. Visión 20/20 sin riesgos",
      image: "/luis herrera.jpg",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Casos de Éxito</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Testimonios reales de pacientes que transformaron su visión con nosotros
            </p>
          </div>

          <div className="relative">
            <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img
                        src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-accent/20"
                      />
                      <Quote className="absolute -top-2 -right-2 h-6 w-6 text-accent bg-background rounded-full p-1" />
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-3">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>

                    <blockquote className="text-lg md:text-xl text-foreground mb-4 italic text-pretty">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>

                    <div>
                      <div className="font-semibold text-primary">{testimonials[currentTestimonial].name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].condition}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center items-center gap-4 mt-8">
              <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-accent" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
