import React, { useState } from 'react'
import { Icons } from '../icons/SvgIcons'
import { projects } from '../data/portfolioData'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="section-block">
      <div className="section-head reveal">
        <span className="section-num">01 / PROJECTS</span>
        <h2>Selected Works</h2>
      </div>

      <div className="filter-bar reveal">
        {['all', 'mobile', 'web'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
          >
            {cat === 'all' ? 'All' : cat === 'mobile' ? 'Mobile Apps' : 'Web Apps'}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((proj, idx) => (
          <div key={`${proj.title}-${filter}`} className={`project-card reveal delay-${(idx + 1) * 100} active`}>
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
