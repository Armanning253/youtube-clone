import React, { useState, useEffect } from 'react'

// --------- COMPONENTS -------------- //
import VideoList from '../../components/videoList/VideoList.component'
import VideoPlayer from '../../components/videoPlayer/VideoPlayer.component';
import VideoNav from '../../components/videoNav/VideoNav';

// ------------ STYLES ---------- //
import './VideoConsole.styles.scss';

const VideoConsole = ({ videos }) => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videoBig, setVideoBig] = useState(false);

    const clickVideo = (video) => {
        setSelectedVideo(video);

    };
    const videoToggle = () => {
        setVideoBig(!videoBig)
    }

    useEffect(() => setSelectedVideo(videos[0]), [videos]);

    return (
        <div className='videoConsole'>


            <div className='consoleNav'>
                <VideoNav videoToggle={videoToggle} />
            </div>

            <div className={videoBig ? 'consoleVertical' : 'consoleDisplay'}>
                <div className={videoBig ? 'videoBig' : 'consolePlayer'}>
                    <VideoPlayer videoBig={videoBig} video={selectedVideo} />
                </div>

                <div className="consoleList">
                    <VideoList videos={videos} clickVideo={clickVideo} />
                </div>
            </div>


        </div>
    )
}

export default VideoConsole;