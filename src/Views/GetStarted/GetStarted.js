import React from 'react';
import { Link } from 'react-router-dom';
import './GetStarted.css';

const GetStarted = () => (
    <div className="page-container">
        <div className="pricing-header">
            <h1 className="section-title">Choose Your Plan</h1>
            <p className="section-description">Start your journey to becoming a better fighter with our flexible pricing options</p>
        </div>

        <div className="pricing-grid">
            {/* Free Tier */}
            <div className="pricing-card free">
                <div className="pricing-card-header">
                    <h2>Free Tier</h2>
                    <div className="price">
                        <span className="amount">$0</span>
                        <span className="period">/month</span>
                    </div>
                </div>
                <div className="pricing-features">
                    <ul>
                        <li>✓ Basic Training Roadmap</li>
                        <li>✓ Fundamental Techniques Library</li>
                        <li>✓ Basic Progress Tracking</li>
                        <li>✓ Community Forum Access</li>
                        <li>✓ Monthly Training Tips</li>
                    </ul>
                </div>
                <Link to="/signup" className="pricing-cta free">Get Started Free</Link>
            </div>

            {/* Pro Tier */}
            <div className="pricing-card pro">
                <div className="pricing-badge">Most Popular</div>
                <div className="pricing-card-header">
                    <h2>Pro Tier</h2>
                    <div className="price">
                        <span className="amount">$29</span>
                        <span className="period">/month</span>
                    </div>
                </div>
                <div className="pricing-features">
                    <ul>
                        <li>✓ Everything in Free Tier</li>
                        <li>✓ AI Video Analysis</li>
                        <li>✓ Advanced Progress Tracking</li>
                        <li>✓ Personalized Training Plans</li>
                        <li>✓ Advanced Technique Modules</li>
                        <li>✓ Performance Analytics</li>
                        <li>✓ Priority Support</li>
                    </ul>
                </div>
                <Link to="/signup" className="pricing-cta pro">Start Pro Trial</Link>
            </div>
        </div>

        <div className="pricing-faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
                <div className="faq-item">
                    <h3>What's included in the Free Tier?</h3>
                    <p>The Free Tier gives you access to our basic training roadmap, fundamental techniques library, and basic progress tracking tools. Perfect for beginners starting their combat sports journey.</p>
                </div>
                <div className="faq-item">
                    <h3>How does AI video analysis work?</h3>
                    <p>Pro Tier members can upload their training videos for AI-powered analysis. Our system provides detailed feedback on form, technique, and suggests improvements in real-time.</p>
                </div>
                <div className="faq-item">
                    <h3>Can I upgrade anytime?</h3>
                    <p>Yes! You can upgrade from Free to Pro Tier at any time. Your progress and data will seamlessly transfer to your Pro account.</p>
                </div>
                <div className="faq-item">
                    <h3>Is there a trial period for Pro Tier?</h3>
                    <p>Yes, Pro Tier comes with a 14-day free trial. You can explore all premium features risk-free before committing.</p>
                </div>
            </div>
        </div>
    </div>
);

export default GetStarted; 