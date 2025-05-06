'use client'

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-background text-foreground">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        Hi, I’m Mario —
        <br className="hidden md:block" />
        Building the Future with AI
      </h1>

      <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
        Startup CTO in the making. AI Engineer. Product Builder.
        <br />
        Passionate about elegant code and powerful user experiences.
      </p>

      <Button
        variant="outline"
        size="lg"
        className="mt-8 flex items-center gap-2"
        onClick={() =>
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        See My Work <ArrowDown className="w-4 h-4" />
      </Button>
    </section>
  );
}
