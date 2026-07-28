import React, { useState, useEffect } from 'react'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Faq from './components/Faq'
import CommandPalette from './components/CommandPalette'
import PrintLayout from './components/PrintLayout'

function App() {
  const [theme, setTheme] = useState('dark')
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState('')
  
  // Custom Accent Colors State
  const [accentColor, setAccentColor] = useState('blue')
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false)

  const accents = [
    { name: 'blue', value: '#3b82f6', label: 'Neon Blue' },
    { name: 'purple', value: '#a855f7', label: 'Violet' },
    { name: 'emerald', value: '#10b981', label: 'Emerald' },
    { name: 'orange', value: '#f97316', label: 'Orange' },
    { name: 'rose', value: '#ec4899', label: 'Rose' }
  ]

  const changeAccent = (colorName, colorVal) => {
    setAccentColor(colorName)
    document.documentElement.style.setProperty('--highlight', colorVal)
    document.documentElement.style.setProperty('--highlight-glow', `${colorVal}1a`)
  }

  // Command Palette States
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false)
  const [commandQuery, setCommandQuery] = useState('')
  const [selectedIdx, setSelectedIdx] = useState(0)

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  // Smooth Scroll Helper
  const scrollTo = (id) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Print CV Action
  const handlePrint = () => {
    window.print()
  }

  // Commands definition
  const commands = [
    { label: "Navigate: Home", action: () => scrollTo('home'), shortcut: "H" },
    { label: "Navigate: Selected Works", action: () => scrollTo('projects'), shortcut: "P" },
    { label: "Navigate: Core Services", action: () => scrollTo('services'), shortcut: "W" },
    { label: "Navigate: Experience History", action: () => scrollTo('experience'), shortcut: "E" },
    { label: "Navigate: Technical Profile", action: () => scrollTo('skills'), shortcut: "S" },
    { label: "Navigate: FAQ Section", action: () => scrollTo('faq'), shortcut: "F" },
    { label: "Navigate: Contact Details", action: () => scrollTo('contact'), shortcut: "C" },
    { label: "Action: Toggle Light/Dark Mode", action: toggleTheme, shortcut: "T" },
    { label: "Action: Print/Save Resume as PDF", action: handlePrint, shortcut: "R" }
  ]

  const filteredCommands = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(commandQuery.toLowerCase())
  )

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsCommandMenuOpen(prev => !prev)
        setCommandQuery('')
        setSelectedIdx(0)
      }

      if (!isCommandMenuOpen) return

      if (e.key === 'Escape') {
        setIsCommandMenuOpen(false)
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIdx(prev => (prev + 1) % filteredCommands.length)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIdx(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length)
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (filteredCommands[selectedIdx]) {
          filteredCommands[selectedIdx].action()
          setIsCommandMenuOpen(false)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isCommandMenuOpen, filteredCommands, selectedIdx])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
    document.documentElement.style.setProperty('--highlight', '#3b82f6')
    document.documentElement.style.setProperty('--highlight-glow', '#3b82f61a')

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach(el => observer.observe(el))

    // Cursor Spotlight Tracking
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      revealElements.forEach(el => observer.unobserve(el))
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error')
      return
    }
    setFormStatus('success')
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setFormStatus('')
    }, 3000)
  }

  return (
    <div className="portfolio-app">
      {/* Structural Background Layout */}
      <div className="noise-overlay"></div>
      <div className="mesh-gradient"></div>

      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        scrollTo={scrollTo}
        toggleTheme={toggleTheme}
        theme={theme}
        setIsCommandMenuOpen={setIsCommandMenuOpen}
      />

      {/* Main Container */}
      <main className="content-container">
        <Hero scrollTo={scrollTo} />
        <Projects />
        <Services />
        <Experience />
        <Skills />
        <Faq />
        <Contact
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          formStatus={formStatus}
        />
      </main>

      {/* Command Palette Overlay Modal */}
      <CommandPalette
        isCommandMenuOpen={isCommandMenuOpen}
        setIsCommandMenuOpen={setIsCommandMenuOpen}
        commandQuery={commandQuery}
        setCommandQuery={setCommandQuery}
        filteredCommands={filteredCommands}
        selectedIdx={selectedIdx}
        setSelectedIdx={setSelectedIdx}
      />

      {/* Floating Accent Color Customizer */}
      <div className={`accent-customizer ${isCustomizerOpen ? 'open' : ''}`}>
        <button 
          onClick={() => setIsCustomizerOpen(!isCustomizerOpen)} 
          className="customizer-toggle"
          aria-label="Customize theme accent color"
        >
          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </button>
        <div className="customizer-panel">
          <h4>Customize Theme Accent</h4>
          <div className="accent-grid">
            {accents.map((acc) => (
              <button
                key={acc.name}
                onClick={() => changeAccent(acc.name, acc.value)}
                className={`accent-btn ${accentColor === acc.name ? 'active' : ''}`}
                style={{ backgroundColor: acc.value }}
                title={acc.label}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hidden PDF Printable CV Layout */}
      <PrintLayout />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="copy">&copy; {new Date().getFullYear()} Nadeem Ahmad. All rights reserved.</p>
          <p className="details">Designed and coded with minimal, production-grade aesthetics.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
