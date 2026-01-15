import React, { useEffect } from 'react';
import Testimonials from '../components/Testimonials';

const TestimonialsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
            <Testimonials />
        </div>
    );
};

export default TestimonialsPage;
