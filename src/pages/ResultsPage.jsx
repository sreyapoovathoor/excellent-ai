import React, { useEffect } from 'react';
import Results from '../components/Results';
import PageBanner from '../components/PageBanner';

const ResultsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper">
            <PageBanner title="Hall of Fame" subtitle="Celebrating Excellence & Success" />
            <Results />
        </div>
    );
};

export default ResultsPage;
