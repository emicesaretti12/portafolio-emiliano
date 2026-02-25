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

  // 2. PARALLAX SCROLL (Físicas Senior para el Hero)
  const heroSection = document.getElementById('hero-section');
  
  window.addEventListener('scroll', () => {
    // Usamos requestAnimationFrame implícito vía CSS transform para alto rendimiento
    const scrollY = window.scrollY;
    if (heroSection && scrollY < window.innerHeight) {
      // Mueve el Hero hacia abajo a la mitad de la velocidad del scroll
      heroSection.style.transform = `translate3d(0, ${scrollY * 0.4}px, 0)`;
      // Lo desvanece sutilmente
      heroSection.style.opacity = 1 - (scrollY * 0.0015);
    }
  });

  // 3. EFECTO 3D TILT SUAVIZADO (Solo para Web)
  const tiltCards = document.querySelectorAll('.tilt-card');
  
  tiltCards.forEach(card => {
    const glare = card.querySelector('.glare');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
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
      // Animación de retorno elástica y elegante
      card.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      if (glare) glare.style.opacity = '0';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
      if (glare) glare.style.opacity = '1';
    });
  });

  // 4. COLOR DE FONDO DINÁMICO
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

  // 5. ANIMACIONES REVEAL EN CASCADA CON CUBIC-BEZIER
  const revealElements = document.querySelectorAll('.reveal');
  const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Asegura que use la curva de animación premium
        entry.target.style.transition = 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)';
        entry.target.classList.add('active');
        
        setTimeout(() => {
          entry.target.style.transitionDelay = '0s';
        }, 1000);
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(el => revealOnScroll.observe(el));
});