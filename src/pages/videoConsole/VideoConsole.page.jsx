import React, { useState } from 'react'

// --------- COMPONENTS -------------- //
import VideoList from '../../components/videoList/VideoList.component'
import VideoPlayer from '../../components/videoPlayer/VideoPlayer.component';

// ------------ STYLES ---------- //
import './VideoConsole.styles.scss';

const VideoConsole = ({ videos }) => {

    const [selectedVideo, setSelectedVideo] = useState('');

    const clickVideo = (video) => {
        setSelectedVideo(video)
        console.log(`this is the video info ${video.snippet.title} `);
    };




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