export default ({ by, children }) => (
  <blockquote>
    <p>
      { children }
      <br />
      {
        by && `– ${by}`
      }
    </p>
    <style jsx>{`
      blockquote {
        border-left: 1px solid #000;
        color: rgba(0, 0, 0, .5);
        margin-bottom: 27px;
        padding-left: 9px;
      }
    `}</style>
  </blockquote>
)
