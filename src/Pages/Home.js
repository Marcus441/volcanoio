import { Link } from "react-router-dom";

function Home() {
    return (
        <div id="landing-page" className="landing-page w-screen h-screen text-white flex items-center justify-center">
            <div className="p-10 flex flex-col items-center justify-center">
                <h1 className="text-6xl text-white mb-4">Volcano.io</h1>
                <p className="text-lg text-white mb-4">The ultimate volcano database</p>
                <div className="flex items-center justify-center mb-4">
                    <Link to="/login" className="text-white no-underline px-4 py-2 border-2 border-white mr-4">Login</Link>
                    <Link to="/register" className="text-white no-underline px-4 py-2 border-2 border-white">Register</Link>
                </div>
                <Link to="/volcano-list" className="text-white no-underline">Search for volcanos</Link>
            </div>
        </div>
    );
}

export default Home;