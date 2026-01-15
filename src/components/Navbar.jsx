import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { siteData } from '../data/siteData';

import { Link } from 'react-router-dom';

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

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    {siteData.general.logoText}
                </Link>

                <div className={`navbar-menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                    <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
                    <li><Link to="/courses" onClick={handleLinkClick}>Courses</Link></li>
                    <li><Link to="/results" onClick={handleLinkClick}>Results</Link></li>
                    <li><Link to="/reviews" onClick={handleLinkClick}>Reviews</Link></li>
                    <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
                    <li className="mobile-only">
                        <a href={`tel:${siteData.general.phone}`} className="btn btn-secondary btn-sm">Call Now</a>
                    </li>
                </ul>

                {/* Desktop CTA */}
                <div className="navbar-cta">
                    <Link to="/contact" className="btn btn-secondary">Join Now</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
