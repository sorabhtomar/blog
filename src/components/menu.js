// Packages
import Link from 'next/link'

export default () =>
  <div>
    <nav>
      <Link prefetch href='/'>
        <a href='/'>Home</a>
      </Link>
      <a href='#'>Fábulas</a>
    </nav>

    <style jsx>{`
      nav {
        padding: 2rem 0;
        text-align: center;
      }

      a {
        font-size: var(--font-size-header);
        display: block;
        margin-bottom: 1rem;
      }
    `}</style>
  </div>
