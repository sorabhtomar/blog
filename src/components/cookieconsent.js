// Packages
import React from 'react'
import Head from 'next/head'

export default class extends React.Component {
  componentDidMount () {
    require('cookieconsent')
    window.cookieconsent.initialise({
      container: this.container,
      content: {
        message: 'Utilizamos',
        dismiss: 'OK',
        link: 'cookies.',
        href: 'https://jlobos.com/politica-de-privacidad'
      }
    })
  }

  render () {
    return (
      <div
        ref={ref => {
          this.container = ref
        }}
      >
        <Head>
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.4/cookieconsent.min.css'
          />
        </Head>

        <style jsx global>{`
          .cc-window {
            background-color: white;
            font-family: 'Montserrat', sans-serif;
            font-size: .8rem;
            width: 100%;
          }

          .cc-window.cc-floating {
            max-width: 100%;
            bottom: 0;
          }

          .cc-message {
            color: var(--soft-color);
          }

          .cc-btn {
            border: 1px solid var(--high-color);
            border-radius: 3px;
          }

          .cc-btn:hover {
            border: 1px solid var(--soft-color);
            border-radius: 3px;
          }
        `}</style>
      </div>
    )
  }
}
