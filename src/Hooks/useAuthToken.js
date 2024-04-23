const useAuthToken = () => {
    const token = localStorage.getItem('token');

    if (token) {
        const tokenExpiry = JSON.parse(atob(token.split('.')[1])).exp; 
        if (Date.now() >= tokenExpiry * 1000) {
            localStorage.removeItem('token');
            return null;
        }
    }

    return token;
}

export default useAuthToken;