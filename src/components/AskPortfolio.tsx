'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, ArrowUpRight, Copy, Check, Clipboard } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/i18n/LanguageContext'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const A2A_URL = 'https://agent.fintegra.solutions/'
const MCP_COMMAND = 'claude mcp add mario-portfolio --transport http https://mcp.fintegra.solutions/mcp'
const MCP_JSON = `{
  "mcpServers": {
    "mario-portfolio": {
      "url": "https://mcp.fintegra.solutions/mcp"
    }
  }
}`

interface ChatMessage {
  role: 'user' | 'agent'
  text: string
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [text])

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-1.5 rounded-md bg-bg-surface hover:bg-bg-surface-alt border border-border-subtle text-text-muted hover:text-text-primary transition-all duration-200"
      aria-label="Copy"
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  )
}

export default function AskPortfolio() {
  const { t } = useTranslation()
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'agent', text: t.ask.chat.greeting },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const container = messagesContainerRef.current
    if (container) {
      container.scrollTop = container.scrollHeight
    }
  }, [messages])

  const sendMessage = useCallback(async () => {
    const text = input.trim()
    if (!text || loading) return

    setInput('')
    setMessages((prev) => [...prev, { role: 'user', text }])
    setLoading(true)

    try {
      const res = await fetch(A2A_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: crypto.randomUUID(),
          method: 'message/send',
          params: {
            message: {
              role: 'user',
              parts: [{ kind: 'text', text }],
              messageId: crypto.randomUUID(),
            },
          },
        }),
      })

      const data = await res.json()
      const agentText =
        data?.result?.parts?.[0]?.text || t.ask.chat.errorProcess

      setMessages((prev) => [...prev, { role: 'agent', text: agentText }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'agent', text: t.ask.chat.errorConnect },
      ])
    } finally {
      setLoading(false)
      inputRef.current?.focus()
    }
  }, [input, loading])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        sendMessage()
      }
    },
    [sendMessage]
  )

  return (
    <section id="ask" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Title — full width above content */}
          <motion.h2
            className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4"
            variants={fadeUp}
            custom={0}
          >
            {t.ask.title}
          </motion.h2>

          <motion.p
            className="text-sm text-text-secondary leading-relaxed max-w-md mb-10"
            variants={fadeUp}
            custom={0}
          >
            {t.ask.subtitle}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {/* Left: Connection info */}
          <motion.div className="flex flex-col gap-6" variants={fadeUp} custom={1}>

            {/* MCP connection snippet */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-text-muted">{t.ask.snippetLabels.claudeCode}</span>
              <div className="relative">
                <pre className="text-xs font-mono text-text-secondary bg-bg-surface border border-border-default rounded-lg p-4 pr-10 overflow-x-auto">
                  {MCP_COMMAND}
                </pre>
                <CopyButton text={MCP_COMMAND} />
              </div>
            </div>

            {/* MCP JSON snippet */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-text-muted">{t.ask.snippetLabels.cursorVscode}</span>
              <div className="relative">
                <pre className="text-xs font-mono text-text-secondary bg-bg-surface border border-border-default rounded-lg p-4 pr-10 overflow-x-auto">
                  {MCP_JSON}
                </pre>
                <CopyButton text={MCP_JSON} />
              </div>
            </div>

            {/* A2A Agent Card */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-text-muted">{t.ask.snippetLabels.a2a}</span>
              <div className="relative">
                <pre className="text-xs font-mono text-text-secondary bg-bg-surface border border-border-default rounded-lg p-4 pr-10 overflow-x-auto">
                  https://agent.fintegra.solutions/.well-known/agent-card.json
                </pre>
                <CopyButton text="https://agent.fintegra.solutions/.well-known/agent-card.json" />
              </div>
            </div>
          </motion.div>

          {/* Right: Chat widget */}
          <motion.div
            className="flex flex-col border border-border-default rounded-2xl bg-bg-card overflow-hidden h-[420px]"
            variants={fadeUp}
            custom={2}
          >
            {/* Messages */}
            <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    'flex',
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      'max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed',
                      msg.role === 'user'
                        ? 'bg-text-primary text-bg-primary rounded-br-md'
                        : 'bg-bg-surface border border-border-default text-text-secondary rounded-bl-md'
                    )}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-bg-surface border border-border-default rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce [animation-delay:0ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Input */}
            <div className="border-t border-border-default p-3">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={t.ask.chat.placeholder}
                  disabled={loading}
                  className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted font-sans outline-none disabled:opacity-50"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  className={cn(
                    'inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200',
                    input.trim() && !loading
                      ? 'bg-text-primary text-bg-primary hover:opacity-80'
                      : 'bg-bg-surface text-text-muted border border-border-default'
                  )}
                  aria-label={t.aria.sendMessage}
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
