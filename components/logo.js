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
        font-size: var(--font-size-header);
        display: inline;
      }
    `}</style>
  </div>
