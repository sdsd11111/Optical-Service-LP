export function VideoSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6 px-2">
            Una Experiencia que Cambia tu Mundo
          </h2>

          {/* Contenedor del video con diseño responsivo */}
          <div className="relative w-full max-w-[500px] mx-auto">
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl shadow-2xl bg-black">
              <video 
                className="w-full h-full object-cover" 
                controls 
                autoPlay 
                muted 
                loop
                playsInline
                poster="/optical-service-video-thumbnail.jpg"
              >
                <source src="/Video.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            
            {/* Indicador de que es un video táctil (solo en móviles) */}
            <div className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
              Toca para reproducir
            </div>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mt-6 sm:mt-8 px-2">
            Descubre cómo nuestros tratamientos especializados y tecnología de vanguardia han transformado la vida de
            miles de pacientes, brindándoles una visión clara y una nueva perspectiva del mundo.
          </p>
        </div>
      </div>
    </section>
  )
}
