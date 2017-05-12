export default ({ children }) => (
  <code>
    { children }
    <style jsx>{`
      code {
        color: #ED4264;
        display: block;
        font-family: 'Vibur', cursive;
        font-size: 15px;
        font-style: italic;
      }
    `}</style>
  </code>
)
