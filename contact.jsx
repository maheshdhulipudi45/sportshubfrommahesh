import React from "react";
import Contact1 from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={Contact1.contactContain}>
    <div className={Contact1.contactContainer}>
      <h2>Contact Us</h2>
      <p>
        Feel free to reach out to us! Below are the ways you can connect with the Sports Hub team.
      </p>
      
      <div className={Contact1.contactMethods}>
        <div className={Contact1.method}>
          <h3>Email</h3>
          <p>
            <a href="mailto:support@sportshub.com">support@sportshub.com</a>
          </p>
        </div>
        <div className={Contact1.method}>
          <h3>Phone</h3>
          <p>
            <a href="tel:+919876543210">+91 9876543210</a>
          </p>
        </div>
        <div className={Contact1.method}>
          <h3>Address</h3>
          <p>Sports Hub HQ, Rangampeta, Andhra Pradesh, India</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactPage;
