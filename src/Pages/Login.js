import LoginForm from '../Components/LoginForm';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleLogin = async (credentials) => {
        await login(credentials);
        navigate('/volcano-list');
    };

    return (
        <LoginForm mode={'Login'} onSubmit={handleLogin}></LoginForm>
    );
}

export default Login;