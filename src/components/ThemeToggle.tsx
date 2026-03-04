"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme")
      // Default to dark mode
      const isStoredDark = storedTheme ? storedTheme === "dark" : true

      setIsDark(isStoredDark)
      document.documentElement.classList.toggle("dark", isStoredDark)

      if (!storedTheme) {
        localStorage.setItem("theme", "dark")
      }
    }
  }, [])

  const toggleTheme = () => {
    const nextIsDark = !isDark
    setIsDark(nextIsDark)
    localStorage.setItem("theme", nextIsDark ? "dark" : "light")
    document.documentElement.classList.toggle("dark", nextIsDark)
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="p-2 rounded-lg text-text-muted hover:text-text-primary border border-border-default hover:border-text-muted transition-all duration-200"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
