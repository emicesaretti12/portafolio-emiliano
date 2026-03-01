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
        descripcion: "Plataforma web corporativa end-to-end. Digitalización de procesos.",
        tecnologias: ["Full Stack", "PostgreSQL", "Arquitectura"],
        // Asegúrate de tener estas imágenes 430x600 en /assets
        imagenes: ["./assets/plenomax-1.jpg", "./assets/plenomax-2.jpg"] 
      },
      {
        nombre: "Menú Digital & BoxPoint",
        url: "#",
        descripcion: "SaaS gastronómico e integración WhatsApp. Reservas BoxPoint.",
        tecnologias: ["Frontend", "Backend", "APIs"],
        imagenes: ["./assets/menu-1.jpg", "./assets/menu-2.jpg"]
      },
      {
        nombre: "Polar-Chat",
        url: "https://github.com/emicesaretti12",
        descripcion: "Chatbot modular interactivo con diseño Bento Grid.",
        tecnologias: ["Vanilla JS", "CSS Grid", "Componentes"],
        imagenes: ["./assets/polar-1.jpg", "./assets/polar-2.jpg"]
      }
    ]
  },
  software: {
    id: "software",
    titulo: "Ingeniería & Automatización",
    descripcion: "Scripts, gestión de datos y optimización operativa.",
    color: "#a855f7", 
    bgColor: "#140524", 
    items: [
      {
        nombre: "Gestión de Gimnasios",
        url: "#",
        descripcion: "Backend Python. Automatización reduciendo tiempo operativo 50%.",
        tecnologias: ["Python", "MySQL", "Data Tuning"],
        imagenes: ["./assets/gym-1.jpg", "./assets/gym-2.jpg"]
      },
      {
        nombre: "Infraestructura UTN",
        url: "#",
        descripcion: "Administración de red, virtualización Debian y scripts Bash/Python.",
        tecnologias: ["Linux", "Networking", "VirtualBox"],
        imagenes: ["./assets/utn-1.jpg", "./assets/utn-2.jpg"]
      }
    ]
  },
  ciberseguridad: {
    id: "ciberseguridad",
    titulo: "DevSecOps & Ciberseguridad",
    descripcion: "Auditorías, protección de datos y mitigación.",
    color: "#10b981", 
    bgColor: "#021c13", 
    items: [
      {
        nombre: "Auditoría & Pentesting",
        url: "#",
        descripcion: "Protocolos de seguridad integrados, cifrado y OSINT.",
        tecnologias: ["Kali Linux", "Pentesting", "DevSecOps"],
        imagenes: ["./assets/ciber-1.jpg", "./assets/ciber-2.jpg"]
      }
    ]
  }
};