import React from 'react'

// -------- STYLES ------------- //
import './VideoItem.styles.scss';
import { BsThreeDotsVertical } from 'react-icons/bs'

const VideoItem = ({ video, clickVideo }) => {



    return (
        <div className='videoItem' onClick={() => clickVideo(video)}>

            <img className='videoThumbnail' src={video.snippet.thumbnails.medium.url} alt="video thumbnail" />

            <div className='videoItemInfo'>
                <p>{video.snippet.title}</p>
            </div>

            <BsThreeDotsVertical className='threeDots' />
        </div >
    )
}

export default VideoItem;