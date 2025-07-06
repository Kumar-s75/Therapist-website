"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do you accept insurance?",
    answer:
      "No, I do not accept insurance directly. However, I provide a detailed superbill that you can submit to your insurance company for potential reimbursement. Many clients find that their out-of-network benefits help cover a portion of the session fees.",
  },
  {
    question: "Are online sessions available?",
    answer:
      "Yes, I offer secure virtual sessions via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM. Online therapy can be just as effective as in-person sessions and offers greater flexibility for busy schedules.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "I require 24-hour advance notice for cancellations or rescheduling. Cancellations made with less than 24 hours notice will be charged the full session fee, except in cases of emergency or illness.",
  },
  {
    question: "How long are therapy sessions?",
    answer:
      "Individual therapy sessions are 50 minutes long, while couples sessions are 60 minutes. This allows adequate time to explore issues deeply while maintaining a structured therapeutic framework.",
  },
  {
    question: "What should I expect in the first session?",
    answer:
      "The first session focuses on getting to know you, understanding your concerns, and discussing your goals for therapy. We'll review your history, current challenges, and begin developing a personalized treatment plan together.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-[#b5dbdf]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-dark">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#b5dbdf] border-2 border-teal-primary rounded-xl px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <h3 className="text-lg font-semibold text-teal-dark pr-4">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-0">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
