import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ImageCarousel } from "@/components/image-carousel"
import { VideoSection } from "@/components/video-section"
import { ServicesSection } from "@/components/services-section"
import { ProductsSection } from "@/components/products-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <HeroSection />
        <AboutSection />
        <ImageCarousel />
        <VideoSection />
        <ServicesSection />
        <ProductsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
