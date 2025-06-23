'use client'

import ThemeToggle from "./ThemeToggle"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-zinc-900 shadow-md p-4 flex justify-between items-center">
      <nav className="flex gap-4">
        <a href="#hero" className="text-black dark:text-white hover:underline">Home</a>
        <a href="#about" className="text-black dark:text-white hover:underline">About</a>
        <a href="#projects" className="text-black dark:text-white hover:underline">Projects</a>
        <a href="#contact" className="text-black dark:text-white hover:underline">Contact</a>
      </nav>
      <ThemeToggle />
    </header>
  )
}
