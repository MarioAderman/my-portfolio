'use client'

import ThemeToggle from "./ThemeToggle"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-md p-4 flex justify-between items-center border-b border-gray-200/20 dark:border-gray-700/20">
      <nav className="flex gap-4">
        <a href="#hero" className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white hover:underline transition-colors">Home</a>
        <a href="#about" className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white hover:underline transition-colors">About</a>
        <a href="#projects" className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white hover:underline transition-colors">Projects</a>
        <a href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white hover:underline transition-colors">Contact</a>
      </nav>
      <ThemeToggle />
    </header>
  )
}
