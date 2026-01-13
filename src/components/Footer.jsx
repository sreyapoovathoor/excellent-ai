import React from 'react';
import './Footer.css';
import { siteData } from '../data/siteData';

const Footer = () => {
    const { general } = siteData;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">

                {/* Brand & About */}
                <div className="footer-col">
                    <h3 className="footer-brand">{general.logoText}</h3>
                    <p className="footer-desc">
                        Empowering students to achieve their dreams in medical and engineering fields.
                        Join us for a bright future.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#results">Results</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <ul className="footer-contact">
                        <li>📍 {general.address}</li>
                        <li>📞 <a href={`tel:${general.phone}`}>{general.phone}</a></li>
                        <li>✉️ <a href={`mailto:${general.email}`}>{general.email}</a></li>
                    </ul>
                    <div className="footer-socials">
                        <a href="#" className="social-icon">FB</a>
                        <a href="#" className="social-icon">IG</a>
                        <a href="#" className="social-icon">WA</a>
                        <a href="#" className="social-icon">YT</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} {general.name}. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
