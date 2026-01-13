import React from 'react';
import './WhatsAppBtn.css';
import { siteData } from '../data/siteData';

const WhatsAppBtn = () => {
    return (
        <a
            href={`https://wa.me/${siteData.general.whatsapp}`}
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
            />
        </a>
    );
};

export default WhatsAppBtn;
