import React from 'react'

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
        <div className="tech-slate">
          <div className="slate-bar">
            <span className="s-dot"></span>
            <span className="s-dot"></span>
            <span className="s-dot"></span>
          </div>
          <div className="slate-content">
            <div className="code-line"><span className="c-key">const</span> developer = &#123;</div>
            <div className="code-line indent"><span className="c-prop">name</span>: <span className="c-val">"Nadeem Ahmad"</span>,</div>
            <div className="code-line indent"><span className="c-prop">role</span>: <span className="c-val">"Fullstack Mobile & Web"</span>,</div>
            <div className="code-line indent"><span className="c-prop">stack</span>: [<span className="c-val">"React Native"</span>, <span className="c-val">"Node"</span>, <span className="c-val">"SQL"</span>],</div>
            <div className="code-line indent"><span className="c-prop">current</span>: <span className="c-val">"Ultimate Itech Pvt Ltd"</span></div>
            <div className="code-line">&#125;;</div>
          </div>
        </div>
      </div>
    </section>
  )
}
