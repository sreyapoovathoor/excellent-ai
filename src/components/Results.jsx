import React, { useState, useEffect, useRef } from 'react';
import './Results.css';
import { siteData } from '../data/siteData';

const Results = () => {
    const { toppers, stats } = siteData;
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    // Initial counts set to 0
    const [counts, setCounts] = useState(stats.map(() => 0));

    // Stats Logic
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

        if (sectionRef.current) observer.observe(sectionRef.current);
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

    // Filter Logic
    const [activeTab, setActiveTab] = useState('All');
    const categories = ['All', 'Medical', 'Engineering'];

    const filteredToppers = activeTab === 'All'
        ? toppers
        : toppers.filter(t => t.category === activeTab);

    return (
        <section id="results" className="results-section" ref={sectionRef}>
            <div className="container">
                <h2 className="title-modern">Our <span className="highlight">Hall of Fame</span></h2>

                {/* Filter Tabs */}
                <div className="results-tabs">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
                            onClick={() => setActiveTab(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Stats Row */}
                <div className="stats-container">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item-modern">
                            <span className="stat-number-lg">{counts[index]}+</span>
                            <span className="stat-label-sm">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Toppers Grid */}
                <div className="toppers-grid">
                    {filteredToppers.map((topper, index) => (
                        <div key={topper.id} className="topper-card">
                            <div className="rank-badge-floating">{topper.rank}</div>
                            <div className="topper-img-wrapper">
                                <img src={topper.image} alt={topper.name} className="topper-img" />
                            </div>
                            <div className="topper-info">
                                <h4 className="topper-name">{topper.name}</h4>
                                <p className="topper-exam">{topper.exam}</p>
                                <span className="verified-badge">✓</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Results;
