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
        color: rgba(0, 0, 0, .6);
        font-family: 'Montserrat', monospace;
        font-size: .9em;
      }
    `}</style>
  </pre>
)
