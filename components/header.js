export default () => (
  <header>
    <a className="logo" href="/">
      🐺
    </a>
    <nav>
      <a href="/">Home</a>
      <a href="mailto:jlobitu@gmail.com">Contacto</a>
      <a
        className="social"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/jlobos"
      >
        🐙
      </a>
      <a
        className="social"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/jlobitu"
      >
        🐦
      </a>
    </nav>

    <style jsx>{`
      header {
        display: flex;
        justify-content: flex-end;
        margin: 0 auto;
        max-width: 980px;
        padding: 3rem 33px;
      }

      nav a {
        margin-left: 33px;
      }

      .logo,
      .social {
        border: none;
      }

      .logo {
        margin-right: auto;
      }
    `}</style>
  </header>
)
