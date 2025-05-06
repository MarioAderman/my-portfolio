'use client'

import ThemeToggle from "./ThemeToggle"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black shadow-md p-4 flex justify-between items-center">
      <nav className="flex gap-4">
        <a href="#hero" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
      <ThemeToggle />
    </header>
  )
}
