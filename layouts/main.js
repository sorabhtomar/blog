import Head from 'next/head'

// <link href='https://cdn.rawgit.com/tonsky/FiraCode/master/distr/ttf/FiraCode-Regular.ttf' rel='stylesheet' />
// font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

export default ({ children }) => (
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <link href='https://fonts.googleapis.com/css?family=Fira+Mono|Vibur' rel='stylesheet' />
      <link href='https://cdn.rawgit.com/tonsky/FiraCode/master/distr/ttf/FiraCode-Regular.ttf' rel='stylesheet' />
    </Head>

    { children }

    <style jsx global>{`
      * {
        margin: 0;
        box-sizing: border-box;
      }

      a:hover { color: #ED4264; }
      a {
        color: #000;
        font-size: 12px;
        text-decoration: none;
        transition: all 0.2s ease;
      }

      body {
        font-family: 'Fira Mono', monospace;
      }
    `}</style>
  </div>
)
