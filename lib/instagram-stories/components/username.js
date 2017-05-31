// Packages
import React from 'react'
import moment from 'moment'

moment.updateLocale('en', {
  relativeTime: {
    past: '%s',
    s: '%s s',
    ss: '%s s',
    m: '%d m',
    mm: '%d m',
    h: '%d h',
    hh: '%d h',
    d: '%d d',
    dd: '%d d'
  }
})

export default ({ user, date }) => (
  <div>
    <img src={user.profile_pic_url} />
    <span>{user.username}</span>
    <time>{moment(date * 1000).fromNow()}</time>

    <style jsx>{`
      div {
        align-items: center;
        display: flex;
        padding: 16px 0 0 8px;
        position: absolute;
      }

      img {
        border-radius: 50%;
        height: 24px;
        margin-right: 4px;
        width: 24px;
      }

      span, time {
        color: #fff;
        font-family: 'Helvetica', sans-serif;
        font-size: 13px;
        font-weight: bold;
      }
      time {
        color: rgba(255, 255, 255, 0.8);
        margin-left: 4px;
      }
    `}</style>
  </div>
)
