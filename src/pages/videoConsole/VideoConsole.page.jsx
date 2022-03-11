import React, { useState, useEffect } from 'react'

// --------- COMPONENTS -------------- //
import VideoList from '../../components/videoList/VideoList.component'
import VideoPlayer from '../../components/videoPlayer/VideoPlayer.component';

// ------------ STYLES ---------- //
import './VideoConsole.styles.scss';

const VideoConsole = ({ videos }) => {

    const [selectedVideo, setSelectedVideo] = useState(null);

    const clickVideo = (video) => {
        setSelectedVideo(!video ? videos[0] : video);

    };

    useEffect(() => setSelectedVideo(videos[0]), [videos]);

    return (
        <div className='videoConsole'>



            <div className='consolePlayer'>
                <VideoPlayer video={selectedVideo} />
            </div>

            <div className="consoleList">
                <VideoList videos={videos} clickVideo={clickVideo} />
            </div>

        </div>
    )
}

export default VideoConsole;