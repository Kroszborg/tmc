'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-background/80 backdrop-blur-sm text-primary sticky top-0 z-20">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-secondary transition-colors transform hover:scale-110 inline-block">Home</Link></li>
          <li><Link href="/events" className="hover:text-secondary transition-colors transform hover:scale-110 inline-block">Events</Link></li>
          <li><Link href="/gallery" className="hover:text-secondary transition-colors transform hover:scale-110 inline-block">Gallery</Link></li>
          <li><Link href="/" className="hover:text-secondary transition-colors transform hover:scale-110 inline-block">Contact</Link></li>
        </ul>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full bg-primary text-background hover:bg-secondary transition-colors"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </nav>
    </header>
  )
}

