"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"


interface HeroProps {
  isActive: boolean
}

export function Hero({ isActive }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative h-full flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] transition-all duration-300 ease-out pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.22 265 / 0.15) 0%, oklch(0.48 0.22 195 / 0.1) 50%, transparent 70%)",
          left: `${mousePosition.x - 300}px`,
          top: `${mousePosition.y - 300}px`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm mb-6 transition-all duration-700 ${
            isActive ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm text-muted-foreground">Available for new opportunities</span>
        </div>

        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight transition-all duration-700 ${
            isActive ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-shimmer">Tejas Murkya</span>
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-chart-3 bg-clip-text text-transparent">
            A Full Stack Software Engineer
          </span>
        </h1>

        <p
          className={`text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty transition-all duration-700 ${
            isActive ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-10"
          }`}
        >
          Writing stories using code which connect with large scale users and make a difference in their lives.
        </p>

        <div
          className={`flex items-center justify-center gap-4 mb-12 transition-all duration-700 ${
            isActive ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="https://github.com/tejas2609"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-primary hover:border-primary transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/tejas-murkya"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-primary hover:border-primary transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:murkyatejasjobs@gmail.com"
            className="p-3 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-primary hover:border-primary transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
            isActive ? "opacity-100 translate-y-0 delay-700" : "opacity-0 translate-y-10"
          }`}
        >
        <Button
            size="lg"
            className="group relative overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
          >
            <span className="relative z-10 flex items-center">
              <a href="Tejas_Murkya_CV.pdf" download="Tejas_Murkya_CV.pdf" style={{textDecoration: 'none', color: 'white'}}>
                Download Resume
              </a>
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </span>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-border/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
