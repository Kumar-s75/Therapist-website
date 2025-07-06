import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dr. Serena Blake, PsyD - Clinical Psychologist | Los Angeles Therapy",
  description:
    "Licensed clinical psychologist in Los Angeles specializing in anxiety, relationship counseling, and trauma recovery. Evidence-based therapy with compassionate care. Book your free consultation today.",
  keywords:
    "clinical psychologist, therapy, Los Angeles, anxiety, trauma, relationships, mental health, CBT, mindfulness",
  authors: [{ name: "Dr. Serena Blake" }],
  openGraph: {
    title: "Dr. Serena Blake, PsyD - Clinical Psychologist",
    description:
      "Licensed clinical psychologist providing evidence-based therapy in Los Angeles. Specializing in anxiety, relationships, and trauma recovery.",
    type: "website",
  },
    
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
