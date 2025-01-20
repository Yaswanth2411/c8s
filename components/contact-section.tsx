'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xqaavgvn", {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        router.push('/thank-you');
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black text-white flex justify-center items-center">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Join Us</h2>
            <p className="text-xl text-gray-400">
              Ready to create something amazing? Let's connect!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6" action="https://formspree.io/f/xqaavgvn" method="POST">
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
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

