
const authenticate = (credentials) => {
    const URL = 'http://4.237.58.241:3000/user/login';
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.token) {
                localStorage.setItem('token', data.token);
                return true;
            }
            return false;
        });
};

const register = (credentials) => {
    const URL = 'http://4.237.58.241:3000/user/register';

    return fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.token) {
                localStorage.setItem('token', data.token);
                return true;
            }
            return false;
        });
};

export { authenticate, register };