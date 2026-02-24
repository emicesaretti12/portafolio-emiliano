export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return `
    <footer class="footer">
      <p>&copy; ${currentYear} Emiliano. Construido con Vanilla JS y CSS Grid.</p>
    </footer>
  `;
};