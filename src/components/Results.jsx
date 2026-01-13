import React, { useState, useEffect, useRef } from 'react';
import './Results.css';
import { siteData } from '../data/siteData';

const Results = () => {
    const { toppers, stats } = siteData;
    const [current, setCurrent] = useState(0);
    const [counts, setCounts] = useState(stats.map(() => 0));
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    // Auto-play Slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % toppers.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [toppers.length]);

    // Animated Counters
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    startCounting();
                    setHasAnimated(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, [hasAnimated, stats]);

    const startCounting = () => {
        stats.forEach((stat, index) => {
            const target = parseInt(stat.value.replace(/\D/g, '')) || 0;
            const duration = 2000;
            const steps = 60;
            const increment = target / steps;
            let currentVal = 0;
            let step = 0;

            const timer = setInterval(() => {
                step++;
                currentVal += increment;
                if (step >= steps) {
                    currentVal = target;
                    clearInterval(timer);
                }
                setCounts(prev => {
                    const newCounts = [...prev];
                    newCounts[index] = Math.floor(currentVal);
                    return newCounts;
                });
            }, duration / steps);
        });
    };

    const nextSlide = () => setCurrent((prev) => (prev + 1) % toppers.length);
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? toppers.length - 1 : prev - 1));

    return (
        <section id="results" className="results-section section-padding" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title text-center text-white">Our <span className="highlight-gold">Achievements</span></h2>

                <div className="results-split-layout">
                    {/* Left Column: Numbers/Stats */}
                    <div className="res-col-left">
                        <div className="stats-vertical">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-card-modern">
                                    <div className="stat-icon-circle">{index + 1}</div>
                                    <div className="stat-content">
                                        <h3 className="stat-value-modern">
                                            {counts[index]}<span className="plus">+</span>
                                        </h3>
                                        <p className="stat-label-modern">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Topper Slider */}
                    <div className="res-col-right">
                        <div className="modern-slider-frame">
                            <button className="nav-arrow prev-arrow" onClick={prevSlide}>&#10094;</button>

                            <div className="modern-slide-content">
                                <div className="slide-bg-blur" style={{ backgroundImage: `url(${toppers[current].image})` }}></div>
                                <img src={toppers[current].image} alt={toppers[current].name} className="modern-slide-img" />

                                <div className="modern-slide-info">
                                    <span className="rank-badge-modern">#{toppers[current].rank}</span>
                                    <h4>{toppers[current].name}</h4>
                                    <p>{toppers[current].exam}</p>
                                </div>
                            </div>

                            <button className="nav-arrow next-arrow" onClick={nextSlide}>&#10095;</button>
                        </div>

                        {/* Thumbnail Strip */}
                        <div className="thumb-strip">
                            {toppers.map((t, idx) => (
                                <div
                                    key={idx}
                                    className={`thumb-dot ${idx === current ? 'active' : ''}`}
                                    onClick={() => setCurrent(idx)}
                                >
                                    <img src={t.image} alt="thumb" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Results;
