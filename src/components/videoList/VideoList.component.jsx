import React from 'react'

// -------- COMPONENTS ------------- //
import VideoItem from '../videoItem/VideoItem.component';

// ------------ STYLES ------------//
import './VideoList.styles.scss';

const VideoList = ({ videos, clickVideo }) => {

    const mappedList = videos.map((video) => {
        return (
            <VideoItem
                video={video}
                key={video.id.videoId}
                clickVideo={clickVideo}
            />)
    });
    return (
        <div className='videoList'>

            {mappedList}
        </div>
    )
}

export default VideoList;

