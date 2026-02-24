export const ProjectCard = (proyecto) => {
  // Generamos los spans para cada tecnología
  const techTags = proyecto.tecnologias
    .map(tech => `<span class="tech-tag">${tech}</span>`)
    .join('');

  return `
    <article class="bento-card">
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