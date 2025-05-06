import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/context/ThemeContext"

export const metadata: Metadata = {
  title: "Mario Aderman Portfolio",
  description: "Startup CTO / AI Engineer / Product Engineer",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
