import { Link } from "react-router-dom";


function LandingPage() {
    return (
            <div className='landing-page'>
                <h1>Welcome to our Landing Page!</h1>
                <p>This is the starting point of our application.</p>
                <Link to="/home">Go to Home</Link>
            </div>
    );
}

export default LandingPage;