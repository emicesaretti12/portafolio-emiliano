export const portfolioData = {
  web: {
    id: "web",
    titulo: "Desarrollo Web",
    descripcion: "Arquitecturas frontend y backend escalables.",
    color: "#06b6d4", // Cyan
    items: [
      {
        nombre: "PlenoMax",
        url: "https://plenomax.com.ar",
        descripcion: "Plataforma e-commerce institucional para fábrica de pinturas. Optimizada para conversión.",
        tecnologias: ["HTML", "CSS", "JS", "UI/UX"] 
      },
      {
        nombre: "EliCeramica",
        url: "https://eliceramica.com",
        descripcion: "Sitio web corporativo y catálogo digital inmersivo para productos cerámicos.",
        tecnologias: ["Frontend", "Performance", "Responsive"] 
      },
      {
        nombre: "Polar Chat",
        url: "#",
        descripcion: "Interfaz de chat interactiva con diseño Dark/Ice y arquitectura basada en componentes.",
        tecnologias: ["Vanilla JS", "CSS Grid", "Componentes"]
      }
    ]
  },
  software: {
    id: "software",
    titulo: "Ingeniería de Software",
    descripcion: "Sistemas corporativos y automatización de procesos.",
    color: "#a855f7", // Purple
    items: [
      {
        nombre: "Sistema LE&CO",
        url: "#",
        descripcion: "Plataforma integral para el registro, control y auditoría automatizada de ingresos de personal.",
        tecnologias: ["Python", "Bases de Datos", "Automatización"]
      }
    ]
  },
  ciberseguridad: {
    id: "ciberseguridad",
    titulo: "Ciberseguridad",
    descripcion: "Análisis, OSINT y auditorías ofensivas.",
    color: "#10b981", // Emerald Green
    items: [
      {
        nombre: "OSINT Geolocation (PoC)",
        url: "#",
        descripcion: "Prueba de concepto. Desarrollo de herramienta para obtener ubicaciones físicas mediante ingeniería social avanzada.",
        tecnologias: ["Python", "Ingeniería Social", "Networking"]
      }
    ]
  }
};