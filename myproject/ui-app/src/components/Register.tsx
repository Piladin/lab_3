import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [privacyAccepted, setPrivacyAccepted] = useState(false);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const response = await axios.post('http://localhost:8000/api/register/', {
                username: username,
                email: email,
                password: password
            });
            console.log('Registration response:', response.data);
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    return (
        <div className="form-container">
            <h1 className="form-header">Register</h1>
            <form onSubmit={handleRegister}>
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
                    <label className="form-label">User mail</label>
                    <input
                        type="email"
                        className="form-input"
                        placeholder="john.doe@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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

                <div className="form-group">
                    <label className="form-label">Confirm password</label>
                    <input
                        type="password"
                        className="form-input"
                        placeholder="min 8 characters"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <div className="agreement-wrapper">
                    <input
                        type="checkbox"
                        id="privacyPolicy"
                        checked={privacyAccepted}
                        onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    />
                    <label htmlFor="privacyPolicy">
                        You agree to our friendly <span className="privacy-policy">privacy policy</span>.
                    </label>
                </div>

                <button type="submit" className="submit-button">
                    SUBMIT
                </button>
            </form>
        </div>
    );
};

export default Register;