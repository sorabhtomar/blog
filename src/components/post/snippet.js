export default ({ children }) =>
  <pre>
    <code>
      {children}
    </code>
    <style jsx>{`
      pre {
        background-color: #000;
        border-radius: 3px;
        color: #ffffff;
        margin-bottom: 1.6rem;
        padding: 1rem;
        overflow-x: auto;

        // white-space: pre-wrap;
        // word-wrap: break-word;
      }
    `}</style>
  </pre>
