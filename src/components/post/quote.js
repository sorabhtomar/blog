export default ({ by, children }) =>
  <blockquote>
    <p>
      {children}
      <br />
      {by && `– ${by}`}
    </p>

    <style jsx>{`
      blockquote {
        border-left: 1px solid var(--high-color);
        color: var(--text-color);
        padding-left: 1rem;
        margin-bottom: 1.6rem;
      }
    `}</style>
  </blockquote>
