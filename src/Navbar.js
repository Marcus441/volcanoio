import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <header ><h1>Volcano.io</h1></header>
            <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/"> Volcano List</Link>
                <Link to="/"> Register</Link>
                <Link to="/"> Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;