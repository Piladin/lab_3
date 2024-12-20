import { Link } from 'react-router-dom';
import './Header.css';

const handleLogout = () => {
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('refresh_token');
    console.log('User logged out');
    // Optionally, redirect to the login page
    window.location.href = '/login';
};

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <Link to="/users" className="header-link home-link">Home</Link>
                <nav className="header-nav">
                    <Link to="/login" className="header-link">Login</Link>
                    <Link to="/register" className="header-link">Register</Link>
                    <button onClick={handleLogout} className="header-link">Logout</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;