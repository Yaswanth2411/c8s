'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

interface Logo {
  src: string
  alt: string
}

export function BrandsSection() {
  const [brandLogos, setBrandLogos] = useState<Logo[]>([])

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await fetch('/brand-logos.json')
        const data = await response.json()
        setBrandLogos(data.logos)
      } catch (error) {
        console.error('Error fetching brand logos:', error)
      }
    }

    fetchLogos()
  }, [])

  return (
    <section id="brands" className="py-24 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Brand Associations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {brandLogos.map((logo, index) => (
            <div key={index} className="relative w-40 h-40">
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

