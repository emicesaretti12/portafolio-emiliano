export const About = () => {
  return `
    <section id="about" class="about-section reveal section-observer" data-bg="#050505">
      <div class="about-grid">
        <div class="about-text">
          <h2 style="font-size: 3rem; margin-bottom: 1rem;">Sobre Mí</h2>
          <p style="font-size: 1.2rem; color: #d4d4d8; margin-bottom: 2rem;">
            Resolviendo problemas complejos a través de lógica estructurada y código limpio. Buscando constantemente el punto de encuentro entre el rendimiento del software y la experiencia del usuario.
          </p>
          <a href="./cv.html" class="cta-button cv-button hover-lift">
            Ver Currículum Interactivo &rarr;
          </a>
        </div>
        
        <div class="terminal-window hover-lift">
          <div class="terminal-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
            <div class="terminal-title">emiliano@portfolio: ~</div>
          </div>
          <div class="terminal-body">
            <p><span class="prompt">~/skills $</span> cat perfil.txt</p>
            <p class="terminal-output text-glow">
              > Estudiante de Ingeniería en Sistemas (UTN FRC)<br>
              > Estudiante de Ciencias de la Computación (Siglo 21)<br>
              > Desarrollador Full Stack<br>
              > Apasionado por la Ciberseguridad y automatización<br>
            </p>
            <p><span class="prompt">~/status $</span> echo $CURRENT_GOAL</p>
            <p class="terminal-output text-glow">> Buscando rol como Full Stack Developer / Pasantía.</p>
            <p><span class="prompt blink">_</span></p>
          </div>
        </div>
      </div>
    </section>
  `;
};