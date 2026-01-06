"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"

interface ContactProps {
  isActive: boolean
}

export function Contact({ isActive }: ContactProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="relative h-full flex items-center justify-center px-4 overflow-hidden" id="contact">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] transition-all duration-300 ease-out pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.65 0.25 265 / 0.2) 0%, transparent 70%)",
          left: `${mousePosition.x - 250}px`,
          top: `${mousePosition.y - 250}px`,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2
          className={`text-4xl md:text-6xl font-bold mb-6 text-balance transition-all duration-700 ${
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Is there any poet here to tell stories?
        </h2>
        <p
          className={`text-xl text-muted-foreground mb-12 transition-all duration-700 ${
            isActive ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-10"
          }`}
        >
          I'm always interested in hearing about new opportunities and challenging problems.
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
            isActive ? "opacity-100 translate-y-0 delay-400" : "opacity-0 translate-y-10"
          }`}
        >
          <Button
            size="lg"
            className="group relative overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/30"
            asChild
          >
            <a href="mailto:murkyatejasjobs@gmail.com">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Email Me
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group backdrop-blur-sm bg-card/50 hover:bg-card transition-all hover:scale-105 hover:shadow-xl hover:border-primary"
            asChild
          >
            <a href="https://linkedin.com/in/tejas-murkya" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group backdrop-blur-sm bg-card/50 hover:bg-card transition-all hover:scale-105 hover:shadow-xl hover:border-primary"
            asChild
          >
            <a href="https://github.com/tejas2609" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
