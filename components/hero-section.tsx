import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900">
      <div className="absolute inset-0 bg-[url('/modern-optometry-clinic-interior-with-blue-lightin.jpg')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-black/50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 text-balance">
            Cuidamos tu <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">visión</span> y tu presupuesto en Loja
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
