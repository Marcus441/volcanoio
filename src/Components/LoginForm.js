import { useState } from "react";

const LoginForm = ({ mode, onSubmit }) => {
    const method = mode === 'Login' ? 'Login' : 'Register';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password });
    }

    return (
        <div className="Login-Form">
            <h2>{method}</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </div>
                {mode === 'Register' && (
                    <div className="input-group">
                        <label>
                            Confirm Password:
                        </label>
                        <input type="password" />
                    </div>
                )}
                <button type="submit">{method}</button>
            </form>
        </div>
    );
}

export default LoginForm;