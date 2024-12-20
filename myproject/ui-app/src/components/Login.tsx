import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login/', {
                username: username,
                password: password
            });
            const { access, refresh } = response.data;
            sessionStorage.setItem('access_token', access);
            sessionStorage.setItem('refresh_token', refresh);
            console.log('Login successful:', response.data);
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div className="form-container">
            <h1 className="form-header">Login</h1>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label className="form-label">User name</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="John Doe"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-input"
                        placeholder="min 8 characters"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="submit-button">
                    SUBMIT
                </button>
            </form>
        </div>
    );
};

export default Login;
