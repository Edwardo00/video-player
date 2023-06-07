import React from 'react'
import { useState } from 'react'

import Menu from './Menu'
import Video from './Video'

import './App.css'

const videos = {
  Deer:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  Snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  Cat:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  Spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
}

const videoNames = Object.keys(videos)

const App = () => {
    const [videoSrc, setVideoSrc] = useState(videos.Cat)

    const onSelectVideo = (video) => {
        const videoSrc = videos[video]
        setVideoSrc(videoSrc)
    }

  return (
    <div className='bg'>
        <h1>Video Player</h1>
        <Menu onSelectVideo={onSelectVideo} videoValues={videoNames} />
        <Video videoSrc={videoSrc} />
    </div>
  )
}

export default App