import { Link } from "react-router-dom";

function Home() {
    return (
            <div className='landing-page'>
                <h1>Welcome to our Landing Page!</h1>
                <p>This is the starting point of our application.</p>
                <Link to="/volcano-list">Search for volcanos</Link>
            </div>
    );
}

export default Home;
