import React from 'react';
import './Contact.css';
import { siteData } from '../data/siteData';

const Contact = () => {
    const { general } = siteData;

    return (
        <section id="contact" className="contact-section section-padding">
            <div className="container">
                <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>

                <div className="contact-container">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <h3>Visit Our Campus</h3>
                        <p className="contact-subtitle">We'd love to hear from you. Reach out today!</p>

                        <div className="contact-item">
                            <span className="icon">📍</span>
                            <div>
                                <h4>Address</h4>
                                <p>{general.address}</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span className="icon">📞</span>
                            <div>
                                <h4>Phone</h4>
                                <p><a href={`tel:${general.phone}`}>{general.phone}</a></p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span className="icon">✉️</span>
                            <div>
                                <h4>Email</h4>
                                <p><a href={`mailto:${general.email}`}>{general.email}</a></p>
                            </div>
                        </div>
                    </div>

                    {/* Map / Form Area */}
                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <h3>Send a Message</h3>
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="tel" placeholder="Phone Number" required />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Your Message" rows="4" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
