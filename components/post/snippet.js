export default ({ children }) => (
  <pre>
    <code>{ children }</code>
    <style jsx>{`
      pre {
        border: 1px solid #000;
        border-radius: 3px;
        margin-bottom: 27px;
        padding: 12px;
        white-space: pre-wrap;
      }

      code {
        color: #000;
        font-family: 'Fira Code', monospace;
      }
    `}</style>
  </pre>
)
