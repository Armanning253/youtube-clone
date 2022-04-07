import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// ------------ COMPONENTS ---------- //
import MenuBar from '../menubar/MenuBar';

// ------------ STYLES ---------- //
import { FaYoutube, FaSearch, FaMicrophone } from 'react-icons/fa';
import { BiVideoPlus } from 'react-icons/bi';
import { BsGrid3X3Gap, BsBell, BsX, BsList } from "react-icons/bs";
import "./Search.styles.scss";


const Search = ({ onTermSubmit }) => {

    const [term, setTerm] = useState('web development');
    const [openMenu, setOpenMenu] = useState(false);
    const [overlay, setOverlay] = useState(false);
    const [modal, setModal] = useState(false);
    const [videoCreateMenu, setVideoCreateMenu] = useState(false);
    const [appMenu, setAppMenu] = useState(false);



    useEffect(() => (onTermSubmit(term)), []); //<--searchs default term

    const handleSubmit = (event) => {
        event.preventDefault();
        return onTermSubmit(term);
    };
    const handleMenuSlide = () => {
        setOpenMenu(!openMenu);
        if (overlay == openMenu) { handleOverlay() }
    }
    const handleOverlay = () => {
        setOverlay(!overlay);
    }
    const handleModal = () => {
        handleOverlay()
        setModal(!modal)
    }
    const handleVideoCreateMenu = () => {
        handleOverlay()
        setVideoCreateMenu(!videoCreateMenu)
    }
    const handleAppMenu = () => {
        handleOverlay()
        setAppMenu(!appMenu)
    }

    return (

        <div className='searchContainer'>

            {/* -------- MAIN MENU ICON ----------- */}
            <BsList onClick={() => { handleMenuSlide() }} className='searchBars searchIcons' />

            {/* -------- MAIN SLIDE MENU ----------- */}
            <div className={openMenu ? "searchMenu active" : "searchMenu"}>
                <span>
                    <BsList onClick={() => { handleMenuSlide() }} className='searchBars searchIcons' />
                    <Link to="/" className='toolTip'>
                        <div className='logo'><FaYoutube className='logoIcon searchIcons' />YouTube</div>
                        <p className='toolTipText'>YouTube Home</p>
                    </Link>
                </span>

                <MenuBar />
            </div>

            {/* -------- OVERLAY DIV----------- */}
            <div className={overlay ? 'overlay' : ''} ></div>

            {/* -------- YOUTUBE LOGO ICON ----------- */}
            <Link to="/" className='toolTip'>
                <div className='logo'><FaYoutube className='logoIcon searchIcons' />YouTube</div>
                <p className='toolTipText'>YouTube Home</p>
            </Link>
            {/* -------- SEARCH INPUT ----------- */}
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    // value={term}
                    placeholder="Search"
                    onChange={(e) => { setTerm(e.target.value) }}
                />
                <BsX className='deleteIcon searchIcons' />

                {/* -------- SEARCH ICON ----------- */}
                <div className='toolTip'>
                    <FaSearch className='searchIcon searchIcons' />
                    <p className='toolTipText'>Search</p>
                </div>

                <div className='toolTip'>

                    {/* -------- MICROPHONE ICON ----------- */}
                    <FaMicrophone
                        onClick={() => { handleModal() }}
                        className='microphone searchIcons' />

                    <p className='toolTipText'>Search with your voice</p>

                    <div className={modal ? 'modal active' : 'modal'}> {/* MODAL */}
                        <div className='modalHeader'>
                            <div className='modalTitle'>
                                <h2>Search with your voice</h2>
                            </div>
                            <div className='modalExitBtn' onClick={handleModal}>
                                <BsX />
                            </div>
                        </div>

                        <p>To search by voice, go to your browser settings and allow access to microphone</p>
                        <div className='modalMicIcon'>
                            <FaMicrophone />
                        </div>
                    </div>

                </div>

            </form >
            {/* -------- ICON GROUPING ----------- */}
            <div className='iconGroup'>

                {/* -------- VIDEO CREATION ICON ----------- */}
                {/* <div className='toolTip'>
                    <BiVideoPlus className='videoIcon searchIcons ' onClick={handleVideoCreateMenu} />
                    <p className='toolTipText'>Create</p>
                    <div className={videoCreateMenu ? 'dropdown active' : 'dropdown'} > create videos</div>
                </div> */}
                {/* -------- GRID APPS ICON ----------- */}
                <div className='toolTip'>
                    <BsGrid3X3Gap className='searchIcons' onClick={handleAppMenu} />
                    <p className='toolTipText'>YouTube apps</p>
                    <div className={appMenu ? 'dropdown active' : 'dropdown'}></div>
                </div>
                {/* -------- 3 VERTICAL DOTS ICON ----------- */}



                {/* -------- NOTIFICATION BELL ICON ----------- */}
                {/* <div className='toolTip'>
                    <BsBell className='searchIcons' />
                    <p className='toolTipText'>Notifications</p>
                </div> */}
                {/* -------- SIGN IN BUTTON ----------- */}
                <button className='signInBtn'>SIGN IN</button>
                {/* -------- PROFILE ----------- */}
                {/* <img src="#" alt="pic" /> */}
            </div>
        </div >
    )
}

export default Search;