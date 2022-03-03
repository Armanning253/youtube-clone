import React from 'react'

// -------- STYLES ------------- //
import './VideoItem.styles.scss';

const VideoItem = ({ video }) => {
    return (
        <div className='videoItem'>
            <img className='videoThumbnail' src={video.snippet.thumbnails.medium.url} alt="video thumbnail" />
            <p>{video.snippet.title}</p>
        </div>
    )
}

export default VideoItem;