"use client"

import { Card } from "@/components/ui/card"

const experiences = [
  {
    title: "Associate Software Developer",
    company: "Itanta Analytics",
    period: "2022 - Present",
    achievements: [
      "Built Python microservices and Kafka pipelines for real-time analytics",
      "Improved throughput by 40–45% and reduced latency by ~35%",
      "Developed Angular and React dashboards consuming live streams",
      "Implemented TDD (Pytest/Jest) with ~85% test coverage",
      "Containerized services with Docker and CI/CD pipelines",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "DC Ikigai",
    period: "2021 - 2022",
    achievements: [
      "Built reusable React components with Redux and Material UI",
      "Improved UI performance, responsiveness, and accessibility",
    ],
  },
]

interface ExperienceProps {
  isActive: boolean
}

export function Experience({ isActive }: ExperienceProps) {
  return (
    <section className="relative h-full flex items-center justify-center px-4 overflow-hidden" id="experience">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto w-full h-full flex flex-col py-20">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 transition-all duration-700 ${
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Experience
        </h2>
        <div
          className="relative space-y-8 overflow-y-auto pr-4 flex-1 scrollbar-hide"
          data-scrollable="true"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {/* Timeline line */}
          <div className="absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-primary via-accent to-primary opacity-30 hidden md:block" />

          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`group relative p-8 backdrop-blur-sm bg-card/80 border-border/50 hover:border-primary/50 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 md:ml-8 ${
                isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-30px]"
              }`}
              style={{ transitionDelay: isActive ? `${index * 200 + 200}ms` : "0ms" }}
            >
              <div className="absolute -left-10 top-10 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50 hidden md:block group-hover:scale-125 transition-transform" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-muted-foreground mt-2 md:mt-0 font-mono text-sm">{exp.period}</p>
              </div>
              <ul className="space-y-3 mt-6">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <span className="text-primary mt-1 font-bold">→</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
