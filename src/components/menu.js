// Components
import Twitter from '../components/svg/twitter'
import GitHub from '../components/svg/github'

export default ({ pathname }) =>
  <div>
    <nav>
      <ul>
        <li>
          <a href='/' className={pathname === '/' && 'press'}>
            Home
          </a>
        </li>
        <li>
          <a href='/contacto' className={pathname === '/contacto' && 'press'}>
            Contacto
          </a>
        </li>
        <li className='right'>
          <a href='https://twitter.com/jlobitu' target='__black'>
            <Twitter height={16} width={16} />
          </a>
        </li>
        <li>
          <a href='https://github.com/jlobos' target='__black'>
            <GitHub height={16} width={16} />
          </a>
        </li>
      </ul>
    </nav>

    <style jsx>{`
      nav {
        box-shadow: inset 0 -2px 0 -1px rgba(0, 0, 0, 0.15);
        padding: 1rem;
      }

      ul {
        margin: 0 auto;
        max-width: 768px;
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

      .right {
        margin-left: auto;
      }

      a {
        color: var(--high-color);
        font-size: .9rem;
        text-transform: uppercase;
        vertical-align: top;
      }

      a:hover {
        color: var(--soft-color);
      }

      .press {
        color: var(--soft-color);
      }
    `}</style>
  </div>
