import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

import VolcanoMap from "../Components/VolcanoMap";

const Volcano = () => {
    const { id } = useParams();
    const url = 'http://4.237.58.241:3000/volcano/' + id;

    const token = localStorage.getItem("token");

    const { data: volcano, pending, error } = useFetch(url, token);

    return (
        <div className="volcano">
            {error && <div>{error}</div>}
            {pending && <div>Loading...</div>}
            {volcano && (
                <div>
                    <h2>{volcano.name}</h2>
                    <p>Region: {volcano.region}</p>
                    <p>Subregion: {volcano.subregion}</p>
                    <p>Last Erupted: {volcano.last_eruption}</p>
                    <p>Summit: {volcano.summit} m</p>
                    <p>Elevation: {volcano.elevation} ft</p>
                    <VolcanoMap lat={volcano.latitude} lng={volcano.longitude}></VolcanoMap>
                </div>
            )}
        </div>
    );
};

export default Volcano;
