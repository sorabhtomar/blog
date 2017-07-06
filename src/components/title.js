// Packages
import Link from 'next/link'

export default () =>
  <div>
    <Link prefetch href='/'>
      <a href='/'>
        <h1>JLOBOS</h1>
      </a>
    </Link>

    <style jsx>{`
      h1 {
        color: var(--text-color);
        font-weight: 500;
        letter-spacing: .5rem;
        text-transform: uppercase;
      }
    `}</style>
  </div>
