import { MapPin, Phone, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-teal-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand & Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Dr. Serena Blake, PsyD</h3>
              <p className="text-white/80 leading-relaxed text-bold">
                Licensed Clinical Psychologist 
              </p>
              <div className="flex items-center text-sm text-white/70">
                <Heart className="w-4 h-4 mr-1 text-teal-primary" />
                <span>Licensed in California • 8+ Years Experience</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#b5dbdf]">Contact Information</h4>

              <div className="space-y-3 text-white/80">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-1 text-[#b5dbdf]" />
                  <div>
                    <p className="text-[#b5dbdf]">1287 Maplewood Drive</p>
                    <p className="text-[#b5dbdf]">Los Angeles, CA 90026</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#b5dbdf]" />
                  <p className="text-[#b5dbdf]">(323) 555-0192</p>
                </div>
                <div className="flex items-center space-x-3 ">
                  <Mail className="w-4 h-4 text-teal-primary" />
                  <p className="text-[#b5dbdf]">serena@blakepsychology.com</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#b5dbdf]">Office Hours</h4>
              <div className="space-y-2 text-white/80">
                <div>
                  <p className="font-medium text-[#b5dbdf]">In-Person Sessions</p>
                  <p className="text-sm">Tuesday & Thursday: 10 AM – 6 PM</p>
                </div>
                <div>
                  <p className="font-medium text-[#b5dbdf]">Virtual Sessions (Zoom)</p>
                  <p className="text-sm">Mon, Wed & Fri: 1 PM – 5 PM</p>
                </div>
                <div className="mt-4">
                  <p className="font-medium text-[#b5dbdf]">Session Fees</p>
                  <p className="text-sm">Individual: $200 • Couples: $240</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-white/70">
                <p>&copy; 2024 Dr. Serena Blake, PsyD. All rights reserved.</p>
              </div>
              <div className="flex space-x-6 text-sm text-white/70">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  HIPAA Notice
                </a>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-xs text-white/60">
                This website is for informational purposes only and does not constitute medical advice. If you are
                experiencing a mental health emergency, please call 911 or go to your nearest emergency room.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
