import SectionWrapper from "./SectionWrapper"
import { Activity, Bot, Brain, Heart, Lightbulb } from "lucide-react"

const interests = [
  {
    icon: Brain,
    title: "Medical AI",
    description: "Neurology and cardiology applications to advance healthcare.",
    color: "text-red-500 dark:text-red-400"
  },
  {
    icon: Bot,
    title: "Expressive Robotics & Embodied AI",
    description: "Making robotics more accessible and expressive.",
    color: "text-blue-500 dark:text-blue-400"
  },
  {
    icon: Lightbulb,
    title: "AI in Quantitative Finance",
    description: "Portfolio optimization and accessible financial tools.",
    color: "text-yellow-500 dark:text-yellow-400"
  },
  {
    icon: Heart,
    title: "Healthcare Companions",
    description: "AI applications in medical assistance and patient care.",
    color: "text-pink-500 dark:text-pink-400"
  },
  {
    icon: Activity,
    title: "Digital Twins & AI Physics",
    description: "Real-time digital representation of a complex system constrained by simulated environments.",
    color: "text-green-500 dark:text-green-400"
  }
]

export default function ResearchInterests() {
  return (
    <SectionWrapper id="research" title="Research Interests">
      <div className="max-w-5xl mx-auto py-12">
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Exploring the frontiers of AI across diverse domains, from healthcare to robotics to finance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, idx) => {
            const Icon = interest.icon
            return (
              <div
                key={idx}
                className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors group"
              >
                <div className={`mb-4 ${interest.color}`}>
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {interest.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {interest.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
