"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function Header() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/593987654321?text=Hola, me interesa conocer más sobre sus servicios", "_blank")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo y nombre */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
            </div>
            <span className="text-xl font-bold text-primary">Optical Service</span>
          </div>

          {/* Centro vacío */}
          <div></div>

          <Button
            onClick={handleWhatsAppClick}
            style={{ backgroundColor: "#0a77be" }}
            className="hover:opacity-90 text-white gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Contáctanos por WhatsApp</span>
            <span className="sm:hidden">Escríbenos</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
