import React from 'react';
import './Courses.css';
import { siteData } from '../data/siteData';
import { FaUserMd, FaDraftingCompass, FaBuilding, FaFlask, FaBookOpen, FaFilePdf } from 'react-icons/fa';
import { BsEyeFill } from 'react-icons/bs';

const iconMap = {
    medical: <FaUserMd />,
    engineering: <FaDraftingCompass />,
    architecture: <FaBuilding />,
    science: <FaFlask />,
    books: <FaBookOpen />
};

const Courses = () => {
    const { courses } = siteData;

    return (
        <section id="courses" className="courses-section">
            <div className="container">
                <div className="courses-header">
                    <h2 className="section-title">Explore Our <span className="highlight">Programs</span></h2>
                    <p className="courses-subtitle">Tailored courses designed for your success in medical and engineering entrances.</p>
                </div>

                <div className="courses-container-unique">
                    {courses.map((course, index) => (
                        <div key={course.id} className="course-card-unique">
                            <div className="card-glass-content">
                                <div className="course-icon-wrapper">
                                    <span className="course-icon-lg">{iconMap[course.icon]}</span>
                                </div>
                                <h3 className="course-title-unique">{course.title}</h3>
                                <p className="course-desc-unique">{course.description}</p>

                                <div className="course-actions-grid">
                                    <button className="btn-action-sm btn-outline">
                                        <FaFilePdf /> Brochure
                                    </button>
                                    <button className="btn-action-sm btn-outline">
                                        <BsEyeFill /> View
                                    </button>
                                </div>

                                <div className="card-footer-modern">
                                    <button className="btn-subscribe-full">
                                        Subscribe Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
