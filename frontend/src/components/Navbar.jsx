import React, { useState } from 'react'
import { Icons } from '../icons/SvgIcons'

export default function Navbar({ activeSection, scrollTo, toggleTheme, theme, setIsCommandMenuOpen }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (sec) => {
    scrollTo(sec)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo" onClick={() => handleNavClick('home')}>
          Nadeem<span>Ahmad</span>
        </div>
        
        {/* Toggleable Navigation Links */}
        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {['home', 'projects', 'experience', 'skills', 'contact'].map((sec) => (
            <button
              key={sec}
              onClick={() => handleNavClick(sec)}
              className={`nav-item ${activeSection === sec ? 'active' : ''}`}
            >
              {sec.toUpperCase()}
            </button>
          ))}
        </nav>

        <div className="nav-right" style={{ gap: '12px' }}>
          <button className="cmd-btn" onClick={() => setIsCommandMenuOpen(true)} title="Open Command Menu (Ctrl+K)">
            <span className="cmd-key">⌘ K</span>
          </button>
          <a href="/Nadeem_Ahmad.pdf" download="Nadeem_Ahmad_Resume.pdf" className="btn btn-secondary nav-cv-btn" style={{ padding: '6px 12px', fontSize: '12px', textDecoration: 'none' }}>
            Download CV
          </a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <Icons.Sun /> : <Icons.Moon />}
          </button>
          
          {/* Hamburger Menu Button */}
          <button 
            className="hamburger-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
