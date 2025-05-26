import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './Views/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/training" element={<Training />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const Home = () => (
  <div className="page-container">
    <section className="hero-section">
      <h1 className="hero-title">Welcome to StrikerAI</h1>
      <p className="hero-subtitle">Your personal AI combat sports coach & roadmap for mastering striking offense and defense</p>
      <Link to="/get-started" className="primary-button">Start Your Journey</Link>
    </section>

    <section className="feature-grid">
      <div className="feature-card">
        <div className="feature-icon">🎯</div>
        <h3 className="feature-title">Real-time Analysis</h3>
        <p className="feature-description">Get instant feedback on your form, technique, and movement patterns through advanced AI analysis.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">📈</div>
        <h3 className="feature-title">Performance Tracking</h3>
        <p className="feature-description">Track your progress with detailed metrics and analytics to optimize your training routine.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">🥊</div>
        <h3 className="feature-title">Personalized Training</h3>
        <p className="feature-description">Receive customized training plans based on your skill level, goals, and fighting style.</p>
      </div>
    </section>
  </div>
);

const Features = () => (
  <div className="page-container">
    <h1 className="section-title">Features</h1>
    <p className="section-description">Discover how StrikerAI revolutionizes combat sports training with cutting-edge AI technology.</p>

    <div className="feature-grid">
      <div className="feature-card">
        <div className="feature-icon">🤖</div>
        <h3 className="feature-title">AI Form Analysis</h3>
        <p className="feature-description">Advanced computer vision analyzes your technique in real-time, providing instant feedback.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">📱</div>
        <h3 className="feature-title">Mobile Integration</h3>
        <p className="feature-description">Train anywhere with our mobile app that tracks and analyzes your movements.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">🎓</div>
        <h3 className="feature-title">Skill Progression</h3>
        <p className="feature-description">Follow a structured learning path that adapts to your improvement.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">🔄</div>
        <h3 className="feature-title">Real-time Feedback</h3>
        <p className="feature-description">Get immediate suggestions to improve your form and technique during training.</p>
      </div>
    </div>
  </div>
);

const Training = () => (
  <div className="page-container">
    <h1 className="section-title">Training Programs</h1>
    <p className="section-description">Choose from our variety of AI-powered training programs designed for all skill levels.</p>

    <div className="training-grid">
      <div className="training-card">
        <div className="training-content">
          <h3 className="training-title">Beginner Fundamentals</h3>
          <p className="training-description">Master the basic techniques and build a strong foundation in combat sports.</p>
        </div>
      </div>
      <div className="training-card">
        <div className="training-content">
          <h3 className="training-title">Advanced Combinations</h3>
          <p className="training-description">Learn complex striking patterns and improve your fight IQ.</p>
        </div>
      </div>
      <div className="training-card">
        <div className="training-content">
          <h3 className="training-title">Defense Mastery</h3>
          <p className="training-description">Develop impenetrable defense techniques and counter-striking abilities.</p>
        </div>
      </div>
    </div>
  </div>
);

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

const GetStarted = () => (
  <div className="page-container">
    <h1 className="section-title">Get Started with StrikerAI</h1>
    <p className="section-description">Begin your journey to becoming a better fighter today.</p>

    <div className="feature-grid">
      <div className="feature-card">
        <div className="feature-icon">1️⃣</div>
        <h3 className="feature-title">Create Account</h3>
        <p className="feature-description">Sign up and complete your fighter profile to get personalized recommendations.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">2️⃣</div>
        <h3 className="feature-title">Set Goals</h3>
        <p className="feature-description">Define your training objectives and preferred fighting style.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">3️⃣</div>
        <h3 className="feature-title">Start Training</h3>
        <p className="feature-description">Begin your AI-powered training program and track your progress.</p>
      </div>
    </div>

    <div className="cta-section">
      <Link to="/get-started" className="primary-button">Create Your Account</Link>
    </div>
  </div>
);

export default App;
