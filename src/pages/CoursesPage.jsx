import React, { useEffect } from 'react';
import Courses from '../components/Courses';

const CoursesPage = () => {
    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
            <Courses />
        </div>
    );
};

export default CoursesPage;
