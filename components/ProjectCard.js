export const ProjectCard = (proyecto, categoryId, index) => {
  const techTags = proyecto.tecnologias
    .map(tech => `<span class="tech-tag">${tech}</span>`)
    .join('');

  const isWeb = categoryId === 'web';
  const interactionClass = isWeb ? 'tilt-card' : 'hover-lift';
  const glareHtml = isWeb ? `<div class="glare"></div>` : '';
  const delay = index * 0.15;

  // Lógica de presentación web superpuesta (Awwwards style)
  let imagesHtml = '';
  if (proyecto.imagenes && proyecto.imagenes.length > 0) {
    imagesHtml = `
      <div class="web-showcase">
        <div class="browser-mockup main-mockup">
          <div class="browser-bar">
            <span></span><span></span><span></span>
          </div>
          <img src="${proyecto.imagenes[0]}" alt="${proyecto.nombre} presentación principal" loading="lazy" class="mockup-img">
        </div>
        
        ${proyecto.imagenes[1] ? `
        <div class="browser-mockup secondary-mockup">
          <img src="${proyecto.imagenes[1]}" alt="${proyecto.nombre} detalle secundario" loading="lazy" class="mockup-img">
        </div>` : ''}
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