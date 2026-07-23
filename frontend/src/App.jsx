import React, { useState, useEffect } from 'react'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import CommandPalette from './components/CommandPalette'
import PrintLayout from './components/PrintLayout'

function App() {
  const [theme, setTheme] = useState('dark')
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState('')
  
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
    { label: "Navigate: Experience History", action: () => scrollTo('experience'), shortcut: "E" },
    { label: "Navigate: Technical Profile", action: () => scrollTo('skills'), shortcut: "S" },
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
        <Experience />
        <Skills />
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
