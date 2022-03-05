import React from 'react'

// ----------- STYLES ----------//
import './VideoPlayer.styles.scss';

const VideoPlayer = ({ video }) => {

    const videoSrc = `https://www.youtube.com/embed/${video}`
    console.log(`videoPlayer`)
    return (
        <div className='videoPlayer'>

            <iframe src={videoSrc}></iframe>
            <title>{video}</title>
        </div >
    )
}

export default VideoPlayer;