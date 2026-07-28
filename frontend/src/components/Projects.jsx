import React, { useState } from 'react'
import { Icons } from '../icons/SvgIcons'
import { projects } from '../data/portfolioData'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [selectedProj, setSelectedProj] = useState(null)

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
          <div 
            key={`${proj.title}-${filter}`} 
            className={`project-card clickable reveal delay-${(idx + 1) * 100} active`}
            onClick={() => setSelectedProj(proj)}
          >
            <div className="card-top">
              <span className="card-subtitle">{proj.subtitle}</span>
              <a 
                href={proj.link} 
                target="_blank" 
                rel="noreferrer" 
                className="live-link"
                onClick={(e) => e.stopPropagation()}
              >
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
            <div className="view-case-study">
              <span>View Case Study</span> &rarr;
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal Overlay */}
      {selectedProj && (
        <div className="modal-overlay animate-fade-in" onClick={() => setSelectedProj(null)}>
          <div className="modal-content animate-slide-up" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProj(null)} aria-label="Close details">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <span className="modal-subtitle">{selectedProj.subtitle}</span>
            <h3>{selectedProj.title} Case Study</h3>
            
            <div className="modal-body">
              <div className="modal-section">
                <h4>The Challenge</h4>
                <p>{selectedProj.challenge}</p>
              </div>
              
              <div className="modal-section">
                <h4>The Solution</h4>
                <p>{selectedProj.solution}</p>
              </div>
              
              <div className="modal-section">
                <h4>System Architecture Flow</h4>
                <div className="architecture-flow">
                  {selectedProj.architecture.map((node, i) => (
                    <React.Fragment key={i}>
                      <div className="architecture-node">
                        <span className="node-num">0{i+1}</span>
                        <span className="node-text">{node}</span>
                      </div>
                      {i < selectedProj.architecture.length - 1 && (
                        <div className="flow-arrow">
                          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                          </svg>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="modal-footer" style={{ marginTop: '32px' }}>
              <a 
                href={selectedProj.link} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                Visit Live Site / Repo <Icons.ExternalLink />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
