import LoginForm from '../Components/LoginForm';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../Utils/api';

const Login = () => {
    const navigate = useNavigate();
    
    const handleLogin = (credentials) => {
        authenticate(credentials)
            .then((isAuthenticated) => {
                if (isAuthenticated) {
                    navigate('/volcano-list');
                }
            });
    };

    return (
        <LoginForm mode={'Login'} onSubmit={handleLogin}></LoginForm>
    );
}

export default Login;