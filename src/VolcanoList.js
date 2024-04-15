import Volcanoes from "./Volcanoes";
import FetchData from "./FetchData";
import Search from "./Search";
import { useState } from "react";
import { buildURL } from "./utils";

function VolcanoList() {
    const [country, setCountry] = useState('');
    const [populatedWithin, setpopulatedWithin] = useState('');

    const url = buildURL('http://4.237.58.241:3000/volcanoes', { country, populatedWithin });
    
    const { data, pending, error } = FetchData(country ? url.toString() : null);

    const handleSearch = (searchTerm, filterTerm) => {
        setCountry(searchTerm);
        setpopulatedWithin(filterTerm);
    }

    return (
        <div className="volcano-list">
            <Search onSearch={handleSearch}></Search>
            {!country && <h2>Please search for a country!</h2>}
            {country && <h2>Results for {country}</h2>}
            {error && <div>{error}</div>}
            {pending && <div>Loading...</div>}
            {data && <Volcanoes volcanoes={data} />}
        </div>

    );
}

export default VolcanoList;
