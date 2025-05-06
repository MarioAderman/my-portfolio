// src/components/ProjectCard.tsx
"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  repo?: string
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  repo,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-6 border rounded-lg dark:border-gray-700 shadow hover:shadow-lg transition-shadow"
    >
      <Image
        src={image}
        alt={title}
        width={600}
        height={350}
        className="rounded mb-4 w-full h-auto"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex gap-4">
        <Link
          href={link}
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          Live Demo
        </Link>
        {repo && (
          <Link
            href={repo}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </Link>
        )}
      </div>
    </motion.div>
  )
}
