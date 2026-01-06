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
          <span className="signature-wrap">
            About
            <svg className="flourish" viewBox="0 0 1000 40" preserveAspectRatio="none">
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
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p
            className={`transition-all duration-700 ${
              isActive ? "opacity-100 translate-x-0 delay-100" : "opacity-0 translate-x-[-20px]"
            }`}
          >
            I don't just ship code; I ship outcomes. 
          </p>
          <p
            className={`transition-all duration-700 ${
              isActive ? "opacity-100 translate-x-0 delay-300" : "opacity-0 translate-x-[-20px]"
            }`}
          >
            With over two years of experience in production-grade environments, I’ve learned that the best software 
            is a blend of technical rigor and empathetic design.  I’m a Software Engineer who obsesses over the <em>"Why"</em> before the <em>"How"</em>:
          </p>
          <p
            className={`transition-all duration-700 ${
              isActive ? "opacity-100 translate-x-0 delay-500" : "opacity-0 translate-x-[-20px]"
            }`}
          >
            <ul style={{listStyle: 'initial'}}>
              <li>
                <strong>Scalability</strong>: I’ve built distributed backend services that increased system throughput by 45%. 
              </li>
              <li>
                <strong>Efficiency</strong>: I designed reusable UI systems that reduced feature development time by 30%. 
              </li>
              <li>
                <strong>Innovation</strong>: I hold a patent for a cloud-driven detection system, proving that I look for solutions beyond the standard documentation.
              </li>
            </ul>
            <br></br>
            I thrive in the space where TypeScript meets Python, and where Figma designs meet Scalable Architectures.
          </p>
        </div>
      </div>
    </section>
  )
}
