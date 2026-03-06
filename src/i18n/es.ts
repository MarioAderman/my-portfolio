const es = {
  nav: {
    about: 'Sobre mí',
    ask: 'Pregunta',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  hero: {
    titleLine1: 'Ingeniero de Software',
    titleLine2: 'en IA',
    tagline: {
      start: 'Mi objetivo es ',
      bold: 'escribir código mantenible, limpio',
      mid: ' y ',
      italic: 'comprensible',
      end: '. Siempre comprometido con el proceso.',
    },
    projectsButton: 'Proyectos',
  },
  about: {
    sectionTitle: 'Sobre mí',
    intro: {
      start: '¡Hola! Soy Mario, soy ',
      role: 'ingeniero de software especializado en IA',
      mid: '. Me gustan los ',
      opensource: 'proyectos open-source',
      and: ' y los ',
      hackathons: 'hackathons',
      end: '.',
    },
    techLabel: {
      start: 'Algunas de mis ',
      bold: 'tecnologías, temas o herramientas favoritas',
      end: ' con las que he trabajado',
    },
    categories: {
      aiml: 'IA / ML',
      backend: 'Backend',
      frontend: 'Frontend',
      devops: 'DevOps / Herramientas',
    },
  },
  ask: {
    title: 'Pregúntale a Mi Portafolio',
    subtitle:
      'Este portafolio es AI-native. Chatea con él aquí, o conecta tu propio asistente de IA usando el servidor MCP.',
    snippetLabels: {
      claudeCode: 'Claude Code',
      cursorVscode: 'Cursor / VS Code / Claude Desktop',
      a2a: 'A2A Agent Card',
    },
    chat: {
      greeting:
        '¡Hola! Soy el asistente del portafolio de Mario. Pregúntame lo que quieras sobre sus habilidades, proyectos o servicios.',
      placeholder: 'Pregunta sobre habilidades, proyectos, servicios...',
      errorProcess:
        'No pude procesar eso. Intenta de nuevo o contacta a Mario directamente.',
      errorConnect:
        'No se pudo conectar con el agente. Intenta más tarde o contacta a Mario directamente.',
    },
  },
  projects: {
    sectionTitle: 'Proyectos',
    readMore: 'Leer más',
    items: [
      {
        id: 'cashy',
        title: 'Cashy — Asesor Financiero IA',
        description:
          'Agente de finanzas personales impulsado por IA que responde consultas en lenguaje natural sobre una base de datos con estructura financiera personalizada. Incluye soporte multi-proveedor de LLMs (OpenAI, Anthropic, Google, HuggingFace), tool-calling especializado, human-in-the-loop para operaciones de escritura, generación de gráficas y una versión gratuita.',
        carouselDescription:
          'Agente de finanzas personales impulsado por IA que responde consultas en lenguaje natural sobre una base de datos financiera. Soporte multi-proveedor de LLMs, tool-calling especializado, human-in-the-loop, generación de gráficas y una versión gratuita.',
      },
      {
        id: 'determinator',
        title: 'The DETERMINATOR',
        description:
          'Agente generalista de investigación profunda que usa ciclos iterativos de búsqueda y evaluación para investigar preguntas complejas de cualquier dominio. Construido para el Hackathon MCP-1st-Birthday. Incluye búsqueda multi-fuente, integración MCP, OAuth de HuggingFace, ejecución de código en sandbox con Modal y RAG con LlamaIndex. Contribuí en la tarea de text-to-speech usando el modelo Kokoro-82M en GPU de Modal.',
        carouselDescription:
          'Agente generalista de investigación profunda que usa ciclos iterativos de búsqueda y evaluación para investigar preguntas complejas. Construido para el Hackathon MCP-1st-Birthday.',
      },
      {
        id: 'fintegra-chatbot',
        title: 'Chatbot Recepcionista Fintegra',
        description:
          'Chatbot recepcionista multi-plataforma. Enruta la intención del usuario a través de un sistema de tres agentes: clasificador de intención, agente de agendamiento con integración Cal.com, y agente FAQ con RAG. Disponible para Instagram DM, WhatsApp y Telegram con transcripción de voz (Whisper) y análisis de imágenes (GPT-4o). Construido en n8n con Redis para batching de mensajes y Supabase pgvector para la extracción de conocimiento.',
        carouselDescription:
          'Chatbot recepcionista multi-plataforma con sistema de tres agentes: enrutamiento de intención, agendamiento vía Cal.com, y FAQ con RAG. Soporta Instagram, WhatsApp y Telegram.',
      },
    ],
  },
  contact: {
    role: 'Ingeniero de Software especializado en IA',
    email: 'Correo',
  },
  footer: {
    brand: 'mario.aderman',
    rights: 'Todos los derechos reservados.',
  },
  aria: {
    toggleMenu: 'Abrir menú',
    copyClipboard: 'Copiar al portapapeles',
    sendMessage: 'Enviar mensaje',
    previous: 'Anterior',
    next: 'Siguiente',
    goToSlide: 'Ir a la diapositiva',
    viewGithub: 'Ver perfil de GitHub',
  },
}

export default es
