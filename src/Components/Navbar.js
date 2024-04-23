import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const [showComponent, setShowComponent] = useState(true)
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/login')
    };

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
                    {!localStorage.getItem("token") && <>
                        <Link to="/login"> Login</Link>
                        <Link to="/register"> Register</Link>
                    </>}
                    {
                        localStorage.getItem("token") && <button onClick={handleLogout}>Logout</button>
                    }
                </div>
            </nav>
        )
    );
}

export default Navbar;