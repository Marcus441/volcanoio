import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthToken from "../Hooks/useAuthToken";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const [showComponent, setShowComponent] = useState(true)

    const token = useAuthToken();

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
                    {!token && <>
                        <Link to="/login"> Login</Link>
                        <Link to="/register"> Register</Link>
                    </>}
                    {
                        token && <a onClick={handleLogout}>Logout</a>
                    }
                </div>
            </nav>
        )
    );
}

export default Navbar;