import React from 'react'

// ----------- STYLES ----------//
import './VideoPlayer.styles.scss';

const VideoPlayer = ({ video }) => {
    if (!video) { return < div > loading... </ div > }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div className='videoPlayer'>
            <iframe title={video.snippet.title} src={videoSrc}></iframe>
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.publishTime}</p>
            <hr />
            <p>{video.snippet.channelTitle}</p>
            <p>{video.snippet.description}</p>
        </div >
    )
}

export default VideoPlayer;