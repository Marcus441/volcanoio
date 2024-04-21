const Login = () => {
    return (
        <div className="login">
            <h2>Login</h2>
            <form>
                <div className="input-group">
                    <label>Email:</label>
                    <input type="email" required />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input type="password" required />
                </div>
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;