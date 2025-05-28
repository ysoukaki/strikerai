import React from 'react';
import './About.css';

const About = () => (
    <div className="page-container">
        <h1 className="section-title">About StrikerAI</h1>
        <p className="section-description">We're revolutionizing combat sports training with cutting-edge AI technology.</p>

        <div className="feature-grid">
            <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3 className="feature-title">Our Mission</h3>
                <p className="feature-description">To make world-class combat sports training accessible to everyone through AI technology.</p>
            </div>
            <div className="feature-card">
                <div className="feature-icon">💡</div>
                <h3 className="feature-title">Innovation</h3>
                <p className="feature-description">Continuously developing new ways to improve training through machine learning and computer vision.</p>
            </div>
            <div className="feature-card">
                <div className="feature-icon">🤝</div>
                <h3 className="feature-title">Community</h3>
                <p className="feature-description">Building a global community of fighters and enthusiasts committed to improvement.</p>
            </div>
        </div>
    </div>
);

export default About; 