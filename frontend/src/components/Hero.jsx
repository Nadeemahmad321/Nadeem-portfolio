import React from 'react'
import profileImg from '../assets/nadeem.jpg'

export default function Hero({ scrollTo }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-meta">
          <span className="location-tag">Based in Gopalganj, Bihar</span>
          <span className="dot-sep">&bull;</span>
          <span className="status-badge">Open to Select Opportunities</span>
        </div>
        <h1>
          Full-Stack <br />
          <span className="highlight-text">Mobile & Web Engineer</span>
        </h1>
        <p className="hero-lead">
          Specialized in high-performance cross-platform development. Currently crafting apps with <strong>React Native</strong>, <strong>Node.js</strong>, and <strong>SQL</strong> at Ultimate Itech Pvt Ltd.
        </p>
        <div className="hero-actions">
          <button onClick={() => scrollTo('projects')} className="btn btn-primary">
            View Showcase
          </button>
          <button onClick={() => scrollTo('contact')} className="btn btn-secondary">
            Get in Touch
          </button>
        </div>
      </div>
      <div className="hero-graphic">
        <div className="profile-image-container">
          <img src={profileImg} alt="Nadeem Ahmad" className="profile-img" />
        </div>
      </div>
    </section>
  )
}
