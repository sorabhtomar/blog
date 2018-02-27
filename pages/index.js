import Head from 'next/head'
import App from '../layouts/main'
import Post from '../components/post'
import posts from '../posts'

const metadata = {
  title: '🐺',
  description: '',
  image: '',
  type: 'website',
  url: 'https://jlobos.com'
}

export default () => (
  <App>
    <Head>
      <title>{metadata.title}</title>

      {/* Open Graph protocol */}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:type" content={metadata.type} />
      <meta property="og:url" content={metadata.url} />
      <meta property="og:image" content={metadata.image} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:site_name" content="jlobos" />
      <meta
        property="article:author"
        content="https://www.facebook.com/jlobitu"
      />

      {/* Twitter */}
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image:src" content={metadata.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@jlobitu" />

      {/* Google */}
      <link rel="canonical" href={metadata.url} />
      <link rel="author" href="https://twitter.com/jlobitu" />
      <meta name="description" content={metadata.description} />
      <meta name="robots" content="index, follow" />
      <meta property="author" content="Jesus Lobos" />
    </Head>

    <main>
      <h2>Artículos</h2>
      <div className="articles">
        {posts.map((post, i) => <Post {...post} key={i} />)}
      </div>
    </main>

    <style jsx>{`
      main {
        margin: 0 auto;
        max-width: 980px;
        padding: 3rem 33px;
      }

      @media (min-width: 768px) {
        .articles {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 33px;
        }
      }
    `}</style>
  </App>
)
