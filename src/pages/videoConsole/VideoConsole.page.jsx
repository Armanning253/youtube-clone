import React from 'react'

// --------- COMPONENTS -------------- //
import VideoList from '../../components/videoList/VideoList.component'
import VideoPlayer from '../../components/videoPlayer/VideoPlayer.component';

// ------------ STYLES ---------- //
import './VideoConsole.styles.scss';

const VideoConsole = () => {
    return (
        <div className='videoConsole'>

            <div className='consolePlayer'>
                <VideoPlayer />
            </div>

            <div className="consoleList">
                <VideoList />
            </div>

        </div>
    )
}

export default VideoConsole;