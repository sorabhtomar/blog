// Packages
import Link from 'next/link'

export default () =>
  <footer>
    <div>
      <a href='mailto:jlobitu@gmail.com'>© 2017 — jlobos</a>
    </div>

    <div>
      <Link prefetch href='politica-de-privacidad'>
        <a href='/politica-de-privacidad'>PRIVACIDAD</a>
      </Link>
    </div>

    <style jsx>{`
      footer {
        display: flex;
        justify-content: center;
        padding: 2rem 1rem;
      }

      div {
        margin-right: 1rem;
      }

      div:last-child {
        margin-right: 0;
      }
    `}</style>
  </footer>
