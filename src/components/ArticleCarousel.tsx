'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/i18n/LanguageContext'

interface CarouselItem {
  title: string
  description: string
  image?: string
  tags?: string[]
  link?: string
  linkText?: string
}

const carouselConfigs = [
  {
    id: 'cashy',
    image: '/images/projects/cashy/cashy_edited.png',
    tags: ['LangGraph', 'LangChain', 'PostgreSQL', 'Gradio'],
    link: '#project-cashy',
  },
  {
    id: 'determinator',
    image: '/images/projects/the_determinator/determinator_card_square.png',
    tags: ['Pydantic AI', 'Gradio', 'LlamaIndex', 'Modal', 'MCP'],
    link: '#project-determinator',
  },
  {
    id: 'fintegra-chatbot',
    image: '/images/projects/chatbot_recepcionist/chatbot_card_edited.png',
    tags: ['n8n', 'OpenAI', 'Supabase', 'Cal.com'],
    link: '#project-fintegra-chatbot',
  },
]

export default function ArticleCarousel() {
  const { t } = useTranslation()

  const items: CarouselItem[] = carouselConfigs.map((config) => {
    const item = t.projects.items.find((i) => i.id === config.id)
    return {
      title: item?.title ?? config.id,
      description: item?.carouselDescription ?? '',
      image: config.image,
      tags: config.tags,
      link: config.link,
      linkText: t.projects.readMore,
    }
  })
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + items.length) % items.length)
  }, [])

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % items.length)
  }, [])

  // Get indices for the 3 visible cards (previous, current, next)
  const prevIdx = (current - 1 + items.length) % items.length
  const nextIdx = (current + 1) % items.length

  return (
    <section className="pt-4 pb-12 md:pt-6 md:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Desktop: 3-card carousel with side arrows */}
        <div className="hidden md:flex items-center gap-4">
          {/* Left arrow */}
          <button
            onClick={prev}
            className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full border border-border-default hover:bg-text-primary hover:text-bg-primary hover:border-text-primary text-text-muted transition-all duration-200"
            aria-label="Previous"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="relative flex items-stretch gap-2 justify-center flex-1 min-w-0">
            {/* Left card (partially visible) */}
            <CarouselCard
              item={items[prevIdx]}
              position="left"
              onClick={prev}
            />

            {/* Center card (active) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="w-full max-w-md shrink-0"
              >
                <CarouselCard item={items[current]} position="center" />
              </motion.div>
            </AnimatePresence>

            {/* Right card (partially visible) */}
            <CarouselCard
              item={items[nextIdx]}
              position="right"
              onClick={next}
            />
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full border border-border-default hover:bg-text-primary hover:text-bg-primary hover:border-text-primary text-text-muted transition-all duration-200"
            aria-label="Next"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              <CarouselCard item={items[current]} position="center" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          {/* Prev arrow — mobile only */}
          <button
            onClick={prev}
            className="md:hidden inline-flex items-center justify-center w-12 h-12 rounded-full border border-border-default hover:bg-text-primary hover:text-bg-primary hover:border-text-primary text-text-muted transition-all duration-200"
            aria-label="Previous"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={cn(
                  'w-2.5 h-2.5 rounded-full transition-all duration-200',
                  idx === current
                    ? 'bg-text-primary scale-110'
                    : 'bg-border-default hover:bg-text-muted'
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next arrow — mobile only */}
          <button
            onClick={next}
            className="md:hidden inline-flex items-center justify-center w-12 h-12 rounded-full border border-border-default hover:bg-text-primary hover:text-bg-primary hover:border-text-primary text-text-muted transition-all duration-200"
            aria-label="Next"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

/* ── Card Component ── */

function CarouselCard({
  item,
  position,
  onClick,
}: {
  item: CarouselItem
  position: 'left' | 'center' | 'right'
  onClick?: () => void
}) {
  const isCenter = position === 'center'

  return (
    <div
      onClick={onClick}
      className={cn(
        'rounded-2xl border border-border-default bg-bg-card overflow-hidden flex flex-col transition-all duration-300',
        isCenter
          ? 'w-full max-w-md'
          : 'w-full max-w-xs opacity-50 scale-95 cursor-pointer hover:opacity-70 shrink-0'
      )}
    >
      {/* Image or title-only header */}
      {item.image ? (
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="w-full aspect-[16/10] bg-bg-surface-alt flex items-center justify-center px-6">
          <h3 className="font-mono text-xl md:text-2xl font-bold text-text-primary text-center leading-tight">
            {item.title}
          </h3>
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Only show title below image if image exists */}
        {item.image && (
          <h3 className="font-mono text-base font-semibold text-text-primary mb-2 leading-tight">
            {item.title}
          </h3>
        )}

        <p className={cn(
          'text-sm text-text-secondary leading-relaxed',
          isCenter ? 'line-clamp-4' : 'line-clamp-2'
        )}>
          {item.description}
        </p>

        {/* Tags */}
        {item.tags && isCenter && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-0.5 rounded bg-bg-surface-alt text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        {item.link && isCenter && (
          <div className="flex items-center mt-auto pt-4">
            <span className="inline-flex items-center justify-center h-10 px-4 rounded-full border border-border-default bg-bg-secondary text-xs font-mono text-text-primary">
              {item.linkText || 'Read more'}
            </span>
            <a
              href={item.link}
              className="-ml-3 inline-flex items-center justify-center w-10 h-10 rounded-full border border-border-default bg-bg-surface hover:bg-text-primary hover:text-bg-primary hover:border-text-primary transition-all duration-200 z-10"
              aria-label={`View ${item.title}`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
