import React, { useEffect } from 'react';
import Courses from '../components/Courses';
import PageBanner from '../components/PageBanner';

const CoursesPage = () => {
    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper">
            <PageBanner title="Our Courses" subtitle="Expert Coaching for Medical & Engineering" />
            <Courses />
        </div>
    );
};

export default CoursesPage;
