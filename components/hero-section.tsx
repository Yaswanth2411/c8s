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
    <section id="hero" className="relative min-h-screen bg-yellow-300 overflow-hidden">
      {/* Background with dark shaded circles */}
      <div className="absolute top-0 left-0 w-[120px] h-[120px]">
        <div className="w-96 h-96 bg-black rounded-full opacity-20 absolute top-[-70%] left-[-70%]"></div>
      </div>

      <div className="absolute bottom-0 right-0 w-[120px] h-[120px] z-10">
        <div className="w-96 h-96 bg-black rounded-full opacity-20 absolute bottom-[-70%] right-[-70%]"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 py-32 lg:py-48 flex items-center h-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-slideUp [animation-delay:0.2s]">
              <Image
                src="IMG_9319.PNG"
                alt="Collabr8"
                width={300}
                height={300}
                className="drop-shadow-lg"
              />
            </div>

            <h1 className="text-4xl font-bold text-black animate-slideUp [animation-delay:0.4s]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800 whitespace-nowrap">
                Bridge <span className="text-5xl font-extrabold">Brands</span> & <span className="text-5xl font-extrabold">Influencers</span>
              </span>
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
          <div className="relative animate-slideUp [animation-delay:0.8s] z-20">
            <Image
              src="poster.webp"
              alt="Brands & Influencers"
              width={600}
              height={600}
              className="relative rounded-3xl shadow-2xl transform hover:rotate-2 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
