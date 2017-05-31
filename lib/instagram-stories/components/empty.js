// Packages
import React from 'react'

export default ({ user }) => (
  <div className='container'>
    <img src={user.profile_pic_url} />
    <span className='title'>Instagram Stories of {user.full_name}</span>
    <span className='message'>
      " there are no stories to show, please follow me
      {' '}
      <a href={`https://www.instagram.com/${user.username}`}>{user.username}</a> "
    </span>

    <style jsx>{`
      .container {
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 3em;
      }

      .title, .message {
        font-size: 1em;
      }

      .title {
        background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .message {
        color: #999;
        font-style: italic;
      }

      img {
        border-radius: 50%;
        height: 100px;
        width: 100px;
      }

      a {
        color: #999;
        font-weight: bold;
        text-decoration: none;
      }
    `}</style>
  </div>
)
