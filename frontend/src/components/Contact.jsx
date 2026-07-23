import React from 'react'
import { Icons } from '../icons/SvgIcons'

export default function Contact({ formData, setFormData, handleSubmit, formStatus }) {
  return (
    <section id="contact" className="section-block contact-block">
      <div className="contact-grid">
        <div className="contact-info">
          <div className="section-head">
            <span className="section-num">04 / INQUIRIES</span>
            <h2>Let's talk about building something.</h2>
          </div>
          <p className="contact-pitch">
            Interested in working together or want to talk about cross-platform app scaling? Drop a message or reach out via email.
          </p>
          
          <div className="channels">
            <a href="mailto:nadeemahmad23122001@gmail.com" className="channel-link">
              <Icons.Mail /> nadeemahmad23122001@gmail.com
            </a>
            <a href="tel:+919973942354" className="channel-link">
              <Icons.Phone /> +91 9973942354
            </a>
            <span className="channel-link location">
              <Icons.MapPin /> Gopalganj, Bihar, India
            </span>
          </div>

          <div className="social-links">
            <a href="https://github.com/nadeemahmad23122001" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Icons.Github />
            </a>
            <a href="https://www.linkedin.com/in/nadeem-ahmad-8332a628a/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Icons.Linkedin />
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Brief details about your project or inquiry"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Send Inquiry
            </button>
            {formStatus === 'success' && (
              <p className="status-msg success-msg">Inquiry successfully sent. Thank you.</p>
            )}
            {formStatus === 'error' && (
              <p className="status-msg error-msg">All form fields must be completed.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
