export default ({ children }) => (
  <code>
    { children }
    <style jsx>{`
      code {
        color: #ED4264;
        font-family: 'Montserrat', monospace;
      }
    `}</style>
  </code>
)
