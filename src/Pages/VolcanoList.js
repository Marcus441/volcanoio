import Volcanoes from "../Components/Volcanoes";
import SearchBar from "../Components/SearchBar";
import useFetch from "../Hooks/useFetch";
import { buildURL } from "../Utils/utils";

import { useState } from "react";

function VolcanoList() {
    const [country, setCountry] = useState('');
    const [populatedWithin, setpopulatedWithin] = useState('');

    const url = buildURL('http://4.237.58.241:3000/volcanoes', { country, populatedWithin });
    
    const { data, pending, error } = useFetch(country ? url.toString() : null);

    const handleSearch = (searchTerm, filterTerm) => {
        setCountry(searchTerm);
        setpopulatedWithin(filterTerm);
    }

    return (
        <div className="volcano-list">
            {!country && <h2>Please search for a country!</h2>}
            {country && <h2>Results for {country}</h2>}
            <SearchBar onSearch={handleSearch}></SearchBar>
            {error && <div>{error}</div>}
            {pending && <div>Loading...</div>}
            {data && <Volcanoes volcanoes={data} />}
        </div>

    );
}

export default VolcanoList;
