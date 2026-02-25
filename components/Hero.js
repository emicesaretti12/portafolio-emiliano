export const Hero = () => {
  return `
    <section class="hero" id="hero-section">
      <div class="hero-content">
        <div class="reveal-mask">
          <h1>Emiliano.</h1>
        </div>
        <div class="reveal-mask">
          <h1><span class="gradient-text">Ingeniero en Sistemas</span></h1>
        </div>
        <div class="reveal-mask delay-1">
          <p class="hero-subtitle">
            Desarrollador Full Stack. Transformando lógica compleja en arquitecturas de software robustas y experiencias digitales inmersivas. Estudiante avanzado UTN FRC.
          </p>
        </div>
        
        <div class="hero-actions reveal-fade delay-2">
          <a href="./assets/CV_Emiliano.pdf" download="CV_Emiliano_FullStack.pdf" class="btn-primary hover-lift">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-right: 8px; vertical-align: middle;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Descargar CV (PDF)
          </a>
          <a href="#about" class="btn-secondary hover-lift">
            Conóceme &rarr;
          </a>
        </div>
      </div>
    </section>
  `;
};