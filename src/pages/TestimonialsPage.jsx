import React, { useEffect } from 'react';
import Testimonials from '../components/Testimonials';
import PageBanner from '../components/PageBanner';

const TestimonialsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper">
            <PageBanner title="Student Reviews" subtitle="What Our Students Say About Us" />
            <Testimonials />
        </div>
    );
};

export default TestimonialsPage;
