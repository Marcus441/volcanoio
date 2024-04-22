import LoginForm from '../Components/LoginForm';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const URL = 'http://4.237.58.241:3000/user/register';
    const navigate = useNavigate();

    const register = (credentials) => {
        fetch(URL, {
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
                    navigate('/login');
                }
            });
    };

    return (
        <LoginForm mode={'Register'} onSubmit={register}></LoginForm>
    );
}

export default Register;