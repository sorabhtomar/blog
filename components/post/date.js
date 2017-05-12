export default ({ datetime }) => (
  <div>
    <time dateTime={datetime}>{datetime}</time>
    <style jsx>{`
      time {
        color: #999;
      }
    `}</style>
  </div>
)
