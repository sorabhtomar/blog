export default `
  article {
    margin: 2rem 1rem;
  }

  article h1 {
    margin-bottom: 2rem;
  }

  article h2 {
    margin: 2rem 0;
  }

  article p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  article a {
    text-decoration: underline;
  }

  article a:hover {
    color: var(--main-color);
  }

  article blockquote {
    border-left: 1px solid var(--high-color);
    color: var(--text-color);
    margin-bottom: 1rem;
    padding-left: 1rem;
  }

  article pre {
    border: 1px solid var(--high-color);
    border-radius: var(--border-radius);
    margin-bottom: 1rem;
    padding: 1rem;
    white-space: pre-wrap;
  }
`
