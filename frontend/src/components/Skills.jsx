import React, { useState } from 'react'
import { skills } from '../data/portfolioData'

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section id="skills" className="section-block">
      <div className="section-head reveal">
        <span className="section-num">03 / CAPABILITIES</span>
        <h2>Technical Profile</h2>
      </div>

      <div className="skills-search-bar reveal">
        <input 
          type="text"
          placeholder="Search skills (e.g. React Native, SQL, Java)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="skills-search-input"
        />
        {searchQuery && (
          <button className="search-clear-btn" onClick={() => setSearchQuery('')}>
            &times;
          </button>
        )}
      </div>

      <div className="skills-grid">
        {skills.map((skill, idx) => {
          const isMatching = searchQuery === '' || 
            skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            skill.category.toLowerCase().includes(searchQuery.toLowerCase())
            
          const cardClass = searchQuery !== '' 
            ? (isMatching ? 'highlighted' : 'faded')
            : ''

          return (
            <div 
              key={idx} 
              className={`skill-card ${cardClass} reveal delay-${(idx % 4 + 1) * 100}`}
            >
              <span className="skill-cat">{skill.category}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
