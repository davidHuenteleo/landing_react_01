import React from 'react';
import "./ContactForm.css";

const ContactForm = () => {

    return(
        <div className="contact-form-content" id="Contact">
            <form>
                <div className="name-container">
                    <input type="text" name="firstname" placeholder="First Name" />
                    <input type="text" name="Lasttname" placeholder="Last Name" />
                </div>

                 <input type="text" name="email" placeholder="First Name" />
                 <textarea name="" id=""></textarea>

                 <button>SEND</button>

            </form>
        </div>
    )
}

export default ContactForm;