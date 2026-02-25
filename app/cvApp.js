import { cvData } from '../data/cvData.js';

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('cv-app');

  // 1. Generar HTML del CV
  const generateTimelineItems = (items) => {
    return items.map((item) => `
      <div class="timeline-item reveal-timeline">
        <div class="timeline-dot"></div>
        <div class="timeline-content hover-lift">
          <span class="timeline-date">${item.period}</span>
          <h3 class="timeline-title">${item.title}</h3>
          <h4 class="timeline-subtitle">${item.subtitle}</h4>
          <p class="timeline-desc">${item.description}</p>
        </div>
      </div>
    `).join('');
  };

  appContainer.innerHTML = `
    <main class="cv-container">
      <header class="cv-header reveal-timeline">
        <h1>Emiliano.</h1>
        <p style="font-size: 1.5rem; color: #a1a1aa;">Ingeniero en Formación & Full Stack Developer</p>
      </header>

      <h2 class="section-title reveal-timeline">Experiencia Técnica</h2>
      <div class="timeline">
        <div class="timeline-progress" id="progress-line"></div>
        ${generateTimelineItems(cvData.experience)}
      </div>

      <h2 class="section-title reveal-timeline">Formación Académica</h2>
      <div class="timeline">
        <div class="timeline-progress" id="progress-line-2"></div>
        ${generateTimelineItems(cvData.education)}
      </div>
    </main>
  `;

  // 2. Animación de Aparición (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal-timeline');
  const revealOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, revealOptions);

  revealElements.forEach(el => revealOnScroll.observe(el));

  // 3. Dibujo Dinámico de la Línea de Tiempo
  const timelines = document.querySelectorAll('.timeline');
  
  window.addEventListener('scroll', () => {
    timelines.forEach((timeline) => {
      const progressLine = timeline.querySelector('.timeline-progress');
      if (!progressLine) return;

      // Calcular la posición del timeline en relación a la ventana
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // La línea comienza a dibujarse cuando la parte superior del timeline está en el medio de la pantalla
      let drawHeight = (windowHeight / 1.5) - rect.top; 
      
      // Limitar la altura de la línea entre 0 y el alto total del contenedor timeline
      if (drawHeight < 0) drawHeight = 0;
      if (drawHeight > rect.height) drawHeight = rect.height;
      
      progressLine.style.height = `${drawHeight}px`;
    });
  });
});