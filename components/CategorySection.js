import { ProjectCard } from './ProjectCard.js';

export const CategorySection = (categoria) => {
  const cardsHtml = categoria.items
    .map(item => ProjectCard(item))
    .join('');

  return `
    <section id="${categoria.id}" class="category-section" style="--theme-color: ${categoria.color};">
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