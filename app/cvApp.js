import { cvData } from '../data/cvData.js';

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('cv-app');

  const generateTimelineItems = (items) => {
    return items.map((item) => `
      <div class="timeline-item reveal-timeline">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
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
        <h1>Currículum Vitae.</h1>
        <p style="font-size: 1.25rem; color: #a1a1aa;">Trayectoria técnica y formación académica.</p>
      </header>

      <h2 class="section-title reveal-timeline">Experiencia Técnica</h2>
      <div class="timeline">
        <div class="timeline-progress" id="progress-line-1"></div>
        ${generateTimelineItems(cvData.experience)}
      </div>

      <h2 class="section-title reveal-timeline">Formación Académica</h2>
      <div class="timeline">
        <div class="timeline-progress" id="progress-line-2"></div>
        ${generateTimelineItems(cvData.education)}
      </div>
    </main>
  `;

  // --- ANIMACIÓN DE APARICIÓN PERFECTA ---
  const revealElements = document.querySelectorAll('.reveal-timeline');
  
  // rootMargin de -10% asegura que el elemento suba un poco en la pantalla antes de aparecer
  const revealOptions = { 
    threshold: 0, 
    rootMargin: "0px 0px -10% 0px" 
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // No dejamos de observar para que la animación no se repita, queda fija
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(el => revealOnScroll.observe(el));

  // --- LÍNEA DE LUZ DINÁMICA AL SCROLL ---
  const timelines = document.querySelectorAll('.timeline');
  
  // Usamos requestAnimationFrame implícito en el evento scroll para rendimiento 60fps
  window.addEventListener('scroll', () => {
    timelines.forEach((timeline) => {
      const progressLine = timeline.querySelector('.timeline-progress');
      if (!progressLine) return;

      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Cálculo preciso: la línea llega hasta donde está el centro de la pantalla
      let drawHeight = (windowHeight * 0.6) - rect.top; 
      
      if (drawHeight < 0) drawHeight = 0;
      if (drawHeight > rect.height) drawHeight = rect.height;
      
      progressLine.style.height = `${drawHeight}px`;
    });
  }, { passive: true }); // passive: true optimiza el rendimiento del scroll
});