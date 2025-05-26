import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo-container">
                    <Link to="/" className="logo">
                        Striker<span>AI</span>
                    </Link>
                </div>

                <nav className="nav-links">
                    <Link to="/features" className="nav-link">Features</Link>
                    <Link to="/training" className="nav-link">Training</Link>
                    <Link to="/analytics" className="nav-link">Analytics</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/get-started" className="cta-button">Get Started</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
