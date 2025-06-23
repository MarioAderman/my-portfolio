"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Run only in browser
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme")
      // Default to light mode if no theme is stored
      const isStoredDark = storedTheme === "dark"

      setIsDark(isStoredDark)
      document.documentElement.classList.toggle("dark", isStoredDark)
      
      // Ensure we explicitly set light mode if no theme stored
      if (!storedTheme) {
        localStorage.setItem("theme", "light")
      }
    }
  }, [])

  const toggleTheme = () => {
    const nextIsDark = !isDark
    setIsDark(nextIsDark)
    localStorage.setItem("theme", nextIsDark ? "dark" : "light")

    // 🔥 THIS is the key: apply to <html>
    document.documentElement.classList.toggle("dark", nextIsDark)
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="p-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
