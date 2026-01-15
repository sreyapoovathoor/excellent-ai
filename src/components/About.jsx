import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import { siteData } from '../data/siteData';
import aboutImage from '../assets/about_image.png';

const About = () => {
    const { about } = siteData;
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section id="about" className={`about-section section-padding ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
            <div className="container">
                <div className="about-wrapper">
                    {/* Image Content */}
                    <div className="about-image-col">
                        <div className="image-frame-1"></div>
                        <div className="image-frame-2"></div>
                        <div className="about-img-wrapper">
                            <img src={aboutImage} alt="About Institute" className="about-img" />
                        </div>
                        <div className="experience-badge">
                            <span className="years">15+</span>
                            <span className="text">Years of<br />Experience</span>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="about-text-col">
                        <h4 className="section-subtitle">Who We Are</h4>
                        <h2 className="section-title-left">{about.title}</h2>
                        <h3 className="section-heading-gold">{about.subtitle}</h3>

                        <p className="about-desc">{about.description}</p>

                        <ul className="about-features">
                            {about.features.map((feature, index) => (
                                <li key={index} style={{ transitionDelay: `${index * 150}ms` }}>
                                    <span className="check-icon">✓</span> {feature}
                                </li>
                            ))}
                        </ul>

                        <a href="#courses" className="btn btn-primary btn-glow">Explore Courses</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
