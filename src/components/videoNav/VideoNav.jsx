import React from 'react'

import './VideoNav.styles.scss';

const VideoNav = ({ videoToggle }) => {
    return (
        <div className='videoNav'>VideoNav
            <button onClick={videoToggle}>full screen</button>
            <button>full list</button>
        </div>
    )
}

export default VideoNav;