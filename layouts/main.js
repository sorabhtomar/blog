import { Fragment } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import normalize from '../lib/modern-normalize'

export default ({ children }) => (
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
    </Head>

    <Header />
    {children}
    <Footer />

    <style jsx global>
      {normalize}
    </style>
    <style jsx global>{`
      :root {
        --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        --font-family-code: Menlo, Consolas, Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;

        --border-radius: 9px;

        --very-pale-violet: #edd7ff;
        --color-black: rgb(18, 18, 18);
        --color-soft-black-1: rgba(18, 18, 18, 0.6);
        --color-soft-black-2: rgba(18, 18, 18, 0.3);
        --text-color: var(--color-soft-black-1);

        --bg-very-pale-violet: #edd7ff;

        --box-shadow-card: rgba(60, 66, 68, 0.05) 0px 2px 4px;
        --box-shadow-card-hover: rgba(60, 66, 68, 0.3) 0px 50px 100px -30px;
        --box-shadow-dark: 0 20px 60px -10px rgba(0, 0, 0, 0.3);
      }

      body {
        color: var(--text-color);
        font-family: var(--font-family);
        text-rendering: optimizeLegibility;
      }

      h1, h2, h3 {
        color: var(--color-black);
        font-weight: 400;
      }

      h1 { font-size: 3rem; }
      h2 { font-size: 2rem; }
      h3 { font-size: 1.5rem; }

      p, li, blockquote {
        color: var(--text-color);
        font-size: 1rem;
        line-height: 1.5;
      }

      a {
        border-bottom: 1px solid currentColor
        color: var(--text-color);
        text-decoration: none;
      }

      img {
        border-radius: 9px;
        box-shadow: var(--box-shadow-dark);
        display: block;
        height: auto;
        margin: 3rem auto;
        max-width: 100%;
      }

      blockquote {
        border-left: 3px solid var(--very-pale-violet);
        margin-left: 0;
        padding-left: 1rem;
      }
    `}</style>
  </Fragment>
)
