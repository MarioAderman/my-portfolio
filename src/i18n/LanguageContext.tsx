'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import en from './en'
import es from './es'

type Language = 'en' | 'es'
type Translations = typeof en

interface LanguageContextType {
  lang: Language
  t: Translations
  toggleLanguage: () => void
}

const translations: Record<Language, Translations> = { en, es }

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  t: en,
  toggleLanguage: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en')

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'es' : 'en'))
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  return useContext(LanguageContext)
}
