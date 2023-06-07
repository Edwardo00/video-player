import React from 'react'

const Video = ({videoSrc}) => {
  return (
    <div>
      <video loop controls autostart='true' autoPlay muted src={videoSrc} />
    </div>
  )
}

export default Video