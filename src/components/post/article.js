export default ({ children }) =>
  <article>
    {children}

    <style jsx>{`
      article {
        line-height: 1.7;
        margin: 0 auto;
        max-width: 768px;
        padding: 0 1rem 0 1rem;
      }
    `}</style>
  </article>
