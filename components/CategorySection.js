import { ProjectCard } from './ProjectCard.js';

export const CategorySection = (categoria) => {
  // Iteramos sobre los proyectos de la categoría para crear sus tarjetas
  const cardsHtml = categoria.items
    .map(item => ProjectCard(item))
    .join('');

  return `
    <section id="${categoria.id}" class="category-section">
      <div class="category-header">
        <h2>${categoria.titulo}</h2>
        <p>${categoria.descripcion}</p>
      </div>
      <div class="bento-grid">
        ${cardsHtml}
      </div>
    </section>
  `;
};