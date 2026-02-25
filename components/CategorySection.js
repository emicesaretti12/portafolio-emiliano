import { ProjectCard } from './ProjectCard.js';

export const CategorySection = (categoria) => {
  // Pasamos el ID de la categoría y el índice a la tarjeta
  const cardsHtml = categoria.items.map((item, index) => 
    ProjectCard(item, categoria.id, index)
  ).join('');

  // Configuramos colores para texto y para resplandores (glow)
  return `
    <section id="${categoria.id}" class="category-section section-observer" 
             data-bg="${categoria.bgColor}" 
             style="--theme-color: ${categoria.color}; --theme-color-glow: ${categoria.color}20;">
      <div class="category-header reveal">
        <h2>${categoria.titulo}</h2>
        <p>${categoria.descripcion}</p>
      </div>
      <div class="bento-grid">
        ${cardsHtml}
      </div>
    </section>
  `;
};