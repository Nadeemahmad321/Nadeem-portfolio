import React from 'react'
import { Icons } from '../icons/SvgIcons'
import { projects } from '../data/portfolioData'

export default function Projects() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = ((centerY - y) / centerY) * 10
    const rotateY = ((x - centerX) / centerX) * 10
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleMouseLeave = (e) => {
    const card = e.currentTarget
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
  }

  return (
    <section id="projects" className="section-block">
      <div className="section-head reveal">
        <span className="section-num">01 / PROJECTS</span>
        <h2>Selected Works</h2>
      </div>
      <div className="project-grid">
        {projects.map((proj, idx) => (
          <div 
            key={idx} 
            className={`project-card reveal delay-${(idx + 1) * 100}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="card-top" style={{ transform: 'translateZ(30px)' }}>
              <span className="card-subtitle">{proj.subtitle}</span>
              <a href={proj.link} target="_blank" rel="noreferrer" className="live-link">
                Visit Link <Icons.ExternalLink />
              </a>
            </div>
            <h3 style={{ transform: 'translateZ(40px)' }}>{proj.title}</h3>
            <p className="card-desc" style={{ transform: 'translateZ(20px)' }}>{proj.desc}</p>
            <div className="card-tech" style={{ transform: 'translateZ(25px)' }}>
              {proj.tech.map((t, i) => (
                <span key={i} className="tech-pill">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
