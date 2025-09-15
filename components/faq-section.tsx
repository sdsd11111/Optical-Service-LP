import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "¿Dónde encontrar ayuda para mi visión en Loja?",
      answer:
        "En Optical Service somos especialistas en problemas visuales complejos. Con 12 años de experiencia y más de 3000 casos de éxito, ofrecemos soluciones personalizadas incluyendo lentes esclerales y terapia visual. Estamos ubicados en el centro de Loja.",
    },
    {
      question: "¿Dónde comprar lentes en Loja?",
      answer:
        "Optical Service es tu mejor opción para lentes especializados en Loja. Ofrecemos desde lentes convencionales hasta lentes esclerales para casos complejos, todos con tecnología de vanguardia y ajuste personalizado.",
    },
    {
      question: "¿Qué son los lentes de contacto esclerales?",
      answer:
        "Los lentes esclerales son lentes de contacto grandes que se apoyan en la esclera (parte blanca del ojo), creando una cámara de lágrimas que corrige irregularidades corneales. Son ideales para queratocono, ojo seco severo y córneas irregulares, ofreciendo una alternativa segura a la cirugía.",
    },
    {
      question: "¿La terapia visual realmente funciona?",
      answer:
        "Sí, la terapia visual es un tratamiento científicamente respaldado que mejora habilidades visuales como enfoque, seguimiento ocular y coordinación binocular. Es especialmente efectiva en problemas de aprendizaje relacionados con la visión y fatiga visual.",
    },
    {
      question: "¿Cuánto tiempo toma adaptarse a los lentes esclerales?",
      answer:
        "La mayoría de pacientes se adaptan en 1-2 semanas. Nuestro proceso incluye múltiples citas de seguimiento para asegurar el ajuste perfecto y comodidad óptima. Cada caso es único y proporcionamos apoyo personalizado durante todo el proceso.",
    },
    {
      question: "¿Los filtros blue light block realmente protegen?",
      answer:
        "Sí, nuestros filtros blue light block reducen significativamente la exposición a luz azul dañina de pantallas digitales, disminuyendo la fatiga visual, mejorando la calidad del sueño y protegiendo la salud ocular a largo plazo.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Preguntas Frecuentes</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Resolvemos las dudas más comunes sobre nuestros servicios especializados
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground text-balance">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground text-pretty">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
