import React, { useState, useEffect } from 'react';
import './EnquiryModal.css';

const EnquiryModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Auto open after 10 seconds
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 10000);
        return () => clearTimeout(timer);
    }, []);

    const closeModal = () => setIsOpen(false);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={closeModal}>&times;</button>
                <div className="modal-header">
                    <h3>Enquire Now</h3>
                    <p>Get a call back from our expert counselors!</p>
                </div>
                <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Your Name" required />
                    <input type="tel" placeholder="Phone Number" required />
                    <select required>
                        <option value="">Select Course</option>
                        <option value="NEET">NEET Coaching</option>
                        <option value="JEE">JEE Main & Advanced</option>
                        <option value="KEAM">KEAM Entrance</option>
                        <option value="Foundation">Foundation Batch</option>
                        <option value="Tuition">Plus Two Tuition</option>
                    </select>
                    <button type="submit" className="btn btn-secondary btn-block">Submit Enquiry</button>
                </form>
            </div>
        </div>
    );
};

export default EnquiryModal;
