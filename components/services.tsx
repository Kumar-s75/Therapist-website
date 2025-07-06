"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

const services = [
  {
    title: "Anxiety and Stress Management in Los Angeles, CA",
    description: "Find Calm, Build Resilience, and Regain Balance in Los Angeles",
    image: "https://images.unsplash.com/photo-1635919369557-abd7a91ed520?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbiUyMGhhcHB5JTIwYWZ0ZXIlMjBhbnhpZXR5JTIwYW5kJTIwc3RyZXN8ZW58MHx8MHx8fDA%3D",
    price: "$200 / individual session",
  },
  {
    title: "Relationship Counseling in Los Angeles, CA",
    description: "Heal Your Relationship, Grow Closer Together in Los Angeles.",
    image: "https://images.pexels.com/photos/1417255/pexels-photo-1417255.jpeg",
    price: "$240 / couples session",
  },
   {
    title: "Trauma Recovery in Los Angeles, CA",
    description: "Heal from the Past, Reclaim Your Strength in Los Angeles.",
    image: "https://plus.unsplash.com/premium_photo-1706429675518-b6868cdb195c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhhcHB5JTIwcGVyc29uJTIwYWZ0ZXIlMjB0cmF1bWF8ZW58MHx8MHx8fDA%3D",
    price: "$200 / individual session",
  },
]

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-dark mb-8 ">How I Help</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 bg-white">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#b5dbdf] border-4 border-teal-primary  rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow max-w-md"
              >
                <div className="relative h-64">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover rounded-t-2xl" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-teal-dark mb-4">{service.title}</h3>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-teal-dark font-semibold">{service.price}</span>
                    <Button
                      onClick={scrollToContact}
                      variant="outline"
                      className="border-2 border-teal-primary text-teal-dark hover:bg-teal-primary hover:bg-white bg-transparent"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Service */}
          {/* <div className="bg-[#b5dbdf] border-4 border-teal-primary rounded-2xl p-8 text-center">

            <h3 className="text-2xl font-bold text-teal-dark mb-4">Trauma Recovery Therapy</h3>
            <p className="text-gray-700 text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
              Heal from past traumatic experiences in a safe, supportive environment using trauma-informed therapeutic
              approaches. Through gentle, evidence-based methods, we'll help you process difficult experiences, reduce
              symptoms, and reclaim your sense of safety and empowerment.
            </p>
            <div className="flex justify-center items-center space-x-4">
              <span className="text-teal-dark font-semibold">$200 / session</span>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-teal-primary text-teal-dark hover:bg-teal-primary hover:text-white bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  )
}
