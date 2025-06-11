import React from "react";
import styles from "./PrivacyPolicy.module.css"; // CSS module for styling

const PrivacyPolicy = () => {
    return (
        <div className={styles.privacyContainer}>
            <div className={styles.privacyHeader}>
                <h1>Privacy Policy</h1>
            </div>
            <div className={styles.privacyContent}>
                <h2>Your Privacy Matters</h2>
                <p>
                    At <strong>SportsHub</strong>, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information.
                </p>

                <h3>Information We Collect</h3>
                <p>
                    We may collect the following types of information:
                </p>
                <ul>
                    <li>Personal Information: Name, email, and contact details.</li>
                    <li>Browsing Data: Cookies, IP addresses, and device information.</li>
                    <li>User Preferences: Selected sports or topics of interest.</li>
                </ul>

                <h3>How We Use Your Information</h3>
                <p>
                    Your information helps us:
                </p>
                <ul>
                    <li>Provide personalized content and recommendations.</li>
                    <li>Improve our website and user experience.</li>
                    <li>Communicate updates, offers, and promotions.</li>
                </ul>

                <h3>How We Protect Your Information</h3>
                <p>
                    We use industry-standard security measures to protect your data, including encryption, secure servers, and regular monitoring for potential vulnerabilities.
                </p>

                <h3>Third-Party Services</h3>
                <p>
                    We may share your information with trusted third-party services to enhance our offerings. These parties are required to adhere to strict data protection policies.
                </p>

                <h3>Your Rights</h3>
                <p>
                    You have the right to:
                </p>
                <ul>
                    <li>Access and review your personal data.</li>
                    <li>Request deletion of your data.</li>
                    <li>Opt out of email communications and certain data collection.</li>
                </ul>

                <h3>Changes to This Policy</h3>
                <p>
                    We may update this Privacy Policy periodically. Any changes will be communicated through our website.
                </p>

                <h3>Contact Us</h3>
                <p>
                    If you have any questions or concerns about this Privacy Policy, please contact us at <strong>support@sportshub.com</strong>.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
