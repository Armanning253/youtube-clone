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
            <BsList className='searchBars searchIcon' />
            <h1 className='logo'><FaYoutube className='logoIcon searchIcon' />YouTube</h1>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    // value={term}
                    placeholder="VIDEO SEARCH"
                    onChange={(e) => { setTerm(e.target.value) }}
                />
                <BsX className='searchIcon' />
                <FaSearch className='searchIcon' />
            </form>
            <div className='iconGroup'>
                <FaMicrophone className='searchIcon' />
                <BiVideoPlus className='searchIcon videoIcon' />
                <BsGrid3X3Gap className='searchIcon' />
                <BsBell className='searchIcon' />
                <img src="#" alt="profile" />
            </div>
        </div>
    )
}

export default Search;