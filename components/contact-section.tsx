'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PhoneIcon as WhatsappIcon } from 'lucide-react'

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    }

    // Format the WhatsApp message
    const whatsappMessage = `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Message: ${data.message}
    `.trim()

    // Your WhatsApp number here
    const whatsappNumber = "9177323929" // Replace with your actual number
    
    // Open WhatsApp with the pre-filled message
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank'
    )

    // Reset form
    e.currentTarget.reset()
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-24 bg-black text-white flex justify-center items-center">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Work With Us</h2>
            <p className="text-xl text-gray-400">
              Ready to create something amazing? Let's connect!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                name="name"
                placeholder="Name"
                required
                className="bg-gray-900 border-gray-800"
                disabled={isSubmitting}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="bg-gray-900 border-gray-800"
                disabled={isSubmitting}
              />
            </div>
            <Input
              name="phone"
              placeholder="Phone Number"
              required
              className="bg-gray-900 border-gray-800"
              disabled={isSubmitting}
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              required
              className="bg-gray-900 border-gray-800 min-h-[150px]"
              disabled={isSubmitting}
            />
            <Button 
              type="submit" 
              size="lg" 
              className="w-full"
              disabled={isSubmitting}
            >
              <WhatsappIcon className="mr-2 h-5 w-5" />
              Connect on WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

