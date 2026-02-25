export const portfolioData = {
  web: {
    id: "web",
    titulo: "Desarrollo Full Stack",
    descripcion: "Arquitecturas escalables, DevSecOps y optimización B2B/B2C.",
    color: "#38bdf8", 
    bgColor: "#041421", 
    items: [
      {
        nombre: "PlenoMax",
        url: "https://plenomax.com.ar",
        descripcion: "Plataforma web corporativa end-to-end. Digitalización de procesos operativos y modelado de bases de datos relacionales.",
        tecnologias: ["Full Stack", "PostgreSQL", "MySQL", "Arquitectura"] 
      },
      {
        nombre: "Menú Digital & BoxPoint",
        url: "#",
        descripcion: "SaaS para sector gastronómico con integración de API WhatsApp y sistema de reservas para complejo turístico.",
        tecnologias: ["Frontend", "Backend", "API Integration"]
      },
      {
        nombre: "Polar-Chat",
        url: "https://github.com/emicesaretti12",
        descripcion: "Chatbot interactivo. Arquitectura modular separando la lógica en componentes independientes y diseño Bento Grid.",
        tecnologias: ["Vanilla JS", "CSS Grid", "Componentes"]
      }
    ]
  },
  software: {
    id: "software",
    titulo: "Ingeniería & Automatización",
    descripcion: "Scripts, gestión de datos y optimización de flujos operativos.",
    color: "#a855f7", 
    bgColor: "#140524", 
    items: [
      {
        nombre: "Gestión de Gimnasios",
        url: "#",
        descripcion: "Backend robusto y panel administrativo. Automatización del flujo de registro reduciendo el tiempo operativo en un 50%.",
        tecnologias: ["Python", "SQLite/MySQL", "Data Tuning"]
      },
      {
        nombre: "Infraestructura UTN",
        url: "#",
        descripcion: "Administración de red, entornos virtualizados (Debian) y scripts en Bash/Python para mantenimiento de servicios.",
        tecnologias: ["Linux", "Networking", "Bash", "VirtualBox"]
      }
    ]
  },
  ciberseguridad: {
    id: "ciberseguridad",
    titulo: "DevSecOps & Ciberseguridad",
    descripcion: "Auditorías, protección de datos y mitigación de vulnerabilidades.",
    color: "#10b981", 
    bgColor: "#021c13", 
    items: [
      {
        nombre: "Auditoría & Pentesting",
        url: "#",
        descripcion: "Implementación de protocolos de seguridad integrados, cifrado de datos y técnicas de mitigación e ingeniería social.",
        tecnologias: ["Kali Linux", "Pentesting", "DevSecOps"]
      }
    ]
  }
};