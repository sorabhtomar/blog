export default ({ children, url, target = '_blank' }) => (
  <a href={url} target={target}>
    { children }
    <style jsx>{`
      a:hover { color: #ED4264; }
      a {
        color: #000;
        text-decoration: underline;
        transition: all 0.2s ease;
      }
    `}</style>
  </a>
)
