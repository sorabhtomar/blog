export default () =>
  <nav>
    <ul>
      <li>
        <a href='https://twitter.com/jlobitu' target='_black'>
          TWITTER
        </a>
      </li>
      <li>
        <a href='https://github.com/jlobos' target='_black'>
          GITHUB
        </a>
      </li>
      <li>
        <a href='mailto:jlobitu@gmail.com'>EMAIL</a>
      </li>
    </ul>

    <style jsx>{`
      nav {
        margin-left: auto;
        margin-right: 1rem;
      }

      a {
        color: var(--text-color);
        transition: color 0.2s ease;
        vertical-align: top;
      }

      a:hover {
        color: var(--high-color);
      }

      ul {
        line-height: 0;
        list-style-type: none;
        padding: 0;
      }

      li:last-child {
        margin: 0;
      }

      li {
        display: inline;
        margin-right: 1rem;
      }
    `}</style>
  </nav>
