import React from 'react';
import './PageBanner.css';
import { Link } from 'react-router-dom';

const PageBanner = ({ title, subtitle, parentPage = "Home", parentLink = "/" }) => {
    return (
        <div className="page-banner">
            <div className="banner-overlay"></div>
            <div className="container banner-content">
                <h1 className="banner-title">{title}</h1>
                <p className="banner-subtitle">{subtitle}</p>
                <div className="banner-breadcrumb">
                    <Link to={parentLink} className="breadcrumb-link">{parentPage}</Link>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">{title}</span>
                </div>
            </div>
        </div>
    );
};

export default PageBanner;
