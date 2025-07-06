import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import About from "@/components/about"
import Services from "@/components/services"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
