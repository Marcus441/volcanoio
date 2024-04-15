import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className='search-bar'>
            <input
                type="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;