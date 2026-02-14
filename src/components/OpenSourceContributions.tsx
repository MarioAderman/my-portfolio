import SectionWrapper from "./SectionWrapper"
import { ExternalLink, Github } from "lucide-react"

type Contribution = {
  text: string;
  pr?: string;
  issue?: string;
}

const contributions = [
  {
    title: "DeepCritical Project",
    role: "Developer",
    period: "Sept 2025 - Present",
    repoUrl: "https://github.com/DeepCritical",
    description: "Agentic framework for scientific deep research. DeepCritical generates datasets of hypotheses, tests them systematically, runs simulations, and produces reports—all through configurable Hydra-based workflows. Originally conceived to address Alzheimer's Critical Assessment project by Hugging Science Org.",
    contributions: [
      {
        text: "Added LLM client support with comprehensive Pydantic validation for OpenAI-compatible model settings.",
        pr: "92"
      },
      {
        text: "Resolved circular import errors for dependencies across the codebase.",
        pr: "23"
      },
      {
        text: "Proposed a Ports and Adapters pattern for agentic memory and context management to benchmark all three providers (custom [hierarchical], baseline [FIFO] and external) performance.",
        issue: "31"
      }
    ]
  },
  {
    title: "The DETERMINATOR Demo",
    role: "Developer",
    period: "Nov 2025 - Dec 2025",
    repoUrl: "https://github.com/DeepCritical/GradioDemo",
    demoUrl: "https://huggingface.co/spaces/DataQuests/DETERMINATOR-TEST",
    badge: "MCP-1st-Birthday Hackathon",
    description: "Lightweight app based on DeepCritical Project. Deployed on Hugging Face Spaces and submitted for MCP-1st-Birthday Hackathon hosted by Anthropic and Gradio.",
    features: "Multi-modal input (audio, images and files), various options for both orchestrator and graph research modes, selection of inference providers, web search provider and audio output.",
    contributions: [
      {
        text: "Proposed magentic architecture for deep-orchestrator mode (inspired by Microsoft's agent framework)."
      },
      {
        text: "Added audio output using text-to-speech (tts) task by refining the output report writing and deploying a sandbox on Modal's server for on-demand tts.",
        pr: "45"
      },
      {
        text: "Enhanced Gradio UI design to improve app's UX.",
        pr: "45"
      }
    ]
  }
]

export default function OpenSourceContributions() {
  return (
    <SectionWrapper id="contributions" title="Open Source Contributions">
      <div className="max-w-5xl mx-auto py-12 space-y-12">
        {contributions.map((project, idx) => (
          <div
            key={idx}
            className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 md:p-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {project.role} | {project.period}
                </p>
              </div>

              {project.badge && (
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                  {project.badge}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>

            {project.features && (
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                <strong>Specs:</strong> {project.features}
              </p>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                View Repository
              </a>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo on HF Spaces
                </a>
              )}
            </div>

            {/* Contributions */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wide">
                Key Contributions
              </h4>
              <ul className="space-y-2">
                {project.contributions.map((contrib: Contribution, contribIdx) => (
                  <li key={contribIdx} className="flex gap-3">
                    <span className="text-blue-500 dark:text-blue-400 mt-1.5 flex-shrink-0">•</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {contrib.text}
                      {contrib.pr && (
                        <span className="ml-2 text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-0.5 rounded">
                          PR#{contrib.pr}
                        </span>
                      )}
                      {contrib.issue && (
                        <span className="ml-2 text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-0.5 rounded">
                          Issue#{contrib.issue}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
