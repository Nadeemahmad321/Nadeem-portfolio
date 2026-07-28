import React, { useState, useEffect } from 'react'
import profileImg from '../assets/nadeem.jpg'

export default function Hero({ scrollTo }) {
  const [displayText, setDisplayText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const phrases = [
    "React Native Dev.",
    "REST API Architecture.",
    "Performance Optimization.",
    "Database Schema Design."
  ]

  useEffect(() => {
    let timer
    const currentPhrase = phrases[phraseIdx]
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1))
      }, 40)
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1))
      }, 80)
    }

    if (!isDeleting && displayText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setPhraseIdx((prev) => (prev + 1) % phrases.length)
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, phraseIdx])

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
          Specialized in <span className="typewriter-text">{displayText}</span><span className="typewriter-caret">|</span> Currently crafting high-performance mobile and web apps at Ultimate Itech Pvt Ltd.
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
        <div className="tech-slate unified-card">
          <div className="slate-bar">
            <span className="s-dot"></span>
            <span className="s-dot"></span>
            <span className="s-dot"></span>
          </div>
          <div className="slate-content unified-content">
            <div className="profile-image-container mini-profile">
              <img src={profileImg} alt="Nadeem Ahmad" className="profile-img" />
            </div>
            <div className="code-divider"></div>
            <div className="code-details">
              <div className="code-line"><span className="c-key">const</span> developer = &#123;</div>
              <div className="code-line indent"><span className="c-prop">name</span>: <span className="c-val">"Nadeem Ahmad"</span>,</div>
              <div className="code-line indent"><span className="c-prop">role</span>: <span className="c-val">"Fullstack Mobile"</span>,</div>
              <div className="code-line indent"><span className="c-prop">stack</span>: [<span className="c-val">"React Native"</span>, <span className="c-val">"Node"</span>],</div>
              <div className="code-line indent"><span className="c-prop">current</span>: <span className="c-val">"Ultimate iTech"</span></div>
              <div className="code-line">&#125;;</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
