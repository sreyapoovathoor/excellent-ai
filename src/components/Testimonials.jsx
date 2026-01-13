import React from 'react';
import './Testimonials.css';
import { siteData } from '../data/siteData';

const Testimonials = () => {
    const { testimonials } = siteData;

    return (
        <section id="testimonials" className="testimonials-section section-padding">
            <div className="container">
                <h2 className="section-title">Success <span className="highlight">Stories</span></h2>

                <div className="testimonials-grid">
                    {testimonials.map((review) => (
                        <div key={review.id} className="testimonial-card">
                            <div className="quote-icon">“</div>
                            <p className="review-text">{review.text}</p>
                            <div className="reviewer-info">
                                <div className="reviewer-avatar">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="reviewer-name">{review.name}</h4>
                                    <p className="reviewer-role">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
