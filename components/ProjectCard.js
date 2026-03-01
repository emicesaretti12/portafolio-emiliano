export const ProjectCard = (proyecto, categoryId, index) => {
  const techTags = proyecto.tecnologias
    .map(tech => `<span class="tech-tag">${tech}</span>`)
    .join('');

  const isWeb = categoryId === 'web';
  const interactionClass = isWeb ? 'tilt-card' : 'hover-lift';
  const glareHtml = isWeb ? `<div class="glare"></div>` : '';
  const delay = index * 0.15;

  // Lógica de presentación web: Dos ventanas separadas 430x600
  let imagesHtml = '';
  if (proyecto.imagenes && proyecto.imagenes.length > 0) {
    const renderWindow = (imgSrc, altText) => `
      <div class="product-window hover-lift">
        <div class="window-bar">
          <div class="dot red"></div>
          <div class="dot yellow"></div>
          <div class="dot green"></div>
        </div>
        <div class="img-wrapper">
          <img src="${imgSrc}" alt="${altText}" loading="lazy" class="product-img">
        </div>
      </div>
    `;

    imagesHtml = `
      <div class="product-gallery">
        ${renderWindow(proyecto.imagenes[0], `${proyecto.nombre} presentación 1`)}
        ${proyecto.imagenes[1] ? renderWindow(proyecto.imagenes[1], `${proyecto.nombre} presentación 2`) : ''}
      </div>
    `;
  }

  return `
    <article class="bento-card ${interactionClass} reveal" style="transition-delay: ${delay}s">
      ${glareHtml}
      
      ${imagesHtml}

      <div class="card-content">
        <h3>${proyecto.nombre}</h3>
        <p>${proyecto.descripcion}</p>
        <div class="tech-stack">
          ${techTags}
        </div>
      </div>
      
      <a href="${proyecto.url}" target="_blank" class="card-link" rel="noopener noreferrer">
        Ver Proyecto &rarr;
      </a>
    </article>
  `;
};