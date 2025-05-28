import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement newsletter signup
        console.log('Newsletter signup:', email);
        setEmail('');
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-grid">
                    {/* Company Info */}
                    <div className="footer-section">
                        <Link to="/" className="footer-logo">
                            Striker<span>AI</span>
                        </Link>
                        <p className="footer-description">
                            Your personal AI combat sports coach, revolutionizing training through artificial intelligence.
                        </p>
                        <div className="social-links">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <i className="social-icon">𝕏</i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                📸
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                📺
                            </a>
                            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                                💬
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/features">Features</Link></li>
                            <li><Link to="/training">Training</Link></li>
                            <li><Link to="/analytics">Analytics</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/get-started">Get Started</Link></li>
                        </ul>
                    </div>

                    {/* Training */}
                    <div className="footer-section">
                        <h3>Training</h3>
                        <ul className="footer-links">
                            <li><Link to="/training#basics">Basic Techniques</Link></li>
                            <li><Link to="/training#advanced">Advanced Combos</Link></li>
                            <li><Link to="/training#analysis">Fight Analysis</Link></li>
                            <li><Link to="/training#programs">Training Programs</Link></li>
                            <li><Link to="/training#community">Community</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-section">
                        <h3>Stay Updated</h3>
                        <p className="newsletter-text">
                            Get the latest updates on new features and training tips.
                        </p>
                        <form onSubmit={handleSubmit} className="newsletter-form">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                            <button type="submit" className="newsletter-button">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            © {new Date().getFullYear()} StrikerAI. All rights reserved.
                        </p>
                        <div className="legal-links">
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/terms">Terms of Service</Link>
                            <Link to="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 