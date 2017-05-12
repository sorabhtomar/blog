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
        font-size: 12px;
        margin: 0 auto;
        max-width: 650px;
        padding: 0 27px;
      }
    `}</style>
  </Page>
)
