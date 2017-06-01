export default ({ children }) => (
  <p>
    { children }
    <style jsx>{`
      p {
        color: rgba(0, 0, 0, .8);
        margin-bottom: 27px;
      }
    `}</style>
  </p>
)
