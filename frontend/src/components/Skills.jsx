import React from 'react'
import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="section-block">
      <div className="section-head reveal">
        <span className="section-num">03 / CAPABILITIES</span>
        <h2>Technical Profile</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className={`skill-card reveal delay-${(idx % 4 + 1) * 100}`}>
            <span className="skill-cat">{skill.category}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
