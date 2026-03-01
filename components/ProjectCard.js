export const ProjectCard = (proyecto, categoryId, index) => {
  const techTags = proyecto.tecnologias
    .map(tech => `<span class="tech-tag">${tech}</span>`)
    .join('');

  const isWeb = categoryId === 'web';
  // Mantenemos las físicas de inclinación o elevación
  const interactionClass = isWeb ? 'tilt-card' : 'hover-lift';
  const glareHtml = isWeb ? `<div class="glare"></div>` : '';
  const delay = index * 0.15;

  // Validación de imágenes
  if (!proyecto.imagenes || proyecto.imagenes.length < 2) {
    console.error(`El proyecto ${proyecto.nombre} necesita al menos 2 imágenes.`);
    return ''; // O renderizar una tarjeta de error/placeholder
  }

  return `
    <article class="bento-card ${interactionClass} reveal full-image-card" style="transition-delay: ${delay}s">
      ${glareHtml}
      
      <div class="card-background">
        <img src="${proyecto.imagenes[0]}" alt="${proyecto.nombre} vista principal" loading="lazy" class="base-img">
        <img src="${proyecto.imagenes[1]}" alt="${proyecto.nombre} vista secundaria" loading="lazy" class="hover-img">
      </div>

      <div class="card-overlay">
        <div class="overlay-content">
          <div class="card-header-block">
            <h3>${proyecto.nombre}</h3>
            <div class="tech-stack">
              ${techTags}
            </div>
          </div>
          
          <div class="card-details-block">
            <p>${proyecto.descripcion}</p>
            <a href="${proyecto.url}" target="_blank" class="card-link" rel="noopener noreferrer">
              Ver Proyecto &rarr;
            </a>
          </div>
        </div>
      </div>
    </article>
  `;
};