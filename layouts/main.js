import Head from 'next/head'

export default ({ children }) => (
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#000000' />

      <link href='https://fonts.googleapis.com/css?family=Vibur' rel='stylesheet' />
      <link href='https://cdn.rawgit.com/tonsky/FiraCode/master/distr/ttf/FiraCode-Regular.ttf' rel='stylesheet' />

      {/* Google Analytics */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-93825702-2', 'auto');
        ga('send', 'pageview');
        `}} />
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
