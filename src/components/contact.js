// Packages
import React from 'react'
import fetch from 'isomorphic-fetch'

// Semantics
import P from '../components/post/paragraph'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = { email: '', message: '', status: 'enviar' }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount () {
    // Up Heroku
    await fetch('https://jlobos-contact.herokuapp.com/')
  }

  async handleSubmit (e) {
    e.preventDefault()
    const { email, message } = this.state

    const { error } = await fetch('https://jlobos-contact.herokuapp.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, message, ref: 'https://jlobos.com/' })
    }).then(res => res.json())

    this.setState({
      status: error ? 'Algo anda mal' : 'Genial'
    })
  }

  render () {
    return (
      <div className='root'>
        <P>Hola, puedes contactarme y estaré dispuesto a ayudarte :)</P>

        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            type='email'
            required
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <label>Mensaje</label>
          <textarea
            rows='6'
            required
            value={this.state.message}
            onChange={e => this.setState({ message: e.target.value })}
          />
          <button className='button' type='submit'>
            {this.state.status}
          </button>
        </form>

        <style jsx>{`
          .root {
            line-height: 1.7;
            margin: 0 auto;
            max-width: 768px;
            padding: 1rem;
          }

          form {
            display: flex;
            flex-direction: column;
          }

          label {
            margin-bottom: 1rem;
          }

          input,
          textarea {
            border: 1px solid var(--high-color);
            border-radius: 3px;
            display: block;
            margin-bottom: 1rem;
            padding: 1rem;
            transition: border 0.2s ease;
            width: 100%;
          }

          input:hover,
          input:focus,
          textarea:hover,
          textarea:focus {
            border: 1px solid var(--soft-color);
            outline: none;
          }

          button:hover {
            border: 1px solid var(--soft-color);
          }
          button {
            background-color: #ffffff;
            border: 1px solid var(--high-color);
            border-radius: 3px;
            cursor: pointer;
            padding: 1rem;
            text-transform: uppercase;
          }
        `}</style>
      </div>
    )
  }
}
