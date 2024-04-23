import { useState, useEffect } from "react";

const useAuthToken = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {

        if (token) {
            const tokenExpiry = JSON.parse(atob(token.split('.')[1])).exp;
            if (Date.now() >= tokenExpiry * 1000) {
                localStorage.removeItem('token');
                console.log('Token expired');
                setToken(null);
            }
        }
    }, [token]);

    return token;
}

export default useAuthToken;