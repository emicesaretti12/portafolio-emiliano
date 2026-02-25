export const About = () => {
  return `
    <section id="about" class="about-section section-observer" data-bg="#050505">
      <div class="category-header reveal">
        <h2>Detrás del Código</h2>
        <p>Lógica estructural combinada con diseño inmersivo.</p>
      </div>

      <div class="about-bento-grid">
        <div class="bento-card hover-lift reveal delay-1 bio-card">
          <div class="card-content">
            <h3 style="font-size: 2rem; margin-bottom: 1.5rem; color: #fff;">Soy Emiliano.</h3>
            <p style="font-size: 1.15rem; color: #d4d4d8; line-height: 1.8; margin-bottom: 2rem;">
              Desarrollador Full Stack con un enfoque obsesivo en la arquitectura limpia y el rendimiento. Mi formación académica me permite abordar los desafíos no solo como programador, sino con la mentalidad analítica de un ingeniero.
            </p>
            <div class="about-actions">
              <a href="./assets/CV_Emiliano.pdf" download="CV_Emiliano_FullStack.pdf" class="btn-primary hover-lift">
                Descargar PDF
              </a>
              <a href="./cv.html" class="btn-secondary hover-lift interactive-link">
                Ver CV Interactivo &rarr;
              </a>
            </div>
          </div>
        </div>

        <div class="bento-card hover-lift reveal delay-2 edu-card">
          <div class="card-content">
            <h3 style="color: #fff; margin-bottom: 1.5rem;">Academia</h3>
            <div class="edu-item">
              <span class="edu-dot" style="background: #3b82f6;"></span>
              <div>
                <h4 style="color: #fff; font-size: 1.1rem;">Ingeniería en Sistemas</h4>
                <p style="color: #a1a1aa; font-size: 0.9rem;">UTN FRC</p>
              </div>
            </div>
            <div class="edu-item" style="margin-top: 1.5rem;">
              <span class="edu-dot" style="background: #a855f7;"></span>
              <div>
                <h4 style="color: #fff; font-size: 1.1rem;">Ciencias de la Computación</h4>
                <p style="color: #a1a1aa; font-size: 0.9rem;">Universidad Siglo 21</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bento-card hover-lift reveal delay-3 tech-card">
          <div class="card-content">
            <h3 style="color: #fff; margin-bottom: 1.5rem;">Core Stack</h3>
            <div class="skills-container">
              <span class="skill-pill">Python</span>
              <span class="skill-pill">Vanilla JS</span>
              <span class="skill-pill">CSS Grid</span>
              <span class="skill-pill">Arquitectura Backend</span>
              <span class="skill-pill">Bases de Datos</span>
              <span class="skill-pill">Ciberseguridad (OSINT)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};