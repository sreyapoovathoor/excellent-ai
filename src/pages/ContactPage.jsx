import React, { useEffect } from 'react';
import Contact from '../components/Contact';
import PageBanner from '../components/PageBanner';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper">
            <PageBanner title="Contact Us" subtitle="Get in Touch with Our Team" />
            <Contact />
        </div>
    );
};

export default ContactPage;
