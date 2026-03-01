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
        imagenes: ["https://res.cloudinary.com/dyt92aarw/image/upload/v1772111797/plenomax-home_te9id7.jpg", "https://res.cloudinary.com/dyt92aarw/image/upload/v1772111797/plenomax-catalogo_b31oqs.jpg"] 
      },
      {
        nombre: "eliceramica",
        url: "#",
        descripcion: "Ecommerce y catalogo web",
        tecnologias: ["Frontend", "Backend", "APIs"],
        imagenes: ["https://res.cloudinary.com/dyt92aarw/image/upload/v1772381158/eliceramica-home_xoravl.jpg", "https://res.cloudinary.com/dyt92aarw/image/upload/v1772381158/eliceramica-tienda_cssudu.jpg"]
      },
      {
        nombre: "Polar-Chat",
        url: "https://github.com/emicesaretti12",
        descripcion: "Chatbot modular interactivo con diseño Bento Grid.",
        tecnologias: ["Vanilla JS", "CSS Grid", "Componentes"],
        imagenes: ["https://res.cloudinary.com/dyt92aarw/image/upload/v1772115382/polar-home_rbkiod.jpg", "https://res.cloudinary.com/dyt92aarw/image/upload/v1772115382/polar-2_g2mlqk.jpg"]
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
        nombre: "Logica de Localizador mediante ingenieria",
        url: "#",
        descripcion: "localicador mediante ingenieria , registra las ubicaciones en .txt",
        tecnologias: ["Python", "MySQL", "Data Tuning"],
        imagenes: ["https://res.cloudinary.com/dyt92aarw/image/upload/v1772382979/Captura_de_pantalla_2026-03-01_132243_lh5vau.jpg", "https://res.cloudinary.com/dyt92aarw/image/upload/v1772383069/Captura_de_pantalla_2026-03-01_133612_ihuo2i.jpg"]
      },
      {
        nombre: "software de control horario",
        url: "#",
        descripcion: " registra, almacena y gestiona los horarios de entrada y salida del personal, permitiendo llevar un control preciso de la jornada laboral.",
        tecnologias: ["Linux", "Networking", "VirtualBox"],
        imagenes: ["https://res.cloudinary.com/dyt92aarw/image/upload/v1772381994/Captura_de_pantalla_166_uca0r4.png", "https://res.cloudinary.com/dyt92aarw/image/upload/v1772381998/Captura_de_pantalla_167_ofljm3.png"]
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