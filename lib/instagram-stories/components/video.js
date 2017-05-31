// Packages
import React from 'react'

export default ({
  url,
  children,
  handlerEnded,
  handlerTimeUpdate
}) => (
  <div>
    { children }
    <video src={url} autoPlay muted
      onEnded={handlerEnded}
      onTimeUpdate={handlerTimeUpdate} />

    <style jsx>{`
      div { position: relative; }
      video {
        display: block;
        height: auto;
        width: 100%;
      }
    `}</style>
  </div>
)
