import React, { useState, useEffect } from 'react'

// ------------ STYLES ---------- //
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
            <h1 className='logo'>YouTube</h1>
            <form onSubmit={handleSubmit} >

                <input
                    type="text"
                    // value={term}
                    placeholder="VIDEO SEARCH"
                    onChange={(e) => { setTerm(e.target.value) }}
                />
            </form>
        </div>
    )
}

export default Search;