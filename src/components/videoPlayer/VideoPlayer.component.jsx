import React from 'react'

// ----------- STYLES ----------//
import './VideoPlayer.styles.scss';

const VideoPlayer = ({ video, videoBig }) => {
    if (!video) { return < div > loading... </ div > }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div className={'videoPlayer'}>
            <iframe className={videoBig ? 'IframeBig' : ''} title={video.snippet.title} src={videoSrc}></iframe>

            <div className='videoPlayerDiscription'>
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.publishTime}</p>
                <hr />
                <p>{video.snippet.channelTitle}</p>
                <p>{video.snippet.description}</p>
            </div>

        </div >
    )
}

export default VideoPlayer;