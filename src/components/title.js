export default ({ title, url }) =>
  <div>
    <a href={url || '/'}>
      <h1>
        {title || 'JLOBOS'}
      </h1>
    </a>

    <style jsx>{`
      h1 {
        color: var(--text-color);
        font-weight: 500;
        letter-spacing: .5rem;
        text-align: center;
        text-transform: uppercase;
      }
    `}</style>
  </div>
