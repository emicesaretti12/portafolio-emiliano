export const ProjectCard = (proyecto, categoryId, index) => {
  const techTags = proyecto.tecnologias
    .map(tech => `<span class="tech-tag">${tech}</span>`)
    .join('');

  // Lógica Senior: Web tiene 3D (tilt-card), las demás tienen elevación 2D (hover-lift)
  const isWeb = categoryId === 'web';
  const interactionClass = isWeb ? 'tilt-card' : 'hover-lift';
  const glareHtml = isWeb ? `<div class="glare"></div>` : '';
  
  // Staggered Animation Delay (cada tarjeta tarda 0.15s más en aparecer que la anterior)
  const delay = index * 0.15;

  return `
    <article class="bento-card ${interactionClass} reveal" style="transition-delay: ${delay}s">
      ${glareHtml}
      <div class="card-content">
        <h3>${proyecto.nombre}</h3>
        <p>${proyecto.descripcion}</p>
        <div class="tech-stack">
          ${techTags}
        </div>
      </div>
      <a href="${proyecto.url}" target="_blank" class="card-link" rel="noopener noreferrer">
        Ver Proyecto
      </a>
    </article>
  `;
};