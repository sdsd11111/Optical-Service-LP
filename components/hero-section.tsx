"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"

const heroImages = [
  '/hero 1.jpg',
  '/hero 2.jpg'
]

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000) // Cambiar cada 5 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Fondo blanco */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Imágenes del carrusel */}
      {heroImages.map((image, index) => (
        <div 
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url('${image}')`,
            transition: 'opacity 1s ease-in-out'
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-balance">
            <span className="text-white drop-shadow-lg">Cuidamos tu salud</span> <span style={{ color: '#00a8ff', textShadow: '0 0 15px rgba(0, 168, 255, 0.9)' }} className="font-extrabold">Visual</span>
          </h1>

          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
            asChild
          >
            <a href="https://wa.me/593987654321" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Contactar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
