
import ContactInfoCard from './ContactInfoCard.jsx/ContactInfoCard';
import './ContactMe.css'; 
import ContactForm from '../ContactForm/ContactForm.jsx';

const ContactMe = () => {
    return (

        <section id="ContactMe" className="contact-container">
            <h5>Contact Me</h5>

            <div className="contact-content">
                <div style={{ flex: 1 }}>

                    <ContactInfoCard
                    iconUrl="./assets/images/email-icon.png"
                    text="John@gmail.com"/>

                    <ContactInfoCard
                    iconUrl="./assets/images/email-icon.png"
                    text="John@gmail.com"/>

                </div>

                <div style={{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>
        </section>

    );
};

export default ContactMe;