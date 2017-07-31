export default ({ desc, href, children }) =>
  <figure>
    {href
      ? <a href={href} target='_blank'>
        {children}
      </a>
      : children}
    {desc &&
      <p>
        {desc}
      </p>}

    <style jsx>{`
      p {
        color: var(--text-color);
        text-align: center;
      }
    `}</style>
  </figure>

const Image = ({ width, src, alt }) =>
  <div>
    <img width={width} src={src} alt={alt} />
    <style jsx>{`
      img {
        display: block;
        height: auto;
        margin-bottom: 1.6rem;
        max-width: 100%;
      }
    `}</style>
  </div>

const Video = ({ src }) =>
  <div>
    <video autoPlay loop src={src} />
    <style jsx>{`
      video {
        max-width: 100%;
      }
    `}</style>
  </div>

export { Image, Video }
