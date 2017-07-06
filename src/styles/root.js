export default `
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  html,
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    height: 100%;
    color: rgba(0, 0, 0, .8);
  }

  :root {
    --high-color: #000;
    --text-color: rgba(0, 0, 0, .8);
    --soft-color: rgba(0, 0, 0, .6);
  }

  h1 {
    font-size: 1.9rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  span,
  p,
  a,
  code,
  blockquote,
  pre {
    font-size: .9rem;
  }

  a {
    color: var(--high-color);
    text-decoration: none;
    transition: all 0.2s ease;
  }

  /* loading progress bar styles */
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: rgba(0, 0, 0, .8);
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }

  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .8);
    opacity: 1.0;
    transform: rotate(3deg) translate(0px, -4px);
  }
`
