export const portfolioData = {
  web: {
    id: "web",
    titulo: "Desarrollo Web",
    descripcion: "Arquitecturas escalables y experiencias de usuario inmersivas.",
    color: "#38bdf8", // Sky Blue
    bgColor: "#041421", // Fondo ultra oscuro tintado de azul
    items: [
      {
        nombre: "PlenoMax",
        url: "https://plenomax.com.ar",
        descripcion: "Plataforma e-commerce institucional para fábrica de pinturas. Optimizada para rendimiento y conversión comercial.",
        tecnologias: ["Vanilla JS", "CSS Grid", "Optimización UX"] 
      },
      {
        nombre: "Polar Chat",
        url: "#",
        descripcion: "Interfaz de chat interactiva con diseño Dark/Ice. Arquitectura sólida basada en componentes modulares.",
        tecnologias: ["JavaScript", "Arquitectura CSS", "UI/UX"]
      },
      {
        nombre: "Menú Digital Dinámico",
        url: "#",
        descripcion: "Sistema de menús digitales interactivos desarrollado para el sector gastronómico en Sierras Chicas.",
        tecnologias: ["Frontend", "Gestión de Datos", "Mobile First"]
      }
    ]
  },
  software: {
    id: "software",
    titulo: "Ingeniería de Software",
    descripcion: "Sistemas corporativos robustos y automatización de procesos lógicos.",
    color: "#a855f7", // Purple
    bgColor: "#140524", // Fondo ultra oscuro tintado de violeta
    items: [
      {
        nombre: "Sistema LE&CO",
        url: "#",
        descripcion: "Software integral para el registro, control automatizado y auditoría de ingresos y salidas de personal corporativo.",
        tecnologias: ["Python", "Bases de Datos", "Automatización", "Sistemas"]
      }
    ]
  },
  ciberseguridad: {
    id: "ciberseguridad",
    titulo: "Ciberseguridad",
    descripcion: "Análisis de vulnerabilidades, OSINT y desarrollo de auditorías ofensivas.",
    color: "#10b981", // Emerald Green
    bgColor: "#021c13", // Fondo ultra oscuro tintado de verde
    items: [
      {
        nombre: "OSINT Geolocation (PoC)",
        url: "#",
        descripcion: "Prueba de concepto técnica. Herramienta desarrollada para obtener ubicaciones físicas precisas mediante técnicas de ingeniería social.",
        tecnologias: ["Python", "Ingeniería Social", "Networking", "OSINT"]
      }
    ]
  }
};