import { NextResponse } from 'next/server'

const LLMS_TXT = `# Mario Aderman — AI Software Engineer

> AI Software Engineer | Building intelligent systems that ship

## About

Hello! I'm Mario, an AI software engineer. I'm into open-source projects and hackathons.
My goal is to write maintainable, clean and understandable code. Always committed to the process.

## Skills

### AI / ML
Python, PyTorch, Scikit-Learn, Transformers, LLMs (Proprietary & Open-weights), LangChain, LangGraph, Pgvector, RAG, MCP, A2A Protocol

### Backend
FastAPI, FastMCP, Express, PostgreSQL, Supabase, Render

### Frontend
TypeScript, React, Next.js, Gradio

### DevOps / Tools
Git, GitHub Actions, Docker, Hugging Face Spaces, Claude Code, CI/CD

## Projects

### Cashy — AI Financial Advisor
An AI-powered personal finance agent that answers natural language queries about a customized financial-structured database. Features multi-provider LLM support (OpenAI, Anthropic, Google, HuggingFace), specialized tool-calling, human-in-the-loop for write operations, chart generation, and a free tier.
- Tags: LangGraph, LangChain, PostgreSQL, Gradio, Python
- GitHub: https://github.com/MarioAderman/cashy-poc
- Live Demo: https://huggingface.co/spaces/SeasonalFall84/cashy
- Video Demo: https://youtu.be/Ln5vl8dd5aI

### The DETERMINATOR
A generalist deep research agent that uses iterative search-and-judge loops to investigate complex questions from any domain. Built for the MCP-1st-Birthday Hackathon. Features multi-source search, MCP integration, HuggingFace OAuth, Modal sandboxed code execution and LlamaIndex RAG. I contributed the output text-to-speech task using Kokoro-82M model sandboxed on Modal GPU.
- Tags: Pydantic AI, Gradio, LlamaIndex, Modal, MCP
- GitHub: https://github.com/DeepCritical/GradioDemo
- Live Demo: https://huggingface.co/spaces/DataQuests/DeepCritical

### Fintegra Receptionist Chatbot
Multi-platform receptionist chatbot for a financial services firm. Routes user intent through a three-agent system: an intent classifier, an appointment booking agent with Cal.com integration, and a RAG-powered FAQ agent. Supports Instagram DM, WhatsApp, and Telegram with voice transcription (Whisper) and image analysis (GPT-4o). Built on n8n with Redis message batching and Supabase pgvector for knowledge retrieval.
- Tags: n8n, OpenAI, Supabase, Cal.com, Redis
- Video Demo: https://www.youtube.com/shorts/0mYRDSPPiOo
- Instagram: https://www.instagram.com/fintegra.mx/

## Contact

- Email: mario.aderman@gmail.com
- GitHub: https://github.com/MarioAderman
- LinkedIn: https://linkedin.com/in/mario-aderman
- X / Twitter: https://x.com/MarioAderman
- Hugging Face: https://huggingface.co/SeasonalFall84
- Kaggle: https://www.kaggle.com/marioaderman/code
- Upwork: https://www.upwork.com/freelancers/~01de5a92e5fb56c8c6

## AI Integration

This portfolio is AI-native. You can interact with it programmatically:

### MCP Server
Connect your AI assistant (Claude Code, Cursor, VS Code, Claude Desktop) to query this portfolio:
- URL: https://mcp.fintegra.solutions/mcp
- CLI: claude mcp add mario-portfolio --transport http https://mcp.fintegra.solutions/mcp
- JSON config:
  {
    "mcpServers": {
      "mario-portfolio": {
        "url": "https://mcp.fintegra.solutions/mcp"
      }
    }
  }

### A2A (Agent-to-Agent) Protocol
- Agent Card: https://agent.fintegra.solutions/.well-known/agent-card.json
- Endpoint: https://agent.fintegra.solutions/

## Site

- URL: https://marioaderman.com
- Stack: Next.js 15, React 19, TypeScript, Tailwind CSS v4
- Languages: English, Spanish
`

export function GET() {
  return new NextResponse(LLMS_TXT, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
