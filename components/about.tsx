"use client"

interface AboutProps {
  isActive: boolean
}

export function About({ isActive }: AboutProps) {
  return (
    <section className="relative h-full flex items-center justify-center px-4 overflow-hidden" id="about">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-shimmer transition-all duration-700 ${
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          About
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p
            className={`transition-all duration-700 ${
              isActive ? "opacity-100 translate-x-0 delay-100" : "opacity-0 translate-x-[-20px]"
            }`}
          >
            I'm a Software Engineer with 2+ years of experience building production-grade systems that handle real-time
            data, complex workflows, and scalability challenges.
          </p>
          <p
            className={`transition-all duration-700 ${
              isActive ? "opacity-100 translate-x-0 delay-300" : "opacity-0 translate-x-[-20px]"
            }`}
          >
            I've worked across the stack — from Angular and React dashboards to Python-based microservices, Kafka
            streaming pipelines, and cloud deployments.
          </p>
          <p
            className={`transition-all duration-700 ${
              isActive ? "opacity-100 translate-x-0 delay-500" : "opacity-0 translate-x-[-20px]"
            }`}
          >
            I focus on clean architecture, testable code, system reliability, and long-term maintainability.
          </p>
        </div>
      </div>
    </section>
  )
}
