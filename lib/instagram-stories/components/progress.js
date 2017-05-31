// Packages
import React from 'react'

const Bar = ({ percent = 0 }) => (
  <div className='bar'>
    {
      (percent > 0)
      ? <div style={{ width: `${percent}%` }} className='progress' />
      : undefined
    }
    <style jsx>{`
      .bar:first-child { margin-left: 4px; }
      .bar:last-child { margin-right: 4px; }
      .bar {
        background-clip: padding-box;
        background-color: rgba(255, 255, 255, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.4);
        border-radius: 1px;
        height: 1px;
        margin-left: 2px;
        width: 100%;
        position: relative;
      }

      .progress {
        background: #fff;
        border: 1px solid #fff;
        border-radius: 1px;
        height: 1px;
        position: absolute;
        top: -1px;
      }
    `}</style>
  </div>
)

export default ({ feed, position, percent }) => (
  <div>
    {
      feed.map(({ id }, i) => {
        if (i === position) {
          return <Bar key={id} percent={percent} />
        } else if (i < position) {
          return <Bar key={id} percent={100} />
        } else {
          return <Bar key={id} />
        }
      })
    }

    <style jsx>{`
      div {
        display: flex;
        margin-top: 5px;
        position: absolute;
        width: 100%;
      }
    `}</style>
  </div>
)
