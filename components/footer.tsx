export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Optical Service</h3>
              <p className="text-primary-foreground/80 text-sm text-pretty">
                12 años transformando vidas a través de soluciones visuales especializadas. Especialistas en lentes
                esclerales y terapia visual en Loja, Ecuador.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Lentes de Contacto Esclerales</li>
                <li>Terapia Visual</li>
                <li>Elaboración de Lentes</li>
                <li>Filtros Blue Light Block</li>
                <li>Armazones Premium</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Centro de Loja, Ecuador</li>
                <li>Llámanos a este número: 0983428426</li>
                <li>WhatsApp: +593 98 765-4321</li>
                <li>info@opticalservice.ec</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6 text-center">
            <p className="text-sm text-primary-foreground/60">
              Diseñado por @cesarreyesjaramillo.com 2025 Optical Service. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
