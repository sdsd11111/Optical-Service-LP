import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="absolute inset-0 bg-[url('/modern-optometry-clinic-interior-with-blue-lightin.jpg')] bg-cover bg-center opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 text-balance">
            Tu visión perfecta es nuestra especialidad en Loja
          </h1>

          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold"
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
