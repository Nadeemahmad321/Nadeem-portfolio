import React, { useState } from 'react'

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqData = [
    {
      question: "What are your typical working hours?",
      answer: "I am generally available from Monday to Friday, 9:00 AM to 6:00 PM IST. However, I maintain flexibility to coordinate with international clients and team members for scheduled deployments or reviews."
    },
    {
      question: "Are you available for freelance or contract work?",
      answer: "Yes, I am open to select freelance projects, consulting roles, and contract collaborations. I look for challenging work in mobile architecture, backend scaling, and full-stack web engineering."
    },
    {
      question: "What is your development process for mobile applications?",
      answer: "I follow an agile, component-driven workflow: starting with design blueprint reviews, followed by setting up scalable state architecture in React Native, integrating secure REST APIs, conducting rigorous performance profiling (ensuring 60fps rendering), and delivering verified builds."
    },
    {
      question: "Which backend tech stacks and databases do you specialize in?",
      answer: "I build robust backend services using Node.js and Express.js. For database management, I work extensively with SQL databases (MySQL) and document databases like MongoDB depending on the data relations and scalability requirements."
    }
  ]

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-block reveal">
      <div className="section-head">
        <span className="section-num">04 / FAQ</span>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="faq-container">
        {faqData.map((item, idx) => (
          <div 
            key={idx} 
            className={`faq-item ${activeIndex === idx ? 'active' : ''}`}
          >
            <button className="faq-question" onClick={() => toggleFaq(idx)}>
              <span>{item.question}</span>
              <span className="faq-icon">
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
