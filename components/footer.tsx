'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Instagram, LinkedinIcon as LinkedIn } from 'lucide-react'
import { XLogo } from './x-logo'
import Image from 'next/image'

export function Footer() {
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
    <footer className={`py-12 ${isScrolled ? 'bg-black' : 'bg-transparent'} text-white`}>
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="relative w-12 h-12">
              <Image
                src={isScrolled ? '/Logo white_.png' : '/Logo Black_.png'}
                alt="Collbr8 Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-400">
              Creating authentic connections between brands and diverse creators.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className={`${isScrolled ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className={`${isScrolled ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}
                >
                  Services
                </button>
              </li>
              <li><Link href="/our-talent">Talent</Link></li>
              <li><Link href="/news">News</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@collabr8.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Los Angeles, CA</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/collabr8agency/"
                className="hover:text-gray-300"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://x.com/collabr8agency"
                className="hover:text-gray-300"
                aria-label="X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XLogo />
              </Link>
              <Link
                href="https://www.linkedin.com/company/collabr8agency"
                className="hover:text-gray-300"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} COLLABR8. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
