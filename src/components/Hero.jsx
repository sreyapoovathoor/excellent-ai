import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-modern">
            {/* Decorative Background Elements */}
            <div className="hero-blob blob-1"></div>
            <div className="hero-blob blob-2"></div>

            <div className="container hero-container">
                {/* Left Column: Text Content */}
                <div className="hero-text-content">
                    <div className="hero-badge">🏆 #1 Entrance Coaching in Vaikom</div>
                    <h1 className="hero-title">
                        Unlock Your <span className="text-gradient">Medical</span> & <span className="text-gradient">Engineering</span> Dreams
                    </h1>
                    <p className="hero-subtitle">
                        Join the elite league of toppers. Comprehensive coaching for NEET, JEE, and KEAM with proven results.
                    </p>
                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary btn-lg">Join Now</a>
                        <a href="#courses" className="btn btn-outline btn-lg">View Courses</a>
                    </div>

                    <div className="hero-stats-mini">
                        <div className="stat-item">
                            <span className="stat-num">15+</span>
                            <span className="stat-label">Years Exp.</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-num">1k+</span>
                            <span className="stat-label">Doctors</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-num">100%</span>
                            <span className="stat-label">Dedication</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Visuals */}
                <div className="hero-visuals">
                    <div className="hero-image-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600"
                            alt="Student Success"
                            className="main-hero-img"
                        />
                        {/* Floating Cards */}
                        <div className="floating-card card-1">
                            <span className="fc-icon">📚</span>
                            <div>
                                <h5>Expert Faculty</h5>
                                <small>Top Educators</small>
                            </div>
                        </div>
                        <div className="floating-card card-2">
                            <span className="fc-icon">🎯</span>
                            <div>
                                <h5>Target Focused</h5>
                                <small>Result Oriented</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
