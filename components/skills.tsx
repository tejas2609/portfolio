"use client"

import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Backend & APIs",
    skills: "Python (FastAPI, Django, Flask), Java (Spring Boot), REST APIs, JWT, Async Processing",
  },
  {
    title: "Frontend",
    skills: "React, Angular, TypeScript, SCSS, Material UI, RxJS",
  },
  {
    title: "Distributed & Real-Time",
    skills: "Kafka, WebSockets, Event-Driven Architectures, High-Frequency Data Ingestion",
  },
  {
    title: "Artificial Intelligence",
    skills: "Generative AI, Machine Learning",
  },
  {
    title: "Databases",
    skills: "PostgreSQL, MongoDB, Firestore, Query Optimization, Redis",
  },
  {
    title: "Cloud & DevOps",
    skills: "AWS, Azure, Docker, Terraform, CI/CD, Observability, GitHub",
  },
  {
    title: 'Core Competencies',
    skills: 'System Design, Microservices Architecture, Scalability, Performance Optimization, Agile Methodologies, OOPS, DSA, TDD',
  }
]

interface SkillsProps {
  isActive: boolean
}

export function Skills({ isActive }: SkillsProps) {
  return (
    <section className="relative h-full flex items-center justify-center px-4 overflow-hidden" id="skills">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 transition-all duration-700 ${
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="signature-wrap">
            Skills
            <svg className="flourish" viewBox="0 0 1500 40" preserveAspectRatio="none">
              <path 
                d="M10,10 Q100,2 190,10 C205,15 15,25 10,25 Q100,18 190,25" 
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="2" 
                strokeLinecap="round" 
              />
            </svg>
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`group relative p-6 transition-all duration-700 hover:scale-[1.05] backdrop-blur-sm bg-card/80 border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 ${
                isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isActive ? `${index * 100 + 200}ms` : "0ms" }}
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{category.skills}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
