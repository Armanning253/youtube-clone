import React from 'react'

// -------- COMPONENTS ------------- //
import VideoItem from '../videoItem/VideoItem.component';

// ------------ STYLES ------------//
import './VideoList.styles.scss';

const VideoList = ({ videos, handleSelectVideo }) => {

    const mappedList = videos.map((video) => {
        return <VideoItem video={video} key={video.id} handleSelectVideo={handleSelectVideo} />
    });
    return (
        <div className='videoList'>
            <h2>VIDEO LIST</h2>

            {mappedList}
        </div>
    )
}

export default VideoList;

