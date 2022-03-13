import React from 'react'

// -------- STYLES ------------- //
import './VideoItem.styles.scss';

const VideoItem = ({ video, clickVideo }) => {



    return (
        <div className='videoItem' onClick={() => clickVideo(video)}>
            <img className='videoThumbnail' src={video.snippet.thumbnails.medium.url} alt="video thumbnail" />
            <p>{video.snippet.title}</p>
            <hr />
        </div >
    )
}

export default VideoItem;