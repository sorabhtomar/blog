export default ({ children }) =>
  <footer>
    {children}

    <nav>
      <a href='mailto:jlobitu@gmail.com'>© 2017 — jlobos</a>
      <a href='/politica-de-privacidad'>Política de Privacidad</a>
    </nav>

    <style jsx>{`
      nav {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 768px;
        padding: 2rem 1rem;
      }

      a {
        color: var(--text-color);
        text-decoration: none;
      }

      a:hover {
        color: var(--soft-color);
      }
    `}</style>
  </footer>
