"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, CheckCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  whatBringsYou: string
  preferredTime: string
  agreeToContact: boolean
  recaptchaVerified?:boolean
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  whatBringsYou?: string
  preferredTime?: string
  agreeToContact?: string
 recaptchaVerified?:string

}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    whatBringsYou: "",
    preferredTime: "",
    agreeToContact: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation
   if (!formData.phone.trim()) {
  newErrors.phone = "Phone number is required"
} else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
  newErrors.phone = "Please enter a valid phone number (e.g., 323-555-0192)"
}


    // What brings you here validation
    if (!formData.whatBringsYou.trim()) {
      newErrors.whatBringsYou = "Please tell us what brings you here"
    } else if (formData.whatBringsYou.trim().length < 10) {
      newErrors.whatBringsYou = "Please provide more details (at least 10 characters)"
    }

    // Preferred time validation
    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = "Preferred time to reach you is required"
    }

    // Agreement validation
    if (!formData.agreeToContact) {
      newErrors.agreeToContact = "You must agree to be contacted to proceed"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after delay
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        whatBringsYou: "",
        preferredTime: "",
        agreeToContact: false,
      })
    }, 100)
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-teal-light">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-12 rounded-2xl shadow-lg border border-gray-200">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-teal-dark mb-4">Thank You!</h2>
              <p className="text-xl text-gray-700 mb-6">
                Your message has been received successfully. I'll get back to you within 24 hours to schedule your free
                consultation.
              </p>
              <p className="text-gray-600 mb-8">
                In the meantime, feel free to call me directly at (323) 555-0192 if you have any urgent questions.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-2 border-teal-dark text-teal-dark hover:bg-teal-dark hover:text-white"
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 bg-[#b5dbdf]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Office Information */}
            <div className="space-y-12">
              {/* Our Office */}
              <div>
                <h2 className="text-4xl font-bold text-teal-dark mb-6">Our Office</h2>
                <div className="space-y-2 text-lg text-gray-700">
                  <p className="font-semibold">1287 Maplewood Drive</p>
                  <p>Suite 102</p>
                  <p>Los Angeles</p>
                  <p>CA 90026</p>
                  <p>Los Angeles, CA</p>
                </div>
                <Button
                  variant="outline"
                  className="mt-4 bg-teal-dark text-white "
                >
                  Google Maps
                </Button>
              </div>

              {/* Hours */}
              <div>
                <h3 className="text-3xl font-bold text-teal-dark mb-6">Hours</h3>
                <div className="space-y-2 text-lg text-gray-700">

                  <h3 className="text-xl font-bold text-teal-dark mb-4">In-person:</h3>
                  <p>
                    <span className="font-medium">Tue & Thu :</span> 10:00 AM - 6:00 PM
                  </p>
                   <h3 className="text-xl font-bold text-teal-dark mb-6">Virtual via Zoom:</h3>
                  <p>
                    <span className="font-medium">Mon,Wed & Fri :</span> 10:00 AM - 6:00 PM
                  </p>
                 
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-3xl font-bold text-teal-dark mb-6">Contact</h3>
                <div className="flex items-center space-x-3 text-lg text-gray-700">
                  <Phone className="w-5 h-5 text-teal-dark" />
                  <span>(323) 555-0192</span>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <div className="bg-white max-w-md p-4 rounded-2xl shadow-lg border border-zinc-950">
                <h3 className="text-2xl font-bold text-center text-zinc-900 mb-4">Get In Touch</h3>
                <p className="text-center text-zinc-900 mb-8 leading-relaxed">
                  Simply fill out the brief fields below and Dr. Blake will be in touch with you soon, usually within
                  one business day. This form is safe, private, and completely free.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2  ">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                        errors.name
                          ? "border-red-500 focus:border-red-500 bg-red-50"
                          : " border-zinc-950 focus:border-teal-dark"
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1 flex items-center">⚠️ {errors.name}</p>}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                        errors.email
                          ? "border-red-500 focus:border-red-500 bg-red-50"
                          : " border-zinc-950 focus:border-teal-dark"
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1 flex items-center">⚠️ {errors.email}</p>}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      placeholder="(555) 234-5678"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                        errors.phone
                          ? "border-red-500 focus:border-red-500 bg-red-50"
                          : " border-zinc-950 focus:border-teal-dark"
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1 flex items-center">⚠️ {errors.phone}</p>}
                  </div>

                  {/* What brings you here Field */}
                  <div>
                    <label htmlFor="whatBringsYou" className="block text-sm font-medium text-gray-700 mb-2">
                      What brings you here?
                    </label>
                    <Textarea
                      id="whatBringsYou"
                      placeholder="How can I help you?"
                      rows={4}
                      value={formData.whatBringsYou}
                      onChange={(e) => handleInputChange("whatBringsYou", e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg transition-colors resize-none ${
                        errors.whatBringsYou
                          ? "border-red-500 focus:border-red-500 bg-red-50"
                          : " border-zinc-950 focus:border-teal-dark"
                      }`}
                    />
                    {errors.whatBringsYou && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">⚠️ {errors.whatBringsYou}</p>
                    )}
                  </div>

                  {/* Preferred Time Field */}
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred time to reach you
                    </label>
                    <Input
                      id="preferredTime"
                      placeholder="e.g., Weekday mornings, Tuesday evenings"
                      value={formData.preferredTime}
                      onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                        errors.preferredTime
                          ? "border-red-500 focus:border-red-500 bg-red-50"
                          : " border-zinc-950 focus:border-teal-dark"
                      }`}
                    />
                    {errors.preferredTime && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">⚠️ {errors.preferredTime}</p>
                    )}
                  </div>

                  {/* reCAPTCHA placeholder */}
                  <div className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg bg-gray-50">
                    <Checkbox
  id="recaptcha"
  checked={formData.recaptchaVerified}
  onCheckedChange={(checked) => handleInputChange("recaptchaVerified", checked as boolean)}
  className={`mt-1 ${errors.recaptchaVerified ? "border-red-500" : "border-gray-400"}`}
/>

                    <label htmlFor="recaptcha" className="text-sm text-gray-700">
                      I'm not a robot
                    </label>
                    <div className="ml-auto">
                      <div className="text-xs text-gray-500">reCAPTCHA</div>
                      <div className="text-xs text-gray-400">Privacy - Terms</div>
                    </div>
                  </div>

                  {/* Agreement Checkbox */}
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agree"
                      checked={formData.agreeToContact}
                      onCheckedChange={(checked) => handleInputChange("agreeToContact", checked as boolean)}
                      className={`mt-1 ${errors.agreeToContact ? "border-red-500" : "border-gray-400"}`}
                    />
                    <label htmlFor="agree" className="text-sm text-gray-700 leading-relaxed">
                      I agree to be contacted by Dr. Serena Blake regarding my inquiry and understand that this form is
                      not for emergency situations.
                    </label>
                  </div>
                  {errors.agreeToContact && (
                    <p className="text-red-500 text-sm flex items-center">⚠️ {errors.agreeToContact}</p>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-dark hover:bg-teal-dark/90 text-white py-4 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      "Submit"
                    )}
                  </Button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    ⓘ By submitting, you confirm you are 18+ and agree to our{" "}
                    <span className="underline cursor-pointer">Privacy Policy & TOS</span> and to receive emails & texts
                    from Dr. Serena Blake.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
