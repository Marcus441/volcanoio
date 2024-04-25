import React, { useState } from 'react';
import useFetch from '../Hooks/useFetch';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data: countries = [] } = useFetch('http://4.237.58.241:3000/countries') || {};

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSearch = () => {
        onSearch(searchTerm);
        console.log('Searching for:', searchTerm);
    };

    const suggestions = searchTerm
        ? countries.filter(country =>
            country.toLowerCase().startsWith(searchTerm.toLowerCase())
        )
        : [];

    return (
        <div className='search-bar'>
            <input
                type="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
            />
            <button onClick={handleSearch}>Search</button>
            {suggestions.length > 0 && (
                <div className="suggestions">
                    {suggestions.map((suggestion, index) => (
                        <div key={index} onClick={() => setSearchTerm(suggestion)}>
                            {suggestion}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;