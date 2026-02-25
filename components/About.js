export const About = () => {
  return `
    <section id="about" class="about-section section-observer" data-bg="#050505">
      <div class="category-header reveal">
        <h2>Detrás del Código</h2>
        <p>Arquitectura de datos, seguridad y rendimiento medible.</p>
      </div>

      <div class="about-bento-grid">
        <div class="bento-card hover-lift reveal delay-1 bio-card">
          <div class="card-content">
            <h3 style="font-size: 2rem; margin-bottom: 1.5rem; color: #fff;">Soy Emiliano.</h3>
            <p style="font-size: 1.1rem; color: #d4d4d8; line-height: 1.8; margin-bottom: 2rem;">
              Desarrollador Full Stack y estudiante de Ingeniería en Sistemas. Me especializo en arquitecturas modulares, modelado de bases de datos relacionales y automatización. Apasionado por DevSecOps, la resolución de problemas complejos y la creación de interfaces que generen un impacto directo en los objetivos del negocio.
            </p>
            <div class="about-actions">
              <a href="./assets/CV_Emiliano.pdf" download="CV_Emiliano_FullStack.pdf" class="btn-primary hover-lift">
                Descargar CV (PDF)
              </a>
              <a href="./cv.html" class="btn-secondary hover-lift interactive-link">
                Ver Timeline &rarr;
              </a>
            </div>
          </div>
        </div>

        <div class="bento-card hover-lift reveal delay-2 edu-card">
          <div class="card-content">
            <h3 style="color: #fff; margin-bottom: 1.5rem;">Competencias</h3>
            <div class="edu-item">
              <span class="edu-dot" style="background: #3b82f6;"></span>
              <div>
                <h4 style="color: #fff; font-size: 1.05rem;">Data & Optimización</h4>
                <p style="color: #a1a1aa; font-size: 0.9rem;">Query Tuning, PostgreSQL, MySQL</p>
              </div>
            </div>
            <div class="edu-item" style="margin-top: 1.5rem;">
              <span class="edu-dot" style="background: #a855f7;"></span>
              <div>
                <h4 style="color: #fff; font-size: 1.05rem;">DevSecOps & IAM</h4>
                <p style="color: #a1a1aa; font-size: 0.9rem;">Cifrado, Sanitización, Accesos</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bento-card hover-lift reveal delay-3 tech-card">
          <div class="card-content">
            <h3 style="color: #fff; margin-bottom: 1.5rem;">Core Stack</h3>
            <div class="skills-container">
              <span class="skill-pill">Python (Avanzado)</span>
              <span class="skill-pill">PostgreSQL / SQLite</span>
              <span class="skill-pill">Vanilla JS / HTML / CSS</span>
              <span class="skill-pill">Java</span>
              <span class="skill-pill">Linux (Kali/Debian)</span>
              <span class="skill-pill">Git / GitHub</span>
              <span class="skill-pill">Scrum / GCP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};