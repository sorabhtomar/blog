export default ({ children }) => (
  <pre>
    <code>{children}</code>
    <style jsx>{`
      pre {
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow-card);
        overflow-x: auto;
        padding: 33px;
        transition: all 0.3s ease-out;
        font-family: var(--font-family-code);
      }

      pre:hover {
        box-shadow: var(--box-shadow-card-hover);
      }

      code {
        color: var(--text-color);
      }

      @media only screen and (min-width: 980px) {
        pre {
          margin-left: -20%;
          margin-right: -20%;
        }
      }
    `}</style>
  </pre>
)
