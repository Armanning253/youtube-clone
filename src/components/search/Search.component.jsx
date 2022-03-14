import React, { useState, useEffect } from 'react'

// ------------ STYLES ---------- //
import { FaYoutube, FaSearch, FaBars, FaMicrophone } from 'react-icons/fa';
import { BiVideoPlus } from 'react-icons/bi';
import { BsGrid3X3Gap, BsBell, BsX, BsList } from "react-icons/bs";
import "./Search.styles.scss";


const Search = ({ onTermSubmit }) => {
    const [term, setTerm] = useState('web development');

    useEffect(() => (onTermSubmit(term)), []);

    const handleSubmit = (event) => {
        event.preventDefault();
        return onTermSubmit(term);
    }
    return (
        <div className='searchContainer'>
            <BsList className='searchBars searchIcons' />

            <div className='toolTip'>
                <div className='logo'><FaYoutube className='logoIcon searchIcons' />YouTube</div>
                <p className='toolTipText'>YouTube Home</p>
            </div>


            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    // value={term}
                    placeholder="VIDEO SEARCH"
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