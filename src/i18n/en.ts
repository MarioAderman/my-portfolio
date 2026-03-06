const en = {
  nav: {
    about: 'About',
    ask: 'Ask',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    titleLine1: 'AI Software',
    titleLine2: 'Engineer',
    tagline: {
      start: 'My goal is to ',
      bold: 'write maintainable, clean',
      mid: ' and ',
      italic: 'understandable code',
      end: '. Always committed to the process.',
    },
    projectsButton: 'Projects',
  },
  about: {
    sectionTitle: 'About me',
    intro: {
      start: "Hello! I'm Mario, I'm an ",
      role: 'AI software engineer',
      mid: '. Into ',
      opensource: 'open-source projects',
      and: ' and ',
      hackathons: 'hackathons',
      end: '.',
    },
    techLabel: {
      start: 'Some of my ',
      bold: 'favorite technologies, topics, or tools',
      end: ' that I worked with',
    },
    categories: {
      aiml: 'AI / ML',
      backend: 'Backend',
      frontend: 'Frontend',
      devops: 'DevOps / Tools',
    },
  },
  ask: {
    title: 'Ask My Portfolio',
    subtitle:
      'This portfolio is AI-native. Chat with it here, or connect your own AI assistant using the MCP server.',
    snippetLabels: {
      claudeCode: 'Claude Code',
      cursorVscode: 'Cursor / VS Code / Claude Desktop',
      a2a: 'A2A Agent Card',
    },
    chat: {
      greeting:
        "Hey! I'm Mario's portfolio assistant. Ask me anything about his skills, projects, or services.",
      placeholder: 'Ask about skills, projects, services...',
      errorProcess:
        "Sorry, I couldn't process that. Try again or reach out to Mario directly.",
      errorConnect:
        "Couldn't connect to the agent right now. Try again later or reach out to Mario directly.",
    },
  },
  projects: {
    sectionTitle: 'Projects',
    readMore: 'Read more',
    items: [
      {
        id: 'cashy',
        title: 'Cashy — AI Financial Advisor',
        description:
          'An AI-powered personal finance agent that answers natural language queries about a customized financial-structured database. Features multi-provider LLM support (OpenAI, Anthropic, Google, HuggingFace), specialized tool-calling, human-in-the-loop for write operations, chart generation, and a free tier.',
        carouselDescription:
          'An AI-powered personal finance agent that answers natural language queries about a customized financial-structured database. Features multi-provider LLM support, specialized tool-calling, human-in-the-loop for write operations, chart generation, and a free tier.',
      },
      {
        id: 'determinator',
        title: 'The DETERMINATOR',
        description:
          'A generalist deep research agent that uses iterative search-and-judge loops to investigate complex questions from any domain. Built for the MCP-1st-Birthday Hackathon. Features multi-source search, MCP integration, HuggingFace OAuth, Modal sandboxed code execution and LlamaIndex RAG. I contributed the output text-to-speech task using Kokoro-82M model sandboxed on Modal GPU.',
        carouselDescription:
          'A generalist deep research agent that uses iterative search-and-judge loops to investigate complex questions from any domain. Built for the MCP-1st-Birthday Hackathon.',
      },
      {
        id: 'fintegra-chatbot',
        title: 'Fintegra Receptionist Chatbot',
        description:
          'Multi-platform receptionist chatbot for a financial services firm. Routes user intent through a three-agent system: an intent classifier, an appointment booking agent with Cal.com integration, and a RAG-powered FAQ agent. Supports Instagram DM, WhatsApp, and Telegram with voice transcription (Whisper) and image analysis (GPT-4o). Built on n8n with Redis message batching and Supabase pgvector for knowledge retrieval.',
        carouselDescription:
          'Multi-platform receptionist chatbot with a three-agent system: intent routing, appointment booking via Cal.com, and RAG-powered FAQ. Supports Instagram, WhatsApp, and Telegram.',
      },
    ],
  },
  contact: {
    role: 'AI Software Engineer',
    email: 'E-mail',
  },
  footer: {
    brand: 'mario.aderman',
    rights: 'All rights reserved.',
  },
  aria: {
    toggleMenu: 'Toggle menu',
    copyClipboard: 'Copy to clipboard',
    sendMessage: 'Send message',
    previous: 'Previous',
    next: 'Next',
    goToSlide: 'Go to slide',
    viewGithub: 'View GitHub profile',
  },
}

export default en
