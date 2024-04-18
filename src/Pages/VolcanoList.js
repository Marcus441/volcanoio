import { useState } from "react";

import Volcanoes from "../Components/Volcanoes";
import SearchBar from "../Components/SearchBar";
import DropDown from "../Components/DropDown";

import useFetch from "../Hooks/useFetch";

import { buildURL } from "../Utils/utils";


function VolcanoList() {
    const [country, setCountry] = useState('');
    const [populatedWithin, setpopulatedWithin] = useState('');

    const url = buildURL('http://4.237.58.241:3000/volcanoes', { country, populatedWithin });

    const { data, pending, error } = useFetch(country ? url.toString() : null);

    const handleSearch = (searchTerm) => {
        setCountry(searchTerm);
        setpopulatedWithin(populatedWithin);
    }
    return (
        <div className="volcano-list">
            {!country && <h2>Please search for a country!</h2>}
            {country && <h2>Results for {country}</h2>}
            <div className="search-params">
                <SearchBar onSearch={handleSearch}></SearchBar>
                <div>
                    <label>Populated Within:</label>
                    <DropDown options={['', '5km', '10km', '30km', '100km']} onChange={setpopulatedWithin}></DropDown>
                </div>
            </div>
            {error && <div>{error}</div>}
            {pending && <div>Loading...</div>}
            {data && <Volcanoes volcanoes={data} />}
        </div>

    );
}

export default VolcanoList;
