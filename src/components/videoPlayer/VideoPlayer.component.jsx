import React from 'react'

// ----------- STYLES ----------//
import './VideoPlayer.styles.scss';

const VideoPlayer = ({ video }) => {

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    // console.log(`videoPlayer`)
    return (
        <div className='videoPlayer'>

            <iframe src={videoSrc}></iframe>
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
        </div >
    )
}

export default VideoPlayer;