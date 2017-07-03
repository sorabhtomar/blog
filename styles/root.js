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
    font-size: 1em;
    height: 100%;
    overflow-x: hidden;
  }

  :root {
    --main-color: #28c76f;
    --high-color: #000;
    --text-color: rgba(0, 0, 0, .5);
    --font-size-header: .8rem;
    --box-shadow: 0 20px 60px -10px rgba(0, 0, 0, .2);
    --border-radius: 9px;
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
  pre {
    font-size: .8rem;
  }

  a {
    color: var(--high-color);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  @media (min-width: 500px) {
    article {
      padding: 0 2rem;
    }
  }
`
