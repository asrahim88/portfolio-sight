import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail, MdContactPhone } from 'react-icons/md';

import './Contact.css';

const Contact = () => {
    const [message, setMessage] = useState(false);
    const formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
        emailjs
            .sendForm(
                'service_fovbet6',
                'template_huea4tm',
                formRef.current,
                'NJG6aVR3BHAZjeIrw'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();
    };
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h5>
                I do receive your messages and will respond asap if the valid email is
                provided :)
            </h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdContactPhone className="contact__option-icon" />
                        <h4>Phone</h4>
                        <h6>+8801748983774</h6>
                    </article>
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h6>asrahim162@gmail.com</h6>
                        <a href="mailto:asrahim162@gmail.com">Send a message</a>
                    </article>
                </div>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Full Name"
                        name="to_name"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Your Email"
                        name="from_name"
                        required
                    />
                    <textarea
                        placeholder="Your message"
                        rows="7"
                        name="message"
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                    {message && <span>Thanks, I'll reply ASAP :)</span>}
                </form>
            </div>
        </section>
    );
};

export default Contact;