'use client'

import * as React from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

const images = [
  {
    src: '/examen de la vista completo.jpg',
    alt: 'Examen de la vista profesional',
    title: 'Examen de la Vista Completo',
    description: 'Tecnología de punta para un diagnóstico preciso de tu salud visual.'
  },
  {
    src: '/contact-lens-service.jpg',
    alt: 'Lentes de contacto especializados',
    title: 'Lentes Esclerales',
    description: 'Solución cómoda para condiciones corneales complejas.'
  },
  {
    src: '/blue-light-blocking-glasses.png',
    alt: 'Lentes con protección de luz azul',
    title: 'Protección Digital',
    description: 'Lentes diseñados para proteger tus ojos de la luz azul de las pantallas.'
  },
  {
    src: '/designer-sunglasses.png',
    alt: 'Gafas de sol de diseño',
    title: 'Gafas de Sol',
    description: 'Protección UV con el último estilo en diseño de gafas de sol.'
  },
  {
    src: '/beach-water-sunglasses.jpg',
    alt: 'Estilo y protección para tus actividades al aire libre',
    title: 'Estilo al Aire Libre',
    description: 'Disfruta del sol con estilo y la mejor protección para tus ojos.'
  }
]

export function ImageCarousel() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestro Trabajo</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Descubre la excelencia en cuidado visual a través de nuestros servicios especializados.
            </p>
          </div>
          
          <div className="relative">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-t-lg">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={600}
                            height={400}
                            className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            priority={index < 2}
                          />
                        </div>
                        <div className="bg-white p-4 dark:bg-gray-900">
                          <h3 className="text-lg font-semibold text-foreground mb-1">{image.title}</h3>
                          <p className="text-sm text-muted-foreground">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <CarouselPrevious 
                className={cn(
                  "left-2 md:-left-4 h-10 w-10 rounded-full bg-white/90 shadow-md hover:bg-white transition-colors",
                  "border-none text-primary hover:text-primary/90"
                )}
              />
              <CarouselNext 
                className={cn(
                  "right-2 md:-right-4 h-10 w-10 rounded-full bg-white/90 shadow-md hover:bg-white transition-colors",
                  "border-none text-primary hover:text-primary/90"
                )}
              />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
