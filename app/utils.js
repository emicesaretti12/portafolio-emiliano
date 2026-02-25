// Función para el efecto de texto desencriptado
export const scrambleText = (element, final text, duration = 1500) => {
  const chars = '!<>-_\\/[]{}—=+*^?#________'; // Caracteres para el efecto "hacker"
  const frameRate = 30;
  const totalFrames = (duration / 1000) * frameRate;
  let frame = 0;

  // Guardamos el estilo original
  const originalFont = window.getComputedStyle(element).fontFamily;
  const originalColor = window.getComputedStyle(element).color;

  element.style.fontFamily = 'monospace';
  element.style.color = 'var(--theme-accent)'; // Color de acento durante el efecto

  const interval = setInterval(() => {
    const progress = frame / totalFrames;
    const scrambled = final text
      .split('')
      .map((char, index) => {
        // A medida que progresa, muestra más caracteres reales
        if (index / final text.length < progress) {
          return char;
        }
        // Si no, muestra un carácter random
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');

    element.innerText = scrambled;
    frame++;

    if (frame > totalFrames) {
      clearInterval(interval);
      element.innerText = final text;
      // Restaurar estilos originales suavemente
      element.style.fontFamily = originalFont;
      element.style.color = originalColor;
    }
  }, 1000 / frameRate);
};