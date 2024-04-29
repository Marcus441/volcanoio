import { Link } from "react-router-dom";
// import hero from "./assets/hero.png"

function Home() {
    return (
        // <div className='landing-page'>
        // </div>
        <div id="landing-page" className="landing-page">
            <div className="w-screen h-screen text-white">
                <div class=" p-5">
                    <h1>Welcome to our Landing Page!</h1>
                    <p>This is the starting point of our application.</p>
                    <Link to="/volcano-list">Search for volcanos</Link>
                </div>
            </div >
        </div>

    );

}

export default Home;
