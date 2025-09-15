export function VideoSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Una Experiencia que Cambia tu Mundo</h2>

          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl mb-6">
            <video className="w-full h-full object-cover" controls poster="/optical-service-video-thumbnail.jpg">
              <source src="/placeholder-video.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Descubre cómo nuestros tratamientos especializados y tecnología de vanguardia han transformado la vida de
            miles de pacientes, brindándoles una visión clara y una nueva perspectiva del mundo.
          </p>
        </div>
      </div>
    </section>
  )
}
