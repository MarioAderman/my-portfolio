// src/components/ProjectCard.tsx
"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link?: string
  linkText?: string
  repo?: string
  date?: string
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  linkText = "Live Demo",
  repo,
  date,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-6 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow hover:shadow-lg transition-shadow"
    >
      <Image
        src={image}
        alt={title}
        width={600}
        height={350}
        className="rounded mb-4 w-full h-auto"
      />
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        {date && (
          <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
            {date}
          </span>
        )}
      </div>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-left">{description}</p>
      <div className="flex gap-4">
        {link && (
          <Link
            href={link}
            target="_blank"
            className="text-blue-700 dark:text-blue-400 hover:underline"
          >
            {linkText}
          </Link>
        )}
        {repo && (
          <Link
            href={repo}
            target="_blank"
            className="text-blue-700 dark:text-blue-400 hover:underline"
          >
            GitHub
          </Link>
        )}
      </div>
    </motion.div>
  )
}
