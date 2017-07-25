// Packages
import React from 'react'
import moment from 'moment'

const Header = ({ title }) =>
  <header>
    <h2>
      {title}
    </h2>

    <style jsx>{`
      h2 {
        padding: 1rem 0;
      }
    `}</style>
  </header>

const Section = ({ description }) =>
  <section>
    <p>
      {description}
    </p>
    <style jsx>{`
      p {
        line-height: 1.5;
      }
    `}</style>
  </section>

export const Footer = ({ createdAt, readingTime }) =>
  <footer>
    <span className='date'>
      {moment(createdAt).format('LL')}
    </span>
    <span>
      {Math.round(readingTime)} min read
    </span>

    <style jsx>{`
      footer {
        display: flex;
        padding: 1rem 0;
      }

      .date {
        margin-right: 1rem;
      }

      span {
        color: var(--soft-color);
        display: block;
      }
    `}</style>
  </footer>

export default props =>
  <article>
    <a href={`/${props.slug}`}>
      <Header title={props.title} />
      <Section description={props.virtuals.subtitle} />
      <Footer
        createdAt={props.createdAt}
        readingTime={props.virtuals.readingTime}
      />
    </a>

    <style jsx>{`
      article {
        margin: 0 1rem;
      }
    `}</style>
  </article>
