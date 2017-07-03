export default ({ title, date, views }) =>
  <div className='title'>
    <h1>
      {title}
    </h1>

    {(date || views) &&
      <div className='meta'>
        <span>
          {date}
        </span>
        <span>
          {views} views
        </span>
      </div>}

    <style jsx>{`
      .title {
        // margin: 0 1rem;
        padding: 0 1rem;

        max-width: 700px;
        margin: 0 auto;
      }

      .meta {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
      }

      span {
        color: var(--text-color);
      }
    `}</style>
  </div>
