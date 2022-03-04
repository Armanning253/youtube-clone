import React, { useState } from 'react'

// --------- COMPONENTS -------------- //
import VideoList from '../../components/videoList/VideoList.component'
import VideoPlayer from '../../components/videoPlayer/VideoPlayer.component';

// ------------ STYLES ---------- //
import './VideoConsole.styles.scss';

const VideoConsole = ({ videos }) => {

    const [selectVideo, setSelectVideo] = useState(null);

    const handleSelectVideo = (video) => {
        setSelectVideo(video.id.videoId)
        console.log(video);
    }

    return (
        <div className='videoConsole'>

            <div className='consolePlayer'>
                <VideoPlayer video={selectVideo} />
            </div>

            <div className="consoleList">
                <VideoList videos={videos} handleSelectVideo={handleSelectVideo} />
            </div>

        </div>
    )
}

export default VideoConsole;