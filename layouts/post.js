import Page from './main'
import Footer from '../components/footer'
import Triangle from '../components/triangles/main'

export default ({ children, views }) => (
  <Page>
    <header><Triangle /></header>
    <article>{ children }</article>
    <Footer views={views} />

    <style jsx>{`
      article {
        margin: 0 auto;
        max-width: 740px;
        padding: 0 27px;
      }
    `}</style>
  </Page>
)
