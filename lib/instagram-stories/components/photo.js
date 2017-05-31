// Packages
import React, { Component } from 'react'

export default class extends Component {
  componentDidMount () {
    const { handlerEnded, handlerTimeUpdate } = this.props

    // Progress for photo
    let currentTime = 0
    this.intervalTimeUpdate = setInterval(() => {
      currentTime += 0.1
      handlerTimeUpdate({ target: { currentTime } })
      if (currentTime >= 4) { currentTime = 0 }
    }, 100)

    handlerTimeUpdate({ target: { currentTime } })
    this.intervalEnded = setInterval(handlerEnded, 4000)
  }

  componentWillUnmount () {
    clearInterval(this.intervalTimeUpdate)
    clearInterval(this.intervalEnded)
  }

  render () {
    const { children, url } = this.props

    return (
      <div>
        { children }
        <img src={url} />
        <style jsx>{`
          div { position: relative; }
          img {
            display: block;
            height: 100%;
            width: 100%;
          }
          `}</style>
      </div>
    )
  }
}
