import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <Link to="/" className="logo">
                    <span className="logo-text">StrikerAI</span>
                </Link>

                <button
                    className={`mobile-menu-button ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/features" className="nav-link">Features</Link>
                    <Link to="/training" className="nav-link">Training</Link>
                    <Link to="/analytics" className="nav-link">Analytics</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/get-started" className="nav-button button-primary">Get Started</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header; 