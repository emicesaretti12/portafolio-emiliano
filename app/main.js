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

  // 2. EFECTO 3D TILT + DINAMIC GLARE
  const tiltCards = document.querySelectorAll('.tilt-card');
  
  tiltCards.forEach(card => {
    const glare = card.querySelector('.glare');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Rotación 3D (Física)
      const rotateX = ((y - centerY) / centerY) * -12; 
      const rotateY = ((x - centerX) / centerX) * 12;
      
      card.style.transform = `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

      // Cálculo del brillo interactivo (Iluminación)
      // Mueve el centro del gradiente radial basado en la posición del ratón
      if (glare) {
        const percentageX = (x / rect.width) * 100;
        const percentageY = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${percentageX}% ${percentageY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      card.style.transition = 'transform 0.5s ease';
      if (glare) glare.style.opacity = '0';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
      if (glare) glare.style.opacity = '1';
    });
  });

  // 3. BACKGROUND COLOR CHANGE ON SCROLL
  const sections = document.querySelectorAll('.section-observer');
  
  const bgObserverOptions = {
    threshold: 0.4 // Se activa cuando el 40% de la sección está en pantalla
  };

  const bgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Obtiene el color de fondo definido en el data-attribute
        const newColor = entry.target.getAttribute('data-bg');
        if (newColor) {
          dynamicBg.style.backgroundColor = newColor;
        }
      }
    });
  }, bgObserverOptions);

  sections.forEach(sec => bgObserver.observe(sec));

  // 4. SCROLL REVEAL (Aparición suave de elementos)
  const revealElements = document.querySelectorAll('.reveal');
  const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(el => revealOnScroll.observe(el));
});