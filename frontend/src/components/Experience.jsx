import React from 'react'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="section-block">
      <div className="section-head">
        <span className="section-num">02 / HISTORY</span>
        <h2>Professional Experience</h2>
      </div>
      <div className="experience-timeline">
        {experience.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className="time-meta">
              <span className="duration">{exp.duration}</span>
              <span className="company">{exp.company}</span>
            </div>
            <div className="time-content">
              <h3>{exp.role}</h3>
              <ul className="details-list">
                {exp.desc.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
