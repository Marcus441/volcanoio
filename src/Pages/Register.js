import LoginForm from '../Components/LoginForm';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const Register = () => {
    const { signup } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = async (credentials) => {
        await signup(credentials);
        navigate('/login');
    };

    return (
        <LoginForm mode={'Register'} onSubmit={handleRegister}></LoginForm>
    );
}

export default Register;