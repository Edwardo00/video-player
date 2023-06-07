import React from 'react'

const Menu = ({onSelectVideo, videoValues}) => {
  return (
    <form onClick={(event) => onSelectVideo(event.target.value)} className='video-form'>
        {videoValues.map((value, i) => (
            <div className='video-input'>
                <input key={i} type='radio' name='src' value={value} />
                {value}
            </div>
        ))}
    </form>
  )
}

export default Menu