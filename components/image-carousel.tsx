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
    src: '/proteccion digital.jpg',
    alt: 'Protección para pantallas digitales',
    title: 'Protección Digital',
    description: 'Lentes diseñados para proteger tus ojos de la luz azul de las pantallas.'
  },
  {
    src: '/Gafas de sol.jpg',
    alt: 'Gafas de sol de diseño',
    title: 'Gafas de Sol',
    description: 'Protección UV con el último estilo en diseño de gafas de sol.'
  },
  {
    src: '/Estilo al Aire Libre.jpg',
    alt: 'Estilo y protección para tus actividades al aire libre',
    title: 'Estilo al Aire Libre',
    description: 'Disfruta del sol con estilo y la mejor protección para tus ojos.'
  }
]

export function ImageCarousel() {
  return (
    <section className="pt-4 pb-16 bg-white">
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
                  <CarouselItem key={index} className="w-[85%] sm:w-auto sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="h-full px-1">
                      <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div className="h-40 w-full overflow-hidden rounded-t-lg">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={400}
                            height={300}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            priority={index < 2}
                          />
                        </div>
                        <div className="bg-white p-3 dark:bg-gray-900">
                          <h3 className="text-base font-semibold text-foreground line-clamp-1">{image.title}</h3>
                          <p className="text-xs text-muted-foreground line-clamp-2">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <CarouselPrevious 
                className={cn(
                  "left-2 md:-left-4 h-10 w-10 rounded-full bg-white/90 shadow-md hover:bg-white transition-colors",
                  "border-none text-primary hover:text-primary/90",
                  "hidden sm:flex" // Hide on mobile
                )}
              />
              <CarouselNext 
                className={cn(
                  "right-2 md:-right-4 h-10 w-10 rounded-full bg-white/90 shadow-md hover:bg-white transition-colors",
                  "border-none text-primary hover:text-primary/90",
                  "hidden sm:flex" // Hide on mobile
                )}
              />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
