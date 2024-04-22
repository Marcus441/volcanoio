import LoginForm from '../Components/LoginForm';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const URL = 'http://4.237.58.241:3000/user/login';
    const navigate = useNavigate();
    
    const authenticate = (credentials) => {
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
                    navigate('/home');
                }
            });
    };
    return (

        <LoginForm mode={'Login'} onSubmit={authenticate}></LoginForm>
    );
}

export default Login;