import { portfolioData } from '../data/portfolio.js';
import { Navbar } from '../components/Navbar.js';
import { Hero } from '../components/Hero.js';
import { About } from '../components/About.js';
import { CategorySection } from '../components/CategorySection.js';

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('app');
  const dynamicBg = document.getElementById('dynamic-bg');
  
  // 1. RENDERIZAR INTERFAZ
  let categoriesHtml = '';
  for (const key in portfolioData) {
    categoriesHtml += CategorySection(portfolioData[key]);
  }

  appContainer.innerHTML = `
    ${Navbar()}
    <main class="container">
      ${Hero()}
      ${About()}
      ${categoriesHtml}
    </main>
  `;

  // 2. EFECTO 3D TILT SUAVIZADO (Solo para Web)
  const tiltCards = document.querySelectorAll('.tilt-card');
  
  tiltCards.forEach(card => {
    const glare = card.querySelector('.glare');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Matemáticas Suavizadas (Nivel Senior). Multiplicador bajo (4 en vez de 12)
      const rotateX = ((y - centerY) / centerY) * -4; 
      const rotateY = ((x - centerX) / centerX) * 4;
      
      card.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;

      if (glare) {
        const percentageX = (x / rect.width) * 100;
        const percentageY = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${percentageX}% ${percentageY}%, rgba(255,255,255,0.08) 0%, transparent 60%)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(2000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      card.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
      if (glare) glare.style.opacity = '0';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
      if (glare) glare.style.opacity = '1';
    });
  });

  // 3. COLOR DE FONDO DINÁMICO
  const sections = document.querySelectorAll('.section-observer');
  const bgObserverOptions = { threshold: 0.35 };

  const bgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const newColor = entry.target.getAttribute('data-bg');
        if (newColor) dynamicBg.style.backgroundColor = newColor;
      }
    });
  }, bgObserverOptions);

  sections.forEach(sec => bgObserver.observe(sec));

  // 4. ANIMACIONES REVEAL EN CASCADA
  const revealElements = document.querySelectorAll('.reveal');
  const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Quitar el delay después de la animación para evitar lag en hover
        setTimeout(() => {
          entry.target.style.transitionDelay = '0s';
        }, 1000);
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(el => revealOnScroll.observe(el));
});