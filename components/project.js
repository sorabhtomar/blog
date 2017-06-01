import Link from 'next/link'

export const Title = () => (
  <h2>
    PROJECTS
    <style jsx>{`
      h2 {
        font-size: 1.3em;
        font-weight: 500;
        margin: 0 auto;
        max-width: 650px;
        padding: 18px 27px;
      }

      @media (min-width: 600px) {
        h2 { text-align: center; }
      }
    `}</style>
  </h2>
)

export default ({ id, title }) => (
  <div>
    <Link prefetch href={`/${id}`}>
      <a>{ title }</a>
    </Link>

    <style jsx>{`
      div::before { content: "► "; }
      div {
        margin: 0 auto 6px auto;
        max-width: 650px;
        padding: 0 27px;
      }

      @media (min-width: 600px) {
        div { text-align: center; }
      }
    `}</style>
  </div>
)
