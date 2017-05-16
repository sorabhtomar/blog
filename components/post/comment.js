export default ({ children }) => (
  <code>
    { children }
    <style jsx>{`
      code {
        color: #999;
        font-family: 'Vibur', cursive;
        font-size: 15px;
      }
    `}</style>
  </code>
)
