export default () => (
  <footer>
    <p>Copyright © 2018</p>
    <p>
      El código fuente del sitio web está disponible en{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/jlobos/blog"
      >
        GitHub
      </a>. Todo el código y el contenido de este sitio se publican bajo la
      licencia MIT.
    </p>

    <style jsx>{`
      footer {
        background-color: var(--bg-very-pale-violet);
        padding: 6rem 33px;
        text-align: center;
      }

      p {
        margin-left: auto;
        margin-right: auto;
        max-width: 600px;
      }
    `}</style>
  </footer>
)
