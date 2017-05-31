// Packages
import React from 'react'

// Our
import Photo from './photo'
import Video from './video'

export default ({
  children,
  item,
  handlerEnded,
  handlerTimeUpdate
}) => {
  switch (item.media_type) {
    case 1:
      return (
        <Photo
          url={item.image_versions2.candidates[0].url}
          handlerEnded={handlerEnded}
          handlerTimeUpdate={handlerTimeUpdate} >
          { children }
        </Photo>
      )
    case 2:
      return (
        <Video
          url={item.video_versions[0].url}
          handlerEnded={handlerEnded}
          handlerTimeUpdate={handlerTimeUpdate} >
          { children }
        </Video>
      )
  }
}
