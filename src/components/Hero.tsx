'use client'

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="mb-6 pt-20 md:pt-8">
        <Image
          src="/images/profile-m.jpeg"
          alt="Mario Aderman"
          width={300}
          height={300}
          className="rounded-full object-cover border-4 border-zinc-200 dark:border-zinc-800"
          priority
        />
      </div>

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        Hi, I&apos;m Mario Aderman
      </h1>

      <p className="mt-4 text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-semibold">
        AI Engineer
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="https://github.com/MarioAderman"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/mario-aderman"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="https://huggingface.co/SeasonalFall84"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Hugging Face"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
            <line x1="9" y1="9" x2="9.01" y2="9"/>
            <line x1="15" y1="9" x2="15.01" y2="9"/>
            <path d="M8 5c-1.5 1.5-2 3-2 5"/>
            <path d="M16 5c1.5 1.5 2 3 2 5"/>
          </svg>
        </a>
        <a
          href="https://x.com/MarioAderman"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="X (Twitter)"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a
          href="https://www.kaggle.com/marioaderman/code"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Kaggle"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
          </svg>
        </a>
      </div>

      <div className="flex gap-4 mt-8">
        <Button
          variant="default"
          size="lg"
          className="flex items-center gap-2"
          onClick={() =>
            document.getElementById("contributions")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View my Work
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="flex items-center gap-2"
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Get in Touch
        </Button>
      </div>

      <button
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        className="mt-12 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6 text-zinc-400 dark:text-zinc-500" />
      </button>
    </section>
  );
}
