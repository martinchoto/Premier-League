import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <span className="badge">Season 2025/26</span>
          <h1>Welcome to the Premier League Hub</h1>
          <p>
            Your ultimate destination for live scores, in-depth player
            statistics, and the latest league standings. Stay updated with every
            goal, every card, and every win.
          </p>
          <div className="hero-btns">
            <Link to="/standings" className="btn-primary">
              View Standings
            </Link>
            <button className="btn-secondary">Latest Fixtures</button>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="feature-card">
          <h3>Live Scores</h3>
          <p>Real-time updates from every stadium across England.</p>
        </div>
        <div className="feature-card">
          <h3>Expert Analysis</h3>
          <p>Deep dives into team tactics and player performances.</p>
        </div>
        <div className="feature-card">
          <h3>Fantasy Stats</h3>
          <p>Track player form to dominate your mini-leagues.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
