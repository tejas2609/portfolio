"use client"

const principles = [
  "Build for the'uh-oh' moments. I learn to design systems that keep their cool even when things go wrong.",
  "Avoid cleverness for the sake of it. I prioritize 'boring' code that is easy to fix at 2 AM - keep it simple.",
  "Let data do the talking. I don't guess; I optimize based on what the numbers actually show.",
  "Code with a safety net. I write tests so that I, and the next developer, can sleep better at night.",
  "Write for humans, not just compilers. If a teammate can’t read it, it’s not finished yet.",
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
          <span className="signature-wrap">
            My North Stars
            <svg style={{marginLeft: '15%'}} className="flourish" viewBox="0 -5 700 40" preserveAspectRatio="none">
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
        <p
          className={`text-xl text-muted-foreground mb-12 leading-relaxed transition-all duration-700 ${
            isActive ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-10"
          }`}
        >
          I've learned that code is temporary, but architectural decisions are permanent. These are the rules I live by to ensure what I build lasts.
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
