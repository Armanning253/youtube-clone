import React, { useState, useEffect } from 'react'


const Search = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        return onFormSubmit(term);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label htmlFor="search">Video Search</label>
                <br />
                <input
                    type="text"
                    value={term}
                    onChange={(e) => { setTerm(e.target.value) }}
                />
            </form>
            <div>{term}</div>
        </div>
    )
}

export default Search;