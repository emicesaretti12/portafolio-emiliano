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
        nombre: "Polar-Chat",
        url: "https://polar-nu-eight.vercel.app",
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
        nombre: "software de control horario -  licencia de activacion: LECO-2025-PRO",
        url: "https://demo-le-co.vercel.app",
        descripcion: " registra, almacena y gestiona los horarios de entrada y salida del personal, permitiendo llevar un control preciso de la jornada laboral.",
        tecnologias: ["Linux", "Networking", "VirtualBox"],
        imagenes: ["https://res.cloudinary.com/dyt92aarw/image/upload/v1772381994/Captura_de_pantalla_166_uca0r4.png", "https://res.cloudinary.com/dyt92aarw/image/upload/v1772381998/Captura_de_pantalla_167_ofljm3.png"]
      }
    ]
  },
  Ecommerce: {
    id: "Ecommerce",
    titulo: "tienda web para venta de ceramica artesanal",
    descripcion: "CRM, login, panel de administración y otros módulos internos.",
    color: "#10b981", 
    bgColor: "#021c13", 
    items: [
      {
        nombre: "eliceramica",
        url: "https://eliceramica.vercel.app",
        descripcion: "frontend amigable y responsivo para mobil y web , backend apagado",
        tecnologias: ["HTML", "CSS", "JS", "React"],
        imagenes: ["https://res.cloudinary.com/dyt92aarw/image/upload/v1772383903/eliceramica_owaobh.jpg", "https://res.cloudinary.com/dyt92aarw/image/upload/v1772383901/Captura_de_pantalla_2026-03-01_134829_kparsf.jpg", "https://res.cloudinary.com/dyt92aarw/image/upload/v1772383901/Captura_de_pantalla_2026-03-01_134723_xwqb24.jpg", "https://res.cloudinary.com/dyt92aarw/image/upload/v1772383900/Captura_de_pantalla_2026-03-01_134948_jbjeae.jpg"]
      }
    ]
  }
};