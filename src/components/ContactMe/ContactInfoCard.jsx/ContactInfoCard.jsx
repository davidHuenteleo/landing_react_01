import React from "react";
import "./ContactInfoCard.css"; // Assuming you have a CSS file for styling

const ContactInfoCard = ({ iconUrl, text}) => {
    return (
        <div className="contact-details-card">

            <div className="icon">
                <img src={iconUrl} alt={text} />
            </div>

            <p>{text}</p>
        </div>
    );
};

export default ContactInfoCard;