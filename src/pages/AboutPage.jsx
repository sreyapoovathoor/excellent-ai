import React, { useEffect } from 'react';
import About from '../components/About';
import PageBanner from '../components/PageBanner';
import { siteData } from '../data/siteData';
import './AboutPage.css';
import { FaEye, FaLightbulb, FaBullseye, FaCheckCircle } from 'react-icons/fa';

const AboutPage = () => {
    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { about } = siteData;

    return (
        <div className="about-page-wrapper">
            <PageBanner title="About Us" subtitle={about.subtitle} />

            {/* Main Intro Section */}
            <About />

            {/* Vision & Mission Section */}
            <section className="vision-mission-section section-padding-sm">
                <div className="container">
                    <div className="vm-grid">
                        <div className="vm-card vision-card">
                            <div className="vm-icon"><FaEye /></div>
                            <h3>Our Vision</h3>
                            <p>{about.vision}</p>
                        </div>
                        <div className="vm-card motto-card">
                            <div className="vm-icon"><FaLightbulb /></div>
                            <h3>Our Motto</h3>
                            <p className="motto-text">"{about.motto}"</p>
                        </div>
                        <div className="vm-card mission-card">
                            <div className="vm-icon"><FaBullseye /></div>
                            <h3>Our Mission</h3>
                            <p>{about.mission}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose-section section-padding">
                <div className="container">
                    <h2 className="section-title text-center">Why Choose <span className="highlight">Excellent?</span></h2>
                    <div className="features-grid-lg">
                        {about.features.map((feature, idx) => (
                            <div key={idx} className="feature-card-lg">
                                <span className="check-icon"><FaCheckCircle /></span>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Team */}
            <section className="team-section section-padding">
                <div className="container">
                    <h2 className="section-title text-center">Meet Our <span className="highlight">Experts</span></h2>
                    <div className="team-grid">
                        {about.team && about.team.map((member) => (
                            <div key={member.id} className="team-card">
                                <div className="team-img-wrapper">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <div className="team-info">
                                    <h3>{member.name}</h3>
                                    <span className="team-role">{member.role}</span>
                                    <p className="team-bio">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
