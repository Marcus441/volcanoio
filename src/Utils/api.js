
const authenticate = async (credentials) => {
    const URL = 'http://4.237.58.241:3000/user/login';
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });
    const data = await response.json();
    console.log(data);
    if (data.token) {
        localStorage.setItem('token', data.token);
        return true;
    } else if (data.error) {
        if (data.message === 'Request body incomplete, both email and password are required') {
            throw new Error('Both email and password are required');
        } else
            throw new Error(data.message);

    }
    return false;
};

const register = async (credentials) => {
    const URL = 'http://4.237.58.241:3000/user/register';

    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });
    const data = await response.json();
    console.log(data);
    if (data.token) {
        localStorage.setItem('token', data.token);
        return true;
    } else if (data.error) {
        if (data.message === 'Request body incomplete, both email and password are required') {
            throw new Error('Both email and password are required');
        } else
            throw new Error(data.message);
    }
    return false;
};

export { authenticate, register };