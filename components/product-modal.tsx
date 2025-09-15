"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface Product {
  title: string
  description: string
  image: string
}

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  category: string
  products: Product[]
}

export function ProductModal({ isOpen, onClose, category, products }: ProductModalProps) {
  const handleWhatsAppClick = (productTitle: string) => {
    const message = `Hola, me interesa conocer más sobre ${productTitle} de la categoría ${category}`
    window.open(`https://wa.me/593987654321?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">{category}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-32 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-balance">{product.title}</CardTitle>
              </CardHeader>

              <CardContent className="pt-0 space-y-3">
                <p className="text-xs text-muted-foreground text-pretty">{product.description}</p>

                <Button
                  onClick={() => handleWhatsAppClick(product.title)}
                  size="sm"
                  style={{ backgroundColor: "#0a77be" }}
                  className="w-full hover:opacity-90 text-white gap-1.5 px-2 py-1.5"
                >
                  <MessageCircle className="h-3 w-3 flex-shrink-0" />
                  <span className="text-[11px] leading-tight font-medium truncate">Contáctanos por WhatsApp</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
