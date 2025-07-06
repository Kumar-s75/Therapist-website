"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/cloud1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay"></div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
              Clinical Psychology Services in Los Angeles & California
            </Badge>

           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
  Professional Therapy for Mental Wellness and Growth
</h1>


            <h2 className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto opacity-90 text-white">
              Begin your journey today towards emotional healing, stronger relationships, and lasting inner peace.
            </h2>

            <div className="mt-8">
              <p className="text-lg mb-6 opacity-90">I want to work with you for...</p>
             <p className="text-lg mb-8 opacity-75" style={{ color: '#B5DADE' }}>
  🎯 Greater Purpose in Your Life Direction
</p>

            </div>

            <div className="flex items-center justify-center space-x-4 text-sm mb-8">
            
              <span className="text-white/80"> ⭐</span>
              <span className="text-white/80 font-bold">Top Rated</span>
              <span className="text-white/80">•</span>
              <span className="text-white/80 underline font-bold">8+ Years Experience</span>
              <span className="text-white/80">•</span>
              <span className="text-white/80 underline font-bold">Testimonials</span>
              <span className="text-white/80">•</span>
              <span className="text-white/80 underline font-bold">Media Mentions</span>
            </div>

           <Button
  onClick={scrollToContact}
  size="lg"
  className=" px-8 py-4 text-lg font-semibold rounded-md shadow-[0_0_10px_#E2EEFE]"
  style={{ color: '#e6f0fe' }}
>
  <Sparkles className="w-5 h-5 mr-2" />
  <span  style={{ color: '#E2EEFE' }} >Start Healing Today</span>
</Button>

          </div>
        </div>
      </div>
    </section>
  )
}
