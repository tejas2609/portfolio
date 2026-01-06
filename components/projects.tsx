"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import { text } from "stream/consumers"

const projects = [
  {
    title: "Real-Time Physiological Signal Analytics Platform",
    problem:
      "Healthcare providers needed real-time processing of high-frequency physiological data streams for critical patient monitoring and analysis.",
    solution:
      "Built a distributed system using FastAPI microservices with Kafka for event streaming, handling 100+ events per second. Developed an Angular dashboard with live data visualization and alerting capabilities.",
    impact:
      "Reduced data processing latency by 35%, improved system throughput by 40%, and enabled real-time clinical decision support for healthcare professionals.",
    tech: ["Python", "FastAPI", "Kafka", "Angular", "TypeScript", "PostgreSQL", "Docker"],
    links: [
      {
        link: "https://github.com/tejas2609/COMP6200",
        text: 'Frontend'
      }, 
      {
        link: "https://github.com/tejas2609/6200backend",
        text: 'Backend'
      }],
  },
  {
    title: "Cloud-Based Fitness SaaS Platform",
    problem:
      "Fitness trainers lacked a scalable platform to manage clients, track workouts, and deliver personalized training programs remotely.",
    solution:
      "Designed and built a full-stack SaaS application with React frontend, Azure cloud infrastructure, and Firestore for real-time data sync. Implemented role-based access control and subscription management.",
    impact:
      "Achieved 99.8% uptime, and reduced operational costs by 30% through efficient cloud resource utilization.",
    tech: ["React", "TypeScript", "Azure", "Firestore", "Node.js", "Stripe"],
    links: [
      {
        link: "https://github.com/Vpb123/web-dev-frontend",
        text: 'Frontend'
      },
      {
        link: "https://github.com/Vpb123/fitness-backend",
        text: 'Backend'
      }
    ]
  },
  {
    title: "Secure Messaging System",
    problem:
      "Organizations required end-to-end encrypted communication with forward secrecy and minimal infrastructure dependencies.",
    solution:
      "Implemented AES-256 encryption with Diffie-Hellman key exchange protocol. Built REST APIs for message routing and deployed on AWS with automated key rotation and audit logging.",
    impact:
      "Achieved encrypted sharing in production use, maintained sub-100ms message delivery latency, and passed security compliance audits.",
    tech: ["Python", "Flask", "AWS", "Cryptography", "PostgreSQL"],
  },
  {
    title: "Vision-Based Lane Detection System",
    problem:
      "Autonomous vehicle research required accurate lane detection across varying lighting and weather conditions for safe navigation.",
    solution:
      "Developed computer vision pipeline using OpenCV for edge detection, Hough transforms for line extraction, and NumPy for mathematical computations. Implemented Kalman filtering for temporal smoothing.",
    impact:
      "Achieved 95% detection accuracy (K-Means) across test scenarios, processed 30 FPS real-time video, and reduced false positives by 60% compared to baseline.",
    tech: ["Python", "OpenCV", "NumPy", "Computer Vision"],
    links: [
      {
        link: "https://github.com/tejas2609/Road-Curvature-Detection",
        text: ''
      }
    ]
  },
]

interface ProjectsProps {
  isActive: boolean
}

export function Projects({ isActive }: ProjectsProps) {
  return (
    <section className="relative h-full flex items-center justify-center px-4 overflow-hidden py-20" id="projects">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full h-full flex flex-col">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 transition-all duration-700 ${
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="signature-wrap">
            Projects
            <svg className="flourish" viewBox="0 0 1100 40" preserveAspectRatio="none">
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
          className="grid md:grid-cols-2 gap-8 overflow-y-auto pr-4 flex-1 scrollbar-hide"
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

          {projects.map((project, index) => (
            <Card
              key={index}
              className={`m-4 group gradient-border p-8 backdrop-blur-sm bg-card/80 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 ${
                isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isActive ? `${(index % 2) * 150 + 200}ms` : "0ms" }}
            >
              <div style={{width: '100%', display: 'flex', alignItems: 'flex-start'}}>
                <h3 className="text-2xl font-semibold mb-6 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div style={{width: '20%', display: 'flex', alignItems: 'center'}}>
                  {project.links?.map((linkObj, linkIndex) => (
                    <a 
                      key={linkIndex}
                      href={linkObj.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="relative z-10 ml-4 inline-flex items-center justify-center p-2 border border-gray-500 rounded-full text-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      <Github size={15}/>
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-primary mb-2">Problem</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">{project.problem}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-primary mb-2">Solution</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">{project.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-primary mb-2">Impact</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">{project.impact}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-primary mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-secondary/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
