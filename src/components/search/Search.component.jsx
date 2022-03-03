import React, { useState } from 'react'

// ------------ STYLES ---------- //
import "./Search.styles.scss";


const Search = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        return onFormSubmit(term);
    }
    return (
        <div className='searchContainer'>
            <form onSubmit={handleSubmit} >

                <input
                    type="text"
                    value={term}
                    placeholder="VIDEO SEARCH"
                    onChange={(e) => { setTerm(e.target.value) }}
                />
            </form>
        </div>
    )
}

export default Search;