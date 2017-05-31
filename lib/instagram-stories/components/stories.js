// Packages
import React, { Component } from 'react'

// Our
import stories from '../lib/instagram'
import Media from './media'
import Username from './username'
import Progress from './progress'
import Empty from './empty'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      feed: [],
      user: {},
      position: 0,
      percent: 0
    }

    this.handlerEnded = this.handlerEnded.bind(this)
    this.handlerTimeUpdate = this.handlerTimeUpdate.bind(this)
  }

  async componentDidMount () {
    const {
      user,
      items: feed
    } = await stories()

    this.setState(() => ({ user, feed }))
  }

  // handler `onEnded` of video component and photo
  handlerEnded () {
    this.transition('right')
  }

  // handler `onTimeUpdate` of video component and photo
  handlerTimeUpdate (e) {
    const { target: { currentTime } } = e
    const { position, feed } = this.state
    const duration = feed[position].video_duration || 4
    const percent = (currentTime / duration) * 100

    this.setState(() => ({ percent }))
  }

  transition (direction = 'right') {
    const { feed } = this.state

    switch (direction) {
      case 'left':
        this.setState(({ position }) => (position === 0)
          ? { position: feed.length - 1 }
          : { position: position - 1 })
        break
      case 'right':
        this.setState(({ position }) => (position === (feed.length - 1))
          ? { position: 0 }
          : { position: position + 1 })
        break
    }
  }

  render () {
    const { feed, user, position, percent } = this.state
    return (
      <div
        className='instagram-stories'
        ref='main'
        onClick={e => {
          e.preventDefault()
          const width = this.refs.main.clientWidth
          const left = this.refs.main.offsetLeft

          if ((e.pageX - left) < (width / 2)) {
            this.transition('left')
          } else {
            this.transition('right')
          }
        }}>

        {
          (feed.length) ? (
            <Media
              item={feed[position]}
              handlerEnded={this.handlerEnded}
              handlerTimeUpdate={this.handlerTimeUpdate} >
              { /* pogress bar of stories */ }
              <Progress feed={feed} position={position} percent={percent} />
              <Username
                user={feed[position].user}
                date={feed[position].taken_at} />
            </Media>
          ) : <Empty user={user} />
        }
      </div>
    )
  }
}
