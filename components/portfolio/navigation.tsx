"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-foreground">
          <span className="text-primary">&lt;</span>GD<span className="text-primary">/&gt;</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
              >
                <span className="text-primary">0{index + 1}.</span> {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/resume.pdf"
              className="px-4 py-2 border border-primary text-primary font-mono text-sm rounded hover:bg-primary/10 transition-colors"
            >
              Resume
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <ul className="px-6 py-4 space-y-4">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-primary">0{index + 1}.</span> {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/resume.pdf"
                className="inline-block px-4 py-2 border border-primary text-primary font-mono text-sm rounded hover:bg-primary/10 transition-colors"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
