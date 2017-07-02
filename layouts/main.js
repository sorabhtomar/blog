// Packages
import Head from 'next/head'

// Styles
import rootStyles from '../styles/root'

export default ({ children }) => (
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#000000' />

      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />

      {/* Google Analytics */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-93825702-2', 'auto');
        ga('send', 'pageview');
        `}} />
    </Head>

    {children}

    <style jsx global>{rootStyles}</style>
  </div>
)
