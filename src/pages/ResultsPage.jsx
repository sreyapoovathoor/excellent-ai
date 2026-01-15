import React, { useEffect } from 'react';
import Results from '../components/Results';

const ResultsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
            <Results />
        </div>
    );
};

export default ResultsPage;
