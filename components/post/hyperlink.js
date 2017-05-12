export default ({ children, url, target = '_blank' }) => (
  <a href={url} target={target}>
    { children }
    <style jsx>{`
      a { text-decoration: underline; }
    `}</style>
  </a>
)
