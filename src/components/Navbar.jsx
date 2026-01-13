import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { siteData } from '../data/siteData';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#" className="navbar-logo">
                    {siteData.general.logoText}
                </a>

                <div className={`navbar-menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#courses" onClick={() => setIsOpen(false)}>Courses</a></li>
                    <li><a href="#results" onClick={() => setIsOpen(false)}>Results</a></li>
                    <li><a href="#testimonials" onClick={() => setIsOpen(false)}>Reviews</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                    <li className="mobile-only">
                        <a href={`tel:${siteData.general.phone}`} className="btn btn-secondary btn-sm">Call Now</a>
                    </li>
                </ul>

                {/* Desktop CTA */}
                <div className="navbar-cta">
                    <a href="#contact" className="btn btn-secondary">Join Now</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
