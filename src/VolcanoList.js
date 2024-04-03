import Volcanoes from "./Volcanoes";
import FetchData from "./FetchData";

function Home() {
    const {data, pending, error} = FetchData('http://4.237.58.241:3000/volcanoes?country=Japan');
    return (
            <div className="volcano-list">
                {error && <div>{error}</div>}
                {pending && <div>Loading...</div>}
                {data && <Volcanoes volcanoes={data} />}
            </div>

    );
}

export default Home;
