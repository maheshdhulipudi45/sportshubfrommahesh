import React from "react";
import styles from "./SportsPage.module.css";
import { Link } from "react-router";
import styled from 'styled-components';
const SportsPage = () => {
  return (
    <>
    <div className={styles.container}>
       
      <h1 className={styles.title}>🏟️ Welcome to SPORTS HUB</h1>
      <p className={styles.intro}>
        Your one-stop destination for live updates, latest news, and insights on all your favorite sports.
        Built with React, this site delivers a modern and responsive experience across the all devices.
     
        Whether you're an avid follower of cricket, football, or kabaddi, SportsHub is designed to keep you in the loop.
        Dive deep into match statistics, player performances, upcoming fixtures. 
        Stay ahead with real-time updates and exclusive insights that bring the game to life.
      </p>
      
      <div className={styles.container1}>
      {/* Cricket Card */}
      <section className={`${styles.section} ${styles.card}`}>
      <Link to="/cricket">
        <img src="cartoon-character-playing-cricket-game-field_23-2151518974.avif" alt="Cricket" />
        <h2>🏏 Cricket</h2>
        <p>From thrilling ODIs to intense T20 matches, follow live cricket updates, upcoming fixtures, and recent match results.</p>
        <p>Cricket is not just a game; it’s a passion that unites millions. Whether it's a World Cup final or a street-side cricket match, 
        the energy and excitement remain unmatched.</p>
        <ul>
          <li>India vs Australia - 2:30 PM IST</li>
          <li>England vs Pakistan - 6:00 PM IST</li>
        </ul>
        </Link>
      </section>

      {/* Football Card */}
      <section className={`${styles.section} ${styles.card}`}>
        <Link to="/football">
        <img src="1.webp" alt="Football" />
        <h2>⚽ Football</h2>
        <p>Track your favorite teams and leagues. Live scores, top goal scorers, and match highlights — all in one place.</p>
        <p>Football transcends boundaries, bringing together fans from every corner of the world. From legendary rivalries 
        to underdog victories, the game continues to inspire millions.</p>
        <ul>
          <li>Barcelona vs Real Madrid - Tonight 9:00 PM</li>
          <li>Man City vs Liverpool - Tomorrow 7:45 PM</li>
        </ul>
        </Link>
      </section>

      {/* Kabbadi Card */}
      <section className={`${styles.section} ${styles.card}`}>
        <Link to="/kabbadi">
        <img src="premium-editable-vector-file-kabaddi-260nw-2253246441.webp" alt="Kabbadi" />
        <h2>🤼‍♂️ Kabbadi</h2>
        <p>Get the latest from the Pro Kabbadi League: raid points, tackle stats, and team rankings updated daily.</p>
        <p>Kabaddi embodies raw strength, agility, and strategic play. With high-speed raids and electrifying tackles, 
        every match showcases the sheer determination of athletes.</p>
        <ul>
          <li>U Mumba vs Patna Pirates - 5:30 PM IST</li>
          <li>Bengal Warriors vs Tamil Thalaivas - 8:00 PM IST</li>
        </ul>
        </Link>
      </section>
      </div>
    </div>
   











</>
  );
};

export default SportsPage;
