import { Link } from "react-router-dom";


const Volcanoes = (prop) => {
    const data = [...prop.volcanoes].sort((a, b) => a.name.localeCompare(b.name));
    const name = data.name;

    return ( 
        <div className="volcano-table">
            <h2>{name}</h2>
            {data.map((volcano) => (
                <div className="volcano-preview" key={volcano.id}>
                    <Link to={`/volcano/${volcano.id}`}>
                        <h2>{volcano.name}</h2>
                        <p>Region: {volcano.region}</p>
                        <p>Subregion: {volcano.subregion}</p>
                    </Link>
                </div>
            ))}
        </div>

     );
}
 
export default Volcanoes;