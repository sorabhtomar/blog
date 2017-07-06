export default ({ children }) =>
  <footer>
    {children}

    <nav>
      <div>
        <a href='mailto:jlobitu@gmail.com'>© 2017 — jlobos</a>
      </div>
    </nav>

    <style jsx>{`
      nav {
        display: flex;
        justify-content: center;
        padding: 2rem 1rem;
      }

      a {
        color: var(--text-color);
        text-decoration: none;
      }
    `}</style>
  </footer>
