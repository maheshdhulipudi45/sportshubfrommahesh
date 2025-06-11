import React from "react";
import styles from "./About.module.css"; 

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutHeader}>
                <h1>About SportsHub</h1>
            </div>
            <div className={styles.aboutContent}>
                <p>
                    Welcome to <strong>SportsHub</strong>, your one-stop destination for all things sports! 
                    Whether you're a die-hard cricket fan, a football enthusiast, or a volleyball lover, 
                    our mission is to connect sports fans with real-time updates, match highlights, and thrilling content.
                </p>
                <h3>Our Mission</h3>
                <p>
                    At SportsHub, we aim to inspire and entertain through the power of sports. 
                    We strive to create a platform that celebrates athletes, promotes upcoming events, 
                    and provides fans with a community to share their passion.
                </p>
                <h3>Why Choose Us?</h3>
                <ul>
                    <li>Live match scores and updates</li>
                    <li>Exclusive interviews with players</li>
                    <li>Interactive sports forums and blogs</li>
                    <li>In-depth analysis and game statistics</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
