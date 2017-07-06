export default `
  article {
    line-height: 1.7;
    margin: 0 auto;
    max-width: 768px;
    padding: 0 1rem 0 1rem;
  }

  article h1 {
    margin-bottom: 1rem;
  }

  article h2,
  article h3 {
    margin-top: 2rem;
    margin-bottom: .5rem;
  }

  article p,
  article pre,
  article img,
  article blockquote {
    margin-bottom: 1.6rem;
  }

  article a {
    text-decoration: underline;
  }

  article a:hover {
    color: var(--soft-color);
  }

  article blockquote {
    border-left: 1px solid var(--high-color);
    color: var(--text-color);
    padding-left: 1rem;
  }

  article pre {
    background-color: rgba(0, 0, 0, 0.05);
    padding: 1rem;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  article code {
    background-color: rgba(0, 0, 0, 0.05);
    padding: 3px;
  }

  article img {
    display: block;
    height: auto;
    width: 100%;
  }

  #disqus_thread {
    margin-top: 2rem;
  }
`
