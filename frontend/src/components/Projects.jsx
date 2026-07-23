import React from 'react'
import { Icons } from '../icons/SvgIcons'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="section-block">
      <div className="section-head">
        <span className="section-num">01 / PROJECTS</span>
        <h2>Selected Works</h2>
      </div>
      <div className="project-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <div className="card-top">
              <span className="card-subtitle">{proj.subtitle}</span>
              <a href={proj.link} target="_blank" rel="noreferrer" className="live-link">
                Visit Link <Icons.ExternalLink />
              </a>
            </div>
            <h3>{proj.title}</h3>
            <p className="card-desc">{proj.desc}</p>
            <div className="card-tech">
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
