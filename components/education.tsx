"use client"

import { Card } from "@/components/ui/card"

const experiences = [
  {
    title: "Masters of Science (MSc) in Computer Science",
    company: "University of Southampton",
    period: "Sept 2024 - Sept 2025",
    achievements: [
      "Modules: Artificial Intelligence, Web/App Development, Cloud Computing, Cryptography, Network and Web Security",
    ],
  },
  {
    title: "Bachelor of Technology (BTech) in Electronics and Telecommunication",
    company: "Vishwakarma Institute of Technology, Pune",
    period: "Aug 2019 - May 2023",
    achievements: [
      "Modules: Data Structures and Algorithms, DBMS, Computer Networks, Operating Systems, Microprocessors, Embedded Systems, Cloud Development",
    ],
  },
]

interface EducationProps {
  isActive: boolean
}

export function Education({ isActive }: EducationProps) {
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
          <span className="signature-wrap">
            Education
            <svg className="flourish" viewBox="0 0 800 40" preserveAspectRatio="none">
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
              className={`group relative p-8 backdrop-blur-sm bg-card/80 border-border/50 hover:border-primary/50 transition-all duration-700 origin-left hover:scale-x-[1.02] hover:shadow-2xl hover:shadow-primary/10 m-8 ${
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
                    <span className="text-primary font-bold">→</span>
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
