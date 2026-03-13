'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import ThemeToggle from './ThemeToggle'
import { useTranslation } from '@/i18n/LanguageContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { lang, t, toggleLanguage } = useTranslation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#ask', label: t.nav.ask },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <>
      {/* Safe area cover for iPhone notch — always solid, never semi-transparent */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[env(safe-area-inset-top)] bg-bg-primary" />
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top)]',
          isScrolled || isMenuOpen
            ? 'bg-bg-primary/90 backdrop-blur-xl border-b border-border-subtle'
            : 'bg-transparent'
        )}
      >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 md:grid md:grid-cols-3">
          {/* Left: Name */}
          <a
            href="#hero"
            className="font-mono text-sm leading-tight font-medium tracking-tight text-text-primary hover:text-ember transition-colors"
          >
            Mario<br />Aderman
          </a>

          {/* Center: Nav links */}
          <nav className="hidden md:flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-text-muted hover:text-text-primary transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: EN + Theme toggle */}
          <div className="flex items-center justify-end gap-4">
            <button
              onClick={toggleLanguage}
              className="font-sans text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
            <ThemeToggle />
            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-text-muted hover:text-text-primary transition-colors md:hidden"
              aria-label={t.aria.toggleMenu}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMenuOpen ? 'max-h-64 opacity-100 pb-4' : 'max-h-0 opacity-0'
          )}
        >
          <nav className="flex flex-col gap-1 border-t border-border-subtle pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-sans text-sm text-text-muted hover:text-text-primary py-2 px-3 rounded-lg hover:bg-bg-surface transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
    </>
  )
}
