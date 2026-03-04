import type { Metadata } from "next"
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-mono",
  display: "swap",
})

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mario Aderman — AI Engineer",
  description: "Startup CTO / AI Engineer / Product Engineer. Building intelligent systems that ship.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plexMono.variable} ${plexSans.variable}`}>
      <body className="bg-bg-primary text-text-primary noise-overlay transition-colors duration-300">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
