export default ({ children }) => (
  <h1>
    { children }
    <style jsx>{`
      h1 {
        color: #000;
        font-size: 2em;
        font-weight: 500;
        margin-bottom: 27px;
      }
    `}</style>
  </h1>
)
