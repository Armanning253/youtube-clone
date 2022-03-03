import React from 'react'

// -------- COMPONENTS ------------- //
import VideoItem from '../videoItem/VideoItem.component';

// ------------ STYLES ------------//
import './VideoList.styles.scss';

const VideoList = ({ videos }) => {
    const mappedList = videos.map((video) => {
        return <VideoItem video={video} />
    });
    return (
        <div className='videoList'>
            <h2>VIDEO LIST</h2>
            {mappedList}
        </div>
    )
}

export default VideoList;

