import { portfolioData } from '../data/portfolio.js';
import { Navbar } from '../components/Navbar.js';
import { Hero } from '../components/Hero.js';
import { CategorySection } from '../components/CategorySection.js';

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('app');
  
  // 1. RENDERIZAR INTERFAZ
  let categoriesHtml = '';
  for (const key in portfolioData) {
    categoriesHtml += CategorySection(portfolioData[key]);
  }

  appContainer.innerHTML = `
    ${Navbar()}
    <main class="container">
      ${Hero()}
      ${categoriesHtml}
    </main>
  `;

  // 2. EFECTO 3D TILT PARA LAS TARJETAS (Vanilla JS)
  const tiltCards = document.querySelectorAll('.tilt-card');
  
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      // Posición del mouse dentro de la tarjeta
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Centro de la tarjeta
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Cálculo de rotación (máximo 15 grados)
      const rotateX = ((y - centerY) / centerY) * -15; 
      const rotateY = ((x - centerX) / centerX) * 15;
      
      // Aplicar transformación 3D
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    // Resetear al salir
    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      // Transición suave al volver al centro
      card.style.transition = 'transform 0.5s ease';
    });

    // Quitar la transición durante el movimiento para que no tenga lag
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });
  });

  // 3. SCROLL REVEAL (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOptions = {
    threshold: 0.15, // Se activa cuando el 15% del elemento es visible
    rootMargin: "0px 0px -50px 0px"
  };

  const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // Dejar de observar una vez que ya apareció
    });
  }, revealOptions);

  revealElements.forEach(el => {
    revealOnScroll.observe(el);
  });
});