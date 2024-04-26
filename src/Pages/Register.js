import RegisterForm from '../Components/RegisterForm';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const Register = () => {
    const { signup } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = async (credentials) => {
        await signup(credentials);
        navigate('/login');
    };

    return (
        <RegisterForm onSubmit={handleRegister} ></RegisterForm>
    );
}

export default Register;