import React, { useState, useEffect, useRef } from 'react'
import { testimonials } from '../data/portfolioData'

export default function Testimonials() {
  const [currIdx, setCurrIdx] = useState(0)
  const autoPlayRef = useRef(null)

  const nextSlide = () => {
    setCurrIdx((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const startAutoPlay = () => {
    stopAutoPlay()
    autoPlayRef.current = setInterval(nextSlide, 6000)
  }

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
  }

  useEffect(() => {
    startAutoPlay()
    return () => stopAutoPlay()
  }, [])

  return (
    <section 
      id="testimonials" 
      className="section-block reveal"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div className="section-head">
        <span className="section-num">05 / REVIEWS</span>
        <h2>Client & Coworker Feedback</h2>
      </div>

      <div className="testimonials-carousel">
        <div className="testimonial-track-wrapper">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className={`testimonial-slide ${currIdx === idx ? 'active' : ''}`}
            >
              <div className="quote-mark">“</div>
              <p className="quote-text">{t.quote}</p>
              <div className="author-meta">
                <span className="author-name">{t.name}</span>
                <span className="author-role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="carousel-nav-btn prev" onClick={prevSlide} aria-label="Previous recommendation">
          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button className="carousel-nav-btn next" onClick={nextSlide} aria-label="Next recommendation">
          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        {/* Indicators Dots */}
        <div className="carousel-indicators">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrIdx(idx)}
              className={`indicator-dot ${currIdx === idx ? 'active' : ''}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
