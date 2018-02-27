import Time from './time'

export default ({ slug, title, description, createdAt }) => (
  <article>
    <a href={`/${slug}`}>
      <header>
        <Time createdAt={createdAt} />
        <h3>{title}</h3>
      </header>
      <section>
        <p>{description}</p>
      </section>
    </a>

    <style jsx>{`
      article {
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow-card);
        margin-bottom: 33px;
        padding: 33px;
        transition: all 0.3s ease-out;
      }

      article:hover {
        box-shadow: var(--box-shadow-card-hover);
      }

      header,
      time {
        display: block;
        padding-bottom: 9px;
      }
    `}</style>
  </article>
)
