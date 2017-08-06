// Packages
import Head from 'next/head'
import CookieConsent from '../components/cookieconsent'

export default ({ children }) =>
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#000000' />

      <link
        href='https://fonts.googleapis.com/css?family=Montserrat'
        rel='stylesheet'
      />

      {/* Google Analytics */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-93825702-2', 'auto');
        ga('send', 'pageview');
        `
        }}
      />
      {/* Google Adsense */}
      <script
        async
        src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(adsbygoogle = window.adsbygoogle || []).push({ google_ad_client: "ca-pub-1962513357833399", enable_page_level_ads: true }); `
        }}
      />
    </Head>

    {children}

    {/* EU Cookie Law */}
    <CookieConsent />

    <style jsx global>{`
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
      time,
      li,
      tr,
      th,
      td,
      label,
      input,
      textarea,
      button,
      pre {
        font-size: .9rem;
      }

      button,
      textarea {
        font-family: 'Montserrat', sans-serif;
      }

      a {
        color: var(--high-color);
        text-decoration: none;
        transition: all 0.2s ease;
      }
    `}</style>
  </div>
