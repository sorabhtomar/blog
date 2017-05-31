import Head from 'next/head'
import { posts, projects } from '../db'
import Page from '../layouts/main'
import withViews from '../lib/with-views'
import Triangle from '../components/triangles/main'
import Footer from '../components/footer'
import Post from '../components/post'
import Project, { Title } from '../components/project'

export default withViews(({ views }) => (
  <Page>
    <Head>
      <title>Jesús Lobos</title>
    </Head>

    <div className='container'>
      <header><Triangle /></header>

      <div>
        {
          posts.map(({ id, date, title }) => (
            <Post id={id} key={id} date={date} title={title} />
          ))
        }

        <Title />
        {
          projects.map(({ id, title }) => (
            <Project id={id} key={id} title={title} />
          ))
        }
      </div>

      <Footer views={views} />
    </div>

    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: space-between;
      }
    `}</style>
  </Page>
))
