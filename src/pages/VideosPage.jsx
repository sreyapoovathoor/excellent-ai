import React, { useEffect } from 'react';
import Videos from '../components/Videos';

const VideosPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
            <Videos />
        </div>
    );
};

export default VideosPage;
