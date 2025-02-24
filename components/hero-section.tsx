'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen bg-[#FFE566] flex justify-center items-center">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center px-8">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">
          <Image
            src="/IMG_9319.PNG"
            alt="Collabr8 Logo"
            width={400}
            height={100}
            className="object-contain mx-auto"
            priority
          />
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Bridging Brands and Influencers!
          </p>
          <Button
            size="lg"
            className="bg-black hover:bg-gray-800 text-white px-6 py-3 text-lg rounded-md"
            onClick={() => scrollToSection('contact')}
          >
            Let's Collabr8
          </Button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/banner.jpg"
            alt="Creative collaboration visualization"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  )
}
