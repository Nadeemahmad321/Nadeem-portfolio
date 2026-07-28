import React from 'react'
import { services } from '../data/portfolioData'

export default function Services() {
  // Simple mini SVG icons for each service
  const getIcon = (title) => {
    switch (title) {
      case "Mobile App Development":
        return (
          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
        )
      case "API Architecture & Design":
        return (
          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        )
      case "Database Schema Design":
        return (
          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4"></path>
          </svg>
        )
      case "Performance Tuning":
        return (
          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        )
      default:
        return (
          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        )
    }
  }

  return (
    <section id="services" className="section-block reveal">
      <div className="section-head">
        <span className="section-num">02 / SERVICES</span>
        <h2>What I Do</h2>
      </div>
      <div className="services-grid">
        {services.map((srv, idx) => (
          <div key={idx} className={`service-card reveal delay-${(idx + 1) * 100}`}>
            <div className="service-icon-box">
              {getIcon(srv.title)}
            </div>
            <h3>{srv.title}</h3>
            <p className="service-desc">{srv.desc}</p>
            <span className="service-metric">{srv.metric}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
