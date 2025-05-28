import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const testimonials = [
        {
            id: 1,
            name: "Alex Thompson",
            role: "MMA Fighter",
            image: "🥋",
            quote: "StrikerAI transformed my training. The real-time feedback helped me perfect my techniques faster than ever.",
            rating: 5
        },
        {
            id: 2,
            name: "Sarah Chen",
            role: "Kickboxing Enthusiast",
            image: "🥊",
            quote: "The personalized roadmap helped me progress from complete beginner to confident fighter in just months.",
            rating: 5
        },
        {
            id: 3,
            name: "Marcus Rodriguez",
            role: "Boxing Coach",
            image: "🥊",
            quote: "I recommend StrikerAI to all my students. The AI analysis catches details that even experienced coaches might miss.",
            rating: 5
        }
    ];

    return (
        <div className="home">
            <div className="hero">
                <div className="hero-content">
                    <h1>
                        <span className="title-dim">Transform Your</span>
                        <div className="highlight-text">Combat Sports</div>
                        <span className="title-dim">Training</span>
                    </h1>
                    <p>
                        Your personal AI coach that analyzes, guides, and elevates your performance
                    </p>
                    <Link to="/get-started" className="cta-button">
                        Start Training Now
                    </Link>
                </div>
            </div>

            <section className="features">
                <div className="features-container">
                    <div className="feature">
                        <div className="feature-content">
                            <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h3>Zero To Hero Roadmap</h3>
                            <p>Structured progression from beginner to advanced fighter</p>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="feature-content">
                            <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h3>Real-time Analysis</h3>
                            <p>Advanced AI-powered feedback on your form and technique</p>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="feature-content">
                            <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
                                <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M18 9l-4 4-4-4-4 4"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h3>Performance Tracking</h3>
                            <p>Data-driven insights to optimize your training progression</p>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="feature-content">
                            <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
                                <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
                            </svg>
                            <h3>Personalized Training</h3>
                            <p>Custom programs adapted to your skill level and goals</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <div className="testimonials-container">
                    <h2 className="testimonials-title">What Our Fighters Say</h2>
                    <div className="testimonials-grid">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="testimonial-card">
                                <div className="testimonial-header">
                                    <div className="testimonial-image">
                                        {testimonial.image}
                                    </div>
                                    <div className="testimonial-info">
                                        <h3>{testimonial.name}</h3>
                                        <p className="testimonial-role">{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="testimonial-rating">
                                    {"★".repeat(testimonial.rating)}
                                </div>
                                <p className="testimonial-quote">{testimonial.quote}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home; 