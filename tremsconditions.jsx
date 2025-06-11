import React from "react";
import styles from "./TermsAndConditions.module.css"; // CSS module for styling

const TermsAndConditions = () => {
    return (
        <div className={styles.termsContainer}>
            <div className={styles.termsHeader}>
                <h1>Terms and Conditions</h1>
            </div>
            <div className={styles.termsContent}>
                <h3>Introduction</h3>
                <p>
                    Welcome to <strong>SportsHub</strong>. By accessing or using our website, you agree to comply with these Terms and Conditions. Please read them carefully before using our services.
                </p>

                <h3>Eligibility</h3>
                <p>
                    You must be at least 13 years old to use our website. By accessing the site, you confirm that you meet this age requirement.
                </p>

                <h3>Use of Content</h3>
                <p>
                    All content provided on Sportshub360 is for personal use only. You agree not to distribute, reproduce, or modify our content without explicit permission.
                </p>

                <h3>User Conduct</h3>
                <p>
                    You agree not to:
                </p>
                <ul>
                    <li>Engage in any activity that disrupts or harms the website.</li>
                    <li>Post or share illegal, offensive, or abusive content.</li>
                    <li>Attempt to hack, reverse engineer, or access unauthorized areas.</li>
                </ul>

                <h3>Third-Party Links</h3>
                <p>
                    Our website may contain links to third-party websites. Sportshub360 is not responsible for the content or practices of these external sites.
                </p>

                <h3>Limitation of Liability</h3>
                <p>
                    Sportshub360 is not liable for any damages resulting from the use of our website, including but not limited to data loss or unauthorized access.
                </p>

                <h3>Changes to Terms</h3>
                <p>
                    We may update these Terms and Conditions from time to time. Continued use of the website indicates your acceptance of the updated terms.
                </p>

                <h3>Contact Us</h3>
                <p>
                    If you have any questions regarding these terms, please contact us at <strong>support@sportshub.com</strong>.
                </p>
            </div>
        </div>
    );
};

export default TermsAndConditions;
