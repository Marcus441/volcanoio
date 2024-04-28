import { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../Contexts/AuthContext';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [showComponent, setShowComponent] = useState(true)

    const { authToken: token, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
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
                    {!token &&
                        <Link to="/login"> Login</Link>
                    }
                    {
                        token && <button className="logout-button" onClick={handleLogout}>
                            Logout
                        </button>
                    }
                </div>
            </nav>
        )
    );
}

export default Navbar;