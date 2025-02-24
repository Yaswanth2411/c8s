'use client'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-mask">
        <Image
          src="banner.avif"
          alt="Background"
          fill
          className="object-cover animate-float"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-slideUp [animation-delay:0.2s]">
              <Image
                src="IMG_9319.PNG"
                alt="Collabr8"
                width={300}
                height={80}
                className="drop-shadow-lg"
              />
            </div>

            <h1 className="text-5xl font-bold text-black animate-slideUp [animation-delay:0.4s] ">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800">
                Bridge Brands
              </span>
              <br />
              <span className="text-6xl font-extrabold">& Influencers</span>
            </h1>

            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-10 py-4 text-xl rounded-full transform transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={() => scrollToSection('contact')}
            >
              Let's Collabr8 
            </Button>
          </div>

          {/* Right Column - Image Collage */}
          <div className="relative animate-slideUp [animation-delay:0.8s]">
            <div className="absolute -inset-8 bg-black rounded-3xl transform rotate-3" />
            <Image
              src="poster.webp"
              alt="Brands & Influencers"
              width={600}
              height={600}
              className="relative rounded-3xl border-8 border-white shadow-2xl transform hover:rotate-2 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
