// Packages
import Link from 'next/link'

export default () =>
  <div>
    <nav>
      <Link prefetch href='/'>
        <a href='/'>Home</a>
      </Link>
      <a>About</a>
      <a>Fables</a>
      <a>Search</a>
      <a>Contact</a>
      <a>Subscribe</a>
      <a>Projects</a>
    </nav>

    <style jsx>{`
      nav {
        align-items: center;
        display: flex;
        flex-direction: column;
        padding-top: 2rem;
      }

      .notifications {
        margin-top: 100%;
      }

      a {
        font-size: var(--font-size-header);
        padding-bottom: 1rem;
        display: block;
      }
    `}</style>
  </div>
