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
        <a href='mailto:jlobitu@gmail.com' target='_black'>
          EMAIL
        </a>
      </li>
    </ul>

    <style jsx>{`
      ul {
        align-items: center;
        display: flex;
        list-style-type: none;
        padding: 0;
      }

      li {
        margin-right: 1rem;
      }

      li:last-child {
        margin-right: 0;
      }

      a {
        color: var(--text-color);
        font-size: .9rem;
        vertical-align: top;
      }

      a:hover {
        color: var(--soft-color);
      }
    `}</style>
  </nav>
