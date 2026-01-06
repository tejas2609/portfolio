"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Principles } from "@/components/principles"
import { Contact } from "@/components/contact"
import { useEffect, useRef, useState } from "react"
import { User, Code2, Briefcase, FolderKanban, Heart, Mail, Home, GraduationCap } from "lucide-react"
import { Education } from "@/components/education"

export default function Page() {
  const [currentSection, setCurrentSection] = useState(0)
  const [hoveredNav, setHoveredNav] = useState<number | null>(null)
  const [canScrollToNext, setCanScrollToNext] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const isScrolling = useRef(false)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  const sections = [
    { component: Hero, id: "hero", label: "Home" },
    { component: About, id: "about", label: "About" },
    { component: Skills, id: "skills", label: "Skills" },
    { component: Experience, id: "experience", label: "Experience" },
    { component: Projects, id: "projects", label: "Projects" },
    { component: Education, id: "education", label: "Education" },
    { component: Principles, id: "principles", label: "Principles" },
    { component: Contact, id: "contact", label: "Contact" },
  ]

  const checkScrollPosition = (sectionIndex: number) => {
    const sectionElement = sectionRefs.current[sectionIndex]
    if (!sectionElement) return true

    // Only check Experience and Projects sections for internal scroll
    if (sectionIndex !== 3 && sectionIndex !== 4) return true

    const scrollableContent = sectionElement.querySelector('[data-scrollable="true"]')
    if (!scrollableContent) return true

    const { scrollTop, scrollHeight, clientHeight } = scrollableContent as HTMLElement
    const isAtBottom = scrollHeight - scrollTop - clientHeight < 5 // 5px threshold
    const isAtTop = scrollTop < 5

    return { isAtBottom, isAtTop, hasScroll: scrollHeight > clientHeight }
  }

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return

      const scrollCheck = checkScrollPosition(currentSection)

      // Handle sections with internal scroll (Experience and Projects)
      if (currentSection === 3 || currentSection === 4) {
        const { isAtBottom, isAtTop, hasScroll } = scrollCheck as any

        if (hasScroll) {
          // If scrolling down and not at bottom, allow internal scroll
          if (e.deltaY > 0 && !isAtBottom) {
            return // Allow default internal scroll
          }
          // If scrolling up and not at top, allow internal scroll
          if (e.deltaY < 0 && !isAtTop) {
            return // Allow default internal scroll
          }
        }
      }

      e.preventDefault()

      // Navigate to next/previous section
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        isScrolling.current = true
        setCurrentSection((prev) => prev + 1)
        setTimeout(() => {
          isScrolling.current = false
        }, 1000)
      } else if (e.deltaY < 0 && currentSection > 0) {
        isScrolling.current = true
        setCurrentSection((prev) => prev - 1)
        setTimeout(() => {
          isScrolling.current = false
        }, 1000)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling.current) return

      if ((e.key === "ArrowDown" || e.key === "PageDown") && currentSection < sections.length - 1) {
        e.preventDefault()
        isScrolling.current = true
        setCurrentSection((prev) => prev + 1)
        setTimeout(() => {
          isScrolling.current = false
        }, 1000)
      } else if ((e.key === "ArrowUp" || e.key === "PageUp") && currentSection > 0) {
        e.preventDefault()
        isScrolling.current = true
        setCurrentSection((prev) => prev - 1)
        setTimeout(() => {
          isScrolling.current = false
        }, 1000)
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentSection, sections.length])

  return (
    <main ref={containerRef} className="h-screen overflow-hidden bg-background relative">
      <div className="fixed inset-0 line-texture pointer-events-none z-0" />

      <div
        className="h-full transition-transform duration-1000 ease-in-out relative z-10"
        style={{
          transform: `translateY(-${currentSection * 100}vh)`,
        }}
      >
        {sections.map(({ component: Component, id }, index) => (
          <div
            key={id}
            ref={(el) => {
              sectionRefs.current[index] = el
            }}
            className="h-screen relative"
            style={{
              opacity: index === currentSection ? 1 : 0.3,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <Component isActive={index === currentSection} />
          </div>
        ))}
      </div>

      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {sections.map(({ label }, index) => (
          <div key={index} className="relative group">
            <button
              onClick={() => {
                if (!isScrolling.current) {
                  isScrolling.current = true
                  setCurrentSection(index)
                  setTimeout(() => {
                    isScrolling.current = false
                  }, 1000)
                }
              }}
              onMouseEnter={() => setHoveredNav(index)}
              onMouseLeave={() => setHoveredNav(null)}
              className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
                index === currentSection
                  ? "w-12 h-12 bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                  : "w-10 h-10 bg-card border-2 border-border text-muted-foreground hover:border-primary hover:text-primary hover:scale-110"
              }`}
              aria-label={`Go to ${label}`}
            >
              {index === 0 && <Home className="w-4 h-4" />}
              {index === 1 && <User className="w-4 h-4" />}
              {index === 2 && <Code2 className="w-4 h-4" />}
              {index === 3 && <Briefcase className="w-4 h-4" />}
              {index === 4 && <FolderKanban className="w-4 h-4" />}
              {index === 5 && <GraduationCap className="w-4 h-4" />}
              {index === 6 && <Heart className="w-4 h-4" />}
              {index === 7 && <Mail className="w-4 h-4" />}
            </button>

            {/* Tooltip */}
            <div
              className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-card border border-border rounded-lg shadow-lg whitespace-nowrap transition-all duration-300 ${
                hoveredNav === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
              }`}
            >
              <span className="text-sm font-medium text-foreground">{label}</span>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-8 border-transparent border-l-border" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full -ml-px w-0 h-0 border-[7px] border-transparent border-l-card" />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
