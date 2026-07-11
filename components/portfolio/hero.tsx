"use client"

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <p className="text-primary font-mono text-sm mb-4 tracking-wider">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
          Dharshini Gundevena
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6">
          CSE Student &amp; Aspiring Developer
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
          I&apos;m a BTech 1st year Computer Science Engineering student passionate about building 
          digital experiences. Currently focused on learning web development, data structures, 
          and exploring the fascinating world of technology.
        </p>
        
        <div className="flex items-center gap-6 mb-12">
          <Link 
            href="#contact" 
            className="px-6 py-3 border border-primary text-primary font-mono text-sm rounded hover:bg-primary/10 transition-colors"
          >
            Get In Touch
          </Link>
          <Link 
            href="#projects" 
            className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
          >
            View Projects →
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link 
            href="https://github.com" 
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link 
            href="https://linkedin.com" 
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link 
            href="mailto: dharshinigundevena@email.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
