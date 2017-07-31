// Ours
import Main from './main'

export default ({ children }) =>
  <Main>
    {children}

    <style jsx global>{`
      article a {
        text-decoration: underline;
      }

      article a:hover {
        color: var(--soft-color);
      }

      #disqus_thread {
        margin-top: 2rem;
      }
    `}</style>
  </Main>
