import Head from 'next/head'
import Link from 'next/link'
import Home from '../layouts/home'
import { gradients, palette } from '../theme/default'
import withViews from '../lib/with-views'

export default withViews(({ views }) => (
  <Home>
    <Head>
      <title>Jesús Lobos</title>
    </Head>

    <div className='container'>
      <header>
        <Link href='/'><a href='/'><h1>▽</h1></a></Link>
      </header>

      <footer>
        <ul>
          <li><a href='https://twitter.com/jlobitu' target='_black'>TWITTER</a></li>
          <li><a href='https://github.com/jlobos' target='_black'>GITHUB</a></li>
          <li><a href='mailto:jlobitu@gmail.com'>EMAIL</a></li>
          <li>|</li>
          <li>{views} views</li>
        </ul>
      </footer>
    </div>

    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: space-between;
        padding: 27px 0;
        text-align: center;
      }

      h1 {
        font-size: 120px;
        font-weight: 200;
        ${gradients.peach}
      }

      ul { list-style-type: none; padding: 0; }
      li:last-child { margin: 0; }
      li { margin-right: 12px; display: inline; }

      footer { font-size: 12px; }
      a:hover { color: ${palette.color1} }
      a {
        color: ${palette.color2};
        text-decoration: none;
        transition: all 0.2s ease;
      }
    `}</style>
  </Home>
))
