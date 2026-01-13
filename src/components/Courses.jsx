import React from 'react';
import './Courses.css';
import { siteData } from '../data/siteData';

const Courses = () => {
    const { courses } = siteData;

    return (
        <section id="courses" className="courses-section">
            <div className="courses-bg-glow"></div>
            <div className="container">
                <div className="courses-header">
                    <h2 className="section-title">Explore Our <span className="highlight">Programs</span></h2>
                    <p className="courses-subtitle">Tailored courses designed for your success in medical and engineering entrances.</p>
                </div>

                <div className="courses-container-unique">
                    {courses.map((course, index) => (
                        <div key={course.id} className="course-card-unique" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="card-glass-content">
                                <div className="course-icon-wrapper">
                                    <span className="course-icon-lg">{course.icon}</span>
                                    <div className="icon-glow"></div>
                                </div>
                                <h3 className="course-title-unique">{course.title}</h3>
                                <p className="course-desc-unique">{course.description}</p>

                                <div className="card-footer">
                                    <span className="course-batch">Admissions Open</span>
                                    <button className="btn-arrow">→</button>
                                </div>

                                <a href="#contact" className="card-full-link" aria-label={`View ${course.title}`}></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
