'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu } from 'lucide-react'
import { MobileMenu } from './mobile-menu'

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
      <div className="container flex h-16 items-center justify-between">
        
        {/* ✅ Make the Logo Clickable */}
        <button className="relative w-20 h-12" onClick={() => scrollToSection('hero')}>
          <Image
            src={isScrolled ? "/IMG_9320.PNG" : "/IMG_9319.PNG"}
            alt="Collbr8 Logo"
            fill
            className="object-contain cursor-pointer"
          />
        </button>

        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <Button variant="link" onClick={() => scrollToSection('about')} className={`${isScrolled ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}>About Us</Button>
          <Button variant="link" onClick={() => scrollToSection('services')} className={`${isScrolled ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}>Services</Button>
          <Button variant="link" onClick={() => scrollToSection('brands')} className={`${isScrolled ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}>Brands</Button>
          <Button variant="link" onClick={() => scrollToSection('contact')} className={`${isScrolled ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}>Join Us</Button>
        </nav>
        
        <div className="md:hidden">
          <MobileMenu onNavigate={scrollToSection} isScrolled={isScrolled} />
        </div>
      </div>
    </header>
  )
}
