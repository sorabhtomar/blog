import Head from 'next/head'
import Time from '../components/time'
import Main from './main'

export default ({
  children,
  title,
  description,
  createdAt,
  slug,
  type = 'article'
}) => (
  <Main>
    <Head>
      <title>{title}</title>

      {/* Open Graph protocol */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={`https://jlobos.com/${slug}`} />
      <meta property="og:image" content="" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="🐺" />
      <meta
        property="article:author"
        content="https://www.facebook.com/jlobitu"
      />

      {/* Twitter */}
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content="" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@jlobitu" />

      {/* Google */}
      <link rel="canonical" content={`https://jlobos.com/${slug}`} />
      <link rel="author" href="https://twitter.com/jlobitu" />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta property="author" content="Jesus Lobos" />
    </Head>

    <article>
      <header>
        <Time createdAt={createdAt} />
        <h1>{title}</h1>
      </header>
      <section>{children}</section>
    </article>

    <style jsx>{`
      article {
        padding: 0 33px 3rem 33px;
      }

      header {
        margin: 0 auto;
        max-width: 400px;
        text-align: center;
      }

      header h1 {
        margin: 3rem auto 5rem auto;
      }

      section {
        margin: 0 auto;
        max-width: 666px;
      }
    `}</style>
  </Main>
)
