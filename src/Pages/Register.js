import LoginForm from '../Components/LoginForm';
import { useNavigate } from 'react-router-dom';
import { register } from '../Utils/api';

const Register = () => {
    const navigate = useNavigate();

    const handleRegister = (credentials) => {
        register(credentials)
            .then((isRegistered) => {
                if (isRegistered) {
                    navigate('/login');
                }
            });
    };

    return (
        <LoginForm mode={'Register'} onSubmit={handleRegister}></LoginForm>
    );
}

export default Register;