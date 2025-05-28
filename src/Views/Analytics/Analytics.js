import React from 'react';
import './Analytics.css';

const Analytics = () => (
    <div className="page-container">
        <h1 className="section-title">Performance Analytics</h1>
        <p className="section-description">Track your progress with detailed metrics and insights powered by AI.</p>

        <div className="feature-grid">
            <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3 className="feature-title">Progress Tracking</h3>
                <p className="feature-description">Monitor your improvement over time with detailed performance metrics.</p>
            </div>
            <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3 className="feature-title">Technique Analysis</h3>
                <p className="feature-description">Get detailed breakdowns of your form and movement patterns.</p>
            </div>
            <div className="feature-card">
                <div className="feature-icon">💪</div>
                <h3 className="feature-title">Strength Metrics</h3>
                <p className="feature-description">Track power output and speed improvements in your strikes.</p>
            </div>
        </div>
    </div>
);

export default Analytics; 