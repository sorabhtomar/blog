export default ({ children }) => (
  <code>
    {children}
    <style jsx>{`
      code {
        background-color: var(--bg-very-pale-violet);
        border-radius: var(--border-radius);
        color: var(--text-color);
        font-family: var(--font-family-code);
        padding: 3px 6px;
      }
    `}</style>
  </code>
)
