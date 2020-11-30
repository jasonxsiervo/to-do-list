import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './styles/Login.css';

function Login({ login }) {

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(false);
    const isLogged = useSelector((state) => state.isLogged);

    const handleLoggingIn = (e) => {
        e.preventDefault();
        if (credentials.email === isLogged.email && credentials.password === isLogged.password) {
            login();
        } else {
            setError(true);
        }
    }

    return (
        <div className="container">
            <div className={error ? "login-container-error" : "login-container"}>
                <p className="logo">🐧</p>

                {
                    error ?
                        <div className="error-message">
                            📢 Email/Password Incorrect
                        </div>
                        :
                        null
                }

                <form className="form-inner" onSubmit={handleLoggingIn}>
                    <div className="form-group">
                        <label className="email">Email</label>
                        <input
                            type="email"
                            className="input"
                            onChange={e => setCredentials({ ...credentials, email: e.target.value })}
                            value={credentials.email}
                            placeholder="Email"
                            id="email"
                            name="email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="password">Password</label>
                        <input
                            type="password"
                            className="input"
                            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                            value={credentials.password}
                            placeholder="Password"
                            id="password"
                            name="password"
                            required
                        />
                    </div>
                    <button title="Login" className="login-button" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
