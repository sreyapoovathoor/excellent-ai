import React from 'react';
import './Videos.css';
import { siteData } from '../data/siteData';

const Videos = () => {
    const { videos } = siteData;

    return (
        <section id="videos" className="videos-section section-padding">
            <div className="container">
                <h2 className="section-title">Latest <span className="highlight">Updates</span></h2>

                <div className="videos-grid">
                    {videos.map((video) => (
                        <div key={video.id} className="video-card">
                            <div className="video-thumbnail-wrapper">
                                <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                                <div className="play-button">▶</div>
                            </div>
                            <div className="video-info">
                                <h3 className="video-title">{video.title}</h3>
                                <a href={video.url} className="watch-link">Watch Now</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Videos;
