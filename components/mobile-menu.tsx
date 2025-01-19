'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

interface MobileMenuProps {
  onNavigate: (sectionId: string) => void
  isScrolled: boolean
}

export function MobileMenu({ onNavigate, isScrolled }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={menuRef}>
      <Button
        variant="ghost"
        size="icon"
        className={`${isScrolled ? 'text-white' : 'text-black'}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6" />
      </Button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Button
              variant="ghost"
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left"
              onClick={() => handleNavigate('about')}
            >
              About Us
            </Button>
            <Button
              variant="ghost"
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left"
              onClick={() => handleNavigate('services')}
            >
              Services
            </Button>
            <Button
              variant="ghost"
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left"
              onClick={() => handleNavigate('brands')}
            >
              Brands
            </Button>
            <Button
              variant="ghost"
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left"
              onClick={() => handleNavigate('contact')}
            >
              Join Us
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

