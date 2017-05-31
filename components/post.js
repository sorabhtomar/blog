import Link from 'next/link'

export default ({ id, date, title }) => (
  <div className='post'>
    <span className='date'>{ date }</span>
    <Link prefetch href={`/${new Date(date).getFullYear()}/${id}`}>
      <a>{ title }</a>
    </Link>

    <style jsx>{`
      .post {
        margin: 6px auto 0 auto;
        max-width: 650px;
        padding: 0 27px;
      }

      .date {
        display: block;
        color: #999;
        font-size: 12px;
        text-transform: lowercase;
      }

      @media (min-width: 600px) {
        .post { text-align: center; }
        .date::after { content: ' — '; }
        .date {
          display: inline;
          text-align: right;
        }
      }
    `}</style>
  </div>
)
