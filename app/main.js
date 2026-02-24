import { portfolioData } from '../data/portfolio.js';
import { Navbar } from '../components/Navbar.js';
import { Hero } from '../components/Hero.js';
import { CategorySection } from '../components/CategorySection.js';
import { Footer } from '../components/Footer.js';

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('app');
  
  // Generar dinámicamente el HTML de todas las categorías
  let categoriesHtml = '';
  for (const key in portfolioData) {
    categoriesHtml += CategorySection(portfolioData[key]);
  }

  // Inyectar todo en el DOM
  appContainer.innerHTML = `
    ${Navbar()}
    <main class="container">
      ${Hero()}
      ${categoriesHtml}
    </main>
    ${Footer()}
  `;
});