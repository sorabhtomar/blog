export default ({ children }) => (
  <p>
    { children }
    <style jsx>{`
      p {
        font-size: 12px;
        margin-bottom: 27px;
      }
    `}</style>
  </p>
)
