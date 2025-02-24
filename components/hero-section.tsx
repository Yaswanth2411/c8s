'use client'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#FFE566] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-mask">
        <Image
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop"
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
              className="bg-black hover:bg-gray-900 text-xl px-8 py-6 animate-slideUp [animation-delay:0.6s]
                        transform transition-all hover:scale-105 shadow-2xl"
            >
              Let's Collabr8 →
            </Button>
          </div>

          {/* Right Column - Image Collage */}
          <div className="relative animate-slideUp [animation-delay:0.8s]">
            <div className="absolute -inset-8 bg-black rounded-3xl transform rotate-3" />
            <Image
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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