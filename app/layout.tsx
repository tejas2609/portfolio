import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Full Stack Software Engineer | Portfolio",
  description:
    "Full Stack Software Engineer with 2+ years of experience building scalable, real-time, distributed systems using Python, TypeScript, Kafka, and modern cloud infrastructure.",
  keywords: ["Software Engineer", "Full Stack Developer", "Python", "TypeScript", "Kafka", "React", "Angular", "Cloud"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Full Stack Software Engineer | Portfolio",
    description: "Building scalable, real-time systems with Python, TypeScript, and modern cloud infrastructure.",
    type: "website",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
