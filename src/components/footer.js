export default ({ children }) => (
  <footer>
    {children}

    <nav>
      <div>
        <a href='/'>© 2017 jlobos</a>
      </div>
      <div>
        <p>
          El código fuente del sitio web está disponible en{' '}
          <a href='https://github.com/jlobos/blog'>GitHub</a>. Todo el código y
          el contenido de este sitio se publican bajo la licencia MIT.
        </p>
      </div>
      <div>
        <a href='/politica-de-privacidad'>Política de Privacidad</a>
      </div>
    </nav>

    <style jsx>{`
      nav {
        margin: 0 auto;
        max-width: 768px;
        padding: 2rem 1rem;
        text-align: center;
      }

      div {
        padding-bottom: 1rem;
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
)
