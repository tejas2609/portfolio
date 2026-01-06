"use client"

const principles = [
  "Design systems that fail gracefully",
  "Prefer simple architectures that scale predictably",
  "Measure before optimizing",
  "Write tests that protect behavior",
  "Build software other engineers can understand",
]

interface PrinciplesProps {
  isActive: boolean
}

export function Principles({ isActive }: PrinciplesProps) {
  return (
    <section className="relative h-full flex items-center justify-center px-4 overflow-hidden" id="principles">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-8 transition-all duration-700 ${
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Engineering Principles
        </h2>
        <p
          className={`text-xl text-muted-foreground mb-12 leading-relaxed transition-all duration-700 ${
            isActive ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-10"
          }`}
        >
          I believe good engineering is about clarity, reliability, and long-term impact.
        </p>
        <ul className="space-y-4">
          {principles.map((principle, index) => (
            <li
              key={index}
              className={`group flex gap-4 p-4 rounded-lg backdrop-blur-sm bg-card/30 border border-border/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-700 hover:translate-x-2 hover:shadow-lg hover:shadow-primary/10 ${
                isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-20px]"
              }`}
              style={{ transitionDelay: isActive ? `${index * 100 + 200}ms` : "0ms" }}
            >
              <span className="text-primary font-bold text-2xl group-hover:scale-110 transition-transform">•</span>
              <span className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                {principle}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
