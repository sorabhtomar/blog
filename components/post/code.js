export default ({ children }) => (
  <code>
    { children }
    <style jsx>{`
      code {
        background-color: #dedede;
        border-radius: 3px;
        padding: 0 3px;
      }
    `}</style>
  </code>
)
