"use client"

import { useState } from "react"
import { Menu, X, Sparkles,Phone,MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Top contact bar */}
      <div className="py-2 text-sm" style={{ backgroundColor: '#FFF0EC' }}>
<div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-gray-600">
              <Phone className="w-5 h-5" />
            <a href="tel:3235550192" className="font-semibold">(323) 555-0192</a>
          </div>
          <div className="flex items-center space-x-2 text-black">
      <MapPin className="w-5 h-5" />
      <span className="font-semibold">
        1287 Maplewood Drive, Los Angeles, CA 90026
      </span>
    </div>

        </div>
      </div>

      {/* Main navigation */}
      <nav className="border-b border-gray-200 sticky top-0 z-50" style={{ backgroundColor: '#F5F7FA' }}>

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-teal-primary rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl text-teal-dark">Dr. Serena Blake</div>
                <div className="text-sm text-teal-primary">LICENSED CLINICAL PSYCHOLOGIST</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-teal-dark transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-teal-dark transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-700 hover:text-teal-dark transition-colors font-medium"
              >
                Rates & FAQs
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-teal-dark transition-colors font-medium"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-gray-400 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-md"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-left text-gray-700 hover:text-teal-dark transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-gray-700 hover:text-teal-dark transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-left text-gray-700 hover:text-teal-dark transition-colors"
                >
                  Rates & FAQs
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-gray-700 hover:text-teal-dark transition-colors"
                >
                  Contact
                </button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="border-2 border-gray-400 text-gray-700 hover:bg-gray-50 w-fit"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
