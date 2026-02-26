export const ProjectCard = (proyecto, categoryId, index) => {
  const techTags = proyecto.tecnologias
    .map(tech => `<span class="tech-tag">${tech}</span>`)
    .join('');

  // Lógica Senior: Web tiene 3D (tilt-card), las demás elevación sutil.
  const isWeb = categoryId === 'web';
  const interactionClass = isWeb ? 'tilt-card' : 'hover-lift';
  const glareHtml = isWeb ? `<div class="glare"></div>` : '';
  
  // Staggered Animation Delay
  const delay = index * 0.15;

  // Renderizado dinámico de las 2 imágenes
  let imagesHtml = '';
  if (proyecto.imagenes && proyecto.imagenes.length === 2) {
    imagesHtml = `
      <div class="card-images">
        <div class="img-wrapper">
          <img src="${proyecto.imagenes[0]}" alt="${proyecto.nombre} vista 1" loading="lazy" class="card-img">
        </div>
        <div class="img-wrapper">
          <img src="${proyecto.imagenes[1]}" alt="${proyecto.nombre} vista 2" loading="lazy" class="card-img">
        </div>
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