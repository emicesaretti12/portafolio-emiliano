export const ProjectCard = (proyecto) => {
  const techTags = proyecto.tecnologias
    .map(tech => `<span class="tech-tag">${tech}</span>`)
    .join('');

  return `
    <article class="bento-card tilt-card reveal">
      <div class="card-content">
        <h3>${proyecto.nombre}</h3>
        <p>${proyecto.descripcion}</p>
        <div class="tech-stack">
          ${techTags}
        </div>
      </div>
      <a href="${proyecto.url}" target="_blank" class="card-link" rel="noopener noreferrer">
        Explorar Código / Demo
      </a>
    </article>
  `;
};