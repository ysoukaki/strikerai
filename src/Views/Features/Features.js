import React from 'react';
import './Features.css';

const Features = () => (
    <div className="page-container">
        <div className="features-grid">
            <div className="feature-column">
                <div className="feature-item">
                    <div className="feature-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#ff3e3e" />
                            <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="#ff3e3e" />
                        </svg>
                    </div>
                    <h2>AI-Powered Analysis</h2>
                    <p className="feature-description">
                        Get instant feedback on your technique and performance through advanced computer vision
                    </p>
                    <ul className="feature-list">
                        <li>Real-time form analysis through your webcam</li>
                        <li>Detailed breakdown of sparring footage</li>
                        <li>Frame-by-frame technique assessment</li>
                        <li>Personalized improvement suggestions</li>
                    </ul>
                </div>

                <div className="feature-item">
                    <div className="feature-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3H21V21H3V3ZM5 5V19H19V5H5Z" fill="#ff3e3e" />
                            <path d="M7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H13V17H7V15Z" fill="#ff3e3e" />
                        </svg>
                    </div>
                    <h2>Personalized Roadmap</h2>
                    <p className="feature-description">
                        Follow a structured path designed specifically for your skill level and goals
                    </p>
                    <ul className="feature-list">
                        <li>Progressive offensive techniques</li>
                        <li>Advanced defensive maneuvers</li>
                        <li>Footwork and movement patterns</li>
                        <li>Strategic combination building</li>
                    </ul>
                </div>
            </div>

            <div className="feature-column">
                <div className="feature-item">
                    <div className="feature-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3V21H21V3H3ZM19 19H5V5H19V19Z" fill="#ff3e3e" />
                            <path d="M7 17L11 13L13 15L17 11V17H7Z" fill="#ff3e3e" />
                        </svg>
                    </div>
                    <h2>Track Your Progress</h2>
                    <p className="feature-description">
                        Monitor your improvement with detailed analytics and performance metrics
                    </p>
                    <ul className="feature-list">
                        <li>Comprehensive skill progression charts</li>
                        <li>Performance analytics dashboard</li>
                        <li>Reaction time measurements</li>
                        <li>Win/loss ratio tracking</li>
                    </ul>
                </div>

                <div className="feature-item">
                    <div className="feature-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#ff3e3e" />
                            <path d="M15 8L8 15M8 8L15 15" stroke="#ff3e3e" strokeWidth="2" />
                        </svg>
                    </div>
                    <h2>Smart Drills</h2>
                    <p className="feature-description">
                        AI-powered training exercises that adapt to your performance and target weaknesses
                    </p>
                    <ul className="feature-list">
                        <li>Dynamic difficulty adjustment</li>
                        <li>Weakness-targeted exercises</li>
                        <li>Real-time performance feedback</li>
                        <li>Progressive challenge system</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="pricing-grid">
            <div className="pricing-card free">
                <h2>Free Tier</h2>
                <div className="price">
                    <span className="amount">$0</span>
                    <span className="period">/month</span>
                </div>
                <ul className="pricing-features">
                    <li>Basic Roadmap</li>
                    <li>Fundamental Techniques</li>
                    <li>Basic Progress Tracking</li>
                    <li>Community Support</li>
                    <li>Limited Drills</li>
                </ul>
                <button className="pricing-button free">Get Started Free</button>
            </div>

            <div className="pricing-card pro">
                <div className="popular-tag">Most Popular</div>
                <h2>Pro Tier</h2>
                <div className="price">
                    <span className="amount">$29</span>
                    <span className="period">/month</span>
                </div>
                <ul className="pricing-features">
                    <li>Everything in Free Tier</li>
                    <li>AI Video Analysis</li>
                    <li>Advanced Progress Tracking</li>
                    <li>Personalized Training Plans</li>
                    <li>Advanced Technique Modules</li>
                    <li>Performance Analytics</li>
                    <li>Priority Support</li>
                </ul>
                <button className="pricing-button pro">Start Pro Trial</button>
            </div>
        </div>
    </div>
);

export default Features; 