import { portfolioData } from '../data/portfolio.js';
import { Navbar } from '../components/Navbar.js';
import { Hero } from '../components/Hero.js';
import { About } from '../components/About.js';
import { CategorySection } from '../components/CategorySection.js';

// --- UTILIDAD: EFECTO HACKER SCRAMBLE ---
const scrambleText = (element, finalText, duration = 1200) => {
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  const frameRate = 30;
  const totalFrames = (duration / 1000) * frameRate;
  let frame = 0;

  const originalFont = window.getComputedStyle(element).fontFamily;
  const originalColor = window.getComputedStyle(element).color;

  element.style.fontFamily = 'monospace';
  element.style.color = '#3b82f6'; // Color azul tech durante la animación

  const interval = setInterval(() => {
    const progress = frame / totalFrames;
    const scrambled = finalText
      .split('')
      .map((char, index) => {
        if (index / finalText.length < progress) return char;
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');

    element.innerText = scrambled;
    frame++;

    if (frame > totalFrames) {
      clearInterval(interval);
      element.innerText = finalText;
      element.style.fontFamily = originalFont;
      element.style.color = originalColor;
    }
  }, 1000 / frameRate);
};

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

  // 2. EFECTO SCRAMBLE EN EL HERO AL CARGAR
  const heroTitleName = document.querySelector('.hero h1:nth-child(1)');
  const heroTitleRole = document.querySelector('.hero h1:nth-child(2) .gradient-text');
  
  if (heroTitleName) {
    setTimeout(() => scrambleText(heroTitleName, 'Emiliano.', 1500), 300);
  }
  if (heroTitleRole) {
    setTimeout(() => scrambleText(heroTitleRole, 'Ingeniero en Sistemas', 1500), 1000);
  }

  // 3. PARALLAX SCROLL OPTIMIZADO (60 FPS)
  const heroSection = document.querySelector('.hero');
  let ticking = false;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    if (!ticking && heroSection && scrollY < window.innerHeight) {
      window.requestAnimationFrame(() => {
        // Mueve el Hero más lento que el scroll normal para dar profundidad
        heroSection.style.transform = `translate3d(0, ${scrollY * 0.35}px, 0)`;
        heroSection.style.opacity = 1 - (scrollY * 0.0015);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // 4. FÍSICAS 3D Y GLARE EN TARJETAS BENTO
  const bentoCards = document.querySelectorAll('.bento-card');
  
  bentoCards.forEach(card => {
    // Si la tarjeta no tiene el div de glare (brillo), se lo inyectamos dinámicamente
    let glare = card.querySelector('.glare');
    if (!glare) {
      glare = document.createElement('div');
      glare.classList.add('glare');
      card.insertBefore(glare, card.firstChild);
    }

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Matemáticas muy sutiles para el cabeceo 3D (divisor alto = movimiento suave)
      const rotateX = ((y - centerY) / centerY) * -3; 
      const rotateY = ((x - centerX) / centerX) * 3;
      
      card.style.transform = `perspective(2000px) translateY(-10px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      // Posicionamos el brillo exactamente donde está el mouse
      const percentageX = (x / rect.width) * 100;
      const percentageY = (y / rect.height) * 100;
      glare.style.background = `radial-gradient(circle at ${percentageX}% ${percentageY}%, rgba(255,255,255,0.08) 0%, transparent 60%)`;
      glare.style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
      // Retorno a la posición original
      card.style.transform = `perspective(2000px) translateY(0) scale(1) rotateX(0deg) rotateY(0deg)`;
      glare.style.opacity = '0';
    });
  });

  // 5. COLOR DE FONDO DINÁMICO AL SCROLLEAR
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

  // 6. ANIMACIONES REVEAL Y SCRAMBLE EN SECCIONES
  const revealElements = document.querySelectorAll('.reveal');
  const revealOptions = { 
    threshold: 0.15, 
    rootMargin: "0px 0px -50px 0px" 
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');

        // Buscamos si hay un título H2 dentro de la sección revelada
        const sectionTitle = entry.target.querySelector('h2');
        if (sectionTitle && !entry.target.classList.contains('scrambled')) {
            // Guardamos el texto original, ejecutamos scramble y lo marcamos para no repetirlo
            const originalText = sectionTitle.innerText;
            scrambleText(sectionTitle, originalText, 1000);
            entry.target.classList.add('scrambled');
        }
        
        // Dejamos de observar para que la animación de entrada ocurra solo una vez
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(el => revealOnScroll.observe(el));
});