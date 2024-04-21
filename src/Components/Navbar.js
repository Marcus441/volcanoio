import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const [showComponent, setShowComponent] = useState(true)

    useEffect(() => {
        if (location.pathname === '/') {
            setShowComponent(false)
        }
        else {
            setShowComponent(true)
        }
    }, [location])

    return (
        showComponent && (
            <nav className="navbar">
                <header ><h1>Volcano.io</h1></header>
                <div className="links">
                    <Link to="/home">Home</Link>
                    <Link to="/volcano-list">Volcano List</Link>
                    <Link to="/login"> Login</Link>
                    <Link to="/register"> Register</Link>
                </div>
            </nav>
        )
    );
}

export default Navbar;