import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// ------------ STYLES ---------- //
import { FaYoutube, FaSearch, FaMicrophone } from 'react-icons/fa';
import { BiVideoPlus, BiHistory } from 'react-icons/bi';
import { FiYoutube } from 'react-icons/fi';
import { BsGrid3X3Gap, BsBell, BsX, BsList, BsHouseDoorFill, BsCompass, BsCollectionPlay, BsFillPlayBtnFill, BsClock, BsHandThumbsUp, BsChevronDown } from "react-icons/bs";
import "./Search.styles.scss";


const Search = ({ onTermSubmit }) => {
    const [term, setTerm] = useState('web development');
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => (onTermSubmit(term)), []); //<--searchs default term

    const handleSubmit = (event) => {
        event.preventDefault();
        return onTermSubmit(term);
    };
    const handleMenuSlide = () => {
        setOpenMenu(!openMenu);
    }
    return (
        <div className='searchContainer'>
            <BsList onClick={() => { handleMenuSlide() }} className='searchBars searchIcons' />

            <div className={openMenu ? "searchMenu active" : "searchMenu"}>
                <div><BsHouseDoorFill />home</div>
                <div><BsCompass />Explore</div>
                <div><BsCollectionPlay />Subscriptions</div>
                <hr />
                <div><FiYoutube />Library</div>
                <div><BiHistory />History</div>
                <div><BsFillPlayBtnFill />Your videos</div>
                <div><BsClock />Watch later</div>
                <div><BsHandThumbsUp />Liked videos</div>
                <div><BsChevronDown />Show more</div>
                <hr />
                <div>SUBSCRIPTIONS</div>
            </div>

            <Link to="/" className='toolTip'>
                <div className='logo'><FaYoutube className='logoIcon searchIcons' />YouTube</div>
                <p className='toolTipText'>YouTube Home</p>
            </Link>

            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    // value={term}
                    placeholder="Search"
                    onChange={(e) => { setTerm(e.target.value) }}
                />
                <BsX className='deleteIcon searchIcons' />

                <div className='toolTip'>
                    <FaSearch className='searchIcon searchIcons' />
                    <p className='toolTipText'>Search</p>
                </div>

                <div className='toolTip'>
                    <FaMicrophone className='microphone searchIcons' />
                    <p className='toolTipText'>Search with your voice</p>
                </div>

            </form>
            <div className='iconGroup'>


                <div className='toolTip'>
                    <BiVideoPlus className='videoIcon searchIcons ' />
                    <p className='toolTipText'>Create</p>
                </div>

                <div className='toolTip'>
                    <BsGrid3X3Gap className='searchIcons' />
                    <p className='toolTipText'>YouTube apps</p>
                </div>

                <div className='toolTip'>
                    <BsBell className='searchIcons' />
                    <p className='toolTipText'>Notifications</p>
                </div>

                <img src="#" alt="pic" />
            </div>
        </div >
    )
}

export default Search;