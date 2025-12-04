"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

export function Header() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/593992989719?text=Hola, me interesa conocer más sobre sus servicios", "_blank")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border font-libre-baskerville">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo y nombre */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 relative">
              <Image 
                src="/logo.jpg" 
                alt="Optical Service Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-[#0249b3] font-libre-baskerville">OPTICAL SERVICE</span>
          </div>

          {/* Centro vacío */}
          <div></div>

          <Button
            onClick={handleWhatsAppClick}
            style={{ backgroundColor: "#0a77be" }}
            className="hover:opacity-90 text-white gap-2 font-libre-baskerville"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Escribenos</span>
            <span className="sm:hidden">Escribenos</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
