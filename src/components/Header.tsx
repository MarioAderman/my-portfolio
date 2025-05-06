"use client"
import Link from "next/link"
import { useContext } from "react"
import { ThemeContext } from "@/context/ThemeContext"
import { Moon, Sun } from "lucide-react"

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-zinc-800">
      <Link href="/" className="text-xl font-bold">Mario Aderman</Link>
      <nav className="flex gap-6 items-center">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/demos">Demos</Link>
        <Link href="/contact">Contact</Link>
        <button onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>
    </header>
  )
}
