// src/Views/HomePage.js
import React from 'react';
import './HomePage.css';

const HomePage = () => {
    const handleStart = () => {
        // Placeholder: You can link to roadmap or signup route
        alert('Redirecting to your personalized training roadmap...');
    };

    return (
        <div className="striker-homepage">
            <h1>Welcome to Striker AI</h1>
            <p>Your personal AI coach & roadmap for mastering striking offense and defense.</p>

            <div className="striker-box">
                🥊 Learn. Train. Dominate.
            </div>

            <button className="striker-button" onClick={handleStart}>
                Start Your Training
            </button>
        </div>
    );
};

export default HomePage;
