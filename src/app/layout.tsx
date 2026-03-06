import type { Metadata } from "next"
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { LanguageProvider } from "@/i18n/LanguageContext"

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
    <html lang="en" className={`dark ${plexMono.variable} ${plexSans.variable}`}>
      <body className="relative bg-bg-primary text-text-primary noise-overlay transition-colors duration-300">
        {/* Decorative background circles — visible across all sections */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="bg-circle absolute -right-32 top-1/4 w-[500px] h-[500px]" />
          <div className="bg-circle absolute -left-48 bottom-1/6 w-[350px] h-[350px]" />
          <div className="bg-circle absolute right-1/4 top-2/3 w-[400px] h-[400px]" />
        </div>
        <LanguageProvider>
          <div className="relative z-10">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
