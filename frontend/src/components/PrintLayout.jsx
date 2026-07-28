import React from 'react'

export default function PrintLayout() {
  return (
    <div className="pdf-resume-layout">
      <div className="resume-header">
        <h1 className="resume-name">Nadeem Ahmad</h1>
        <p className="resume-location">Hathua, Gopalganj, Bihar</p>
        <div className="resume-contact">
          <span>📞 +91 9973942354</span>
          <span>✉️ nadeemahmad23122001@gmail.com</span>
          <span>🔗 LinkedIn</span>
          <span>🔗 Git</span>
          <span>🔗 Portfolio</span>
        </div>
      </div>

      <div className="resume-section">
        <h3>EDUCATION</h3>
        <div className="resume-hr"></div>
        <div className="resume-item">
          <div className="resume-row">
            <strong>Mangalmay institute of engineering and technology — Greater Noida</strong>
            <span>2021 – 2025</span>
          </div>
          <div className="resume-desc">B.tech CSE</div>
        </div>
        <div className="resume-item">
          <div className="resume-row">
            <strong>Gopeshwar college hathua</strong>
            <span>2017 – 2019</span>
          </div>
          <div className="resume-desc">Intermediate</div>
        </div>
        <div className="resume-item">
          <div className="resume-row">
            <strong>Dr. Rajedra prasad high school</strong>
            <span>2016 – 2017</span>
          </div>
          <div className="resume-desc">High School</div>
        </div>
      </div>

      <div className="resume-section">
        <h3>Technical SKILLS</h3>
        <div className="resume-hr"></div>
        <div className="resume-skills-grid">
          <div>
            <span>• C++</span>
            <span>• CSS</span>
            <span>• Express</span>
          </div>
          <div>
            <span>• Java</span>
            <span>• JavaScript</span>
            <span>• MongoDB</span>
          </div>
          <div>
            <span>• MySQL</span>
            <span>• React.js</span>
            <span>• OOP</span>
          </div>
          <div>
            <span>• HTML</span>
            <span>• Node.js</span>
            <span>• Data Structure</span>
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h3>PROJECTS</h3>
        <div className="resume-hr"></div>
        
        <div className="resume-item">
          <div className="resume-row">
            <strong>Eimager Mobile App</strong>
            <span>React Native</span>
          </div>
          <ul className="resume-bullets">
            <li>Developed a React Native application for an employee background verification platform with responsive UI, REST API integration, authentication, and performance optimization to deliver a smooth mobile experience.</li>
          </ul>
        </div>

        <div className="resume-item">
          <div className="resume-row">
            <strong>Indian Trade Mart Mobile App</strong>
            <span>React Native</span>
          </div>
          <ul className="resume-bullets">
            <li>Developed a React Native B2B marketplace application with responsive UI, reusable components, REST API integration, product browsing, and performance optimization for an enhanced user experience.</li>
          </ul>
        </div>

        <div className="resume-item">
          <div className="resume-row">
            <strong>Personal Portfolio Website</strong>
            <span>React.js</span>
          </div>
          <ul className="resume-bullets">
            <li>Developed a dynamic and fully responsive portfolio website using React.js to showcase personal information, projects, skills, and resume, with a modern UI and optimized user experience across multiple devices.</li>
          </ul>
        </div>

        <div className="resume-item">
          <div className="resume-row">
            <strong>NutriFit Website</strong>
            <span>React.js</span>
          </div>
          <ul className="resume-bullets">
            <li>Designed and developed a responsive nutrition and fitness website using React.js with reusable components, modern UI design, and optimized performance for better accessibility across devices.</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h3>EXPERIENCE</h3>
        <div className="resume-hr"></div>
        
        <div className="resume-item">
          <div className="resume-row">
            <strong>Ultimate iTech Pvt. Ltd.</strong>
            <span>26-03-2026 – Present</span>
          </div>
          <div className="resume-desc">Trainee Application Developer (React Native)</div>
          <ul className="resume-bullets">
            <li>Currently developing React Native applications, contributing to projects such as Eimager and Indian Trade Mart. Working on responsive UI development, REST API integration, bug fixing, performance optimization, and delivering scalable, user-friendly mobile applications.</li>
          </ul>
        </div>

        <div className="resume-item">
          <div className="resume-row">
            <strong>Oasis Infobyte</strong>
            <span>1-12-2023 – 1-1-2024</span>
          </div>
          <div className="resume-desc">Web Development Intern</div>
          <ul className="resume-bullets">
            <li>During my internship at Oasis Infobyte, I worked on developing responsive web applications using React.js, HTML, CSS, and JavaScript. I contributed to UI development, reusable component creation, performance optimization, and improving user experience across different devices.</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h3>ACHIEVEMENTS</h3>
        <div className="resume-hr"></div>
        <ul className="resume-bullets">
          <li>Solved 400+ coding problems across GeeksforGeeks, LeetCode, and CodeStudio, strengthening problem-solving skills and algorithmic understanding.</li>
          <li>Star Performer of AICTE Oasis Infobyte Internship for outstanding contribution and dedication.</li>
        </ul>
      </div>

      <div className="resume-section">
        <h3>CERTIFICATIONS</h3>
        <div className="resume-hr"></div>
        <ul className="resume-bullets" style={{ marginBottom: 0 }}>
          <li>Fundamentals of ‘C++’ Programming (E & ICT Academy, IIT Kanpur)</li>
          <li>Fundamentals of Python Programming (YBI Foundation, Scaler)</li>
        </ul>
      </div>
    </div>
  )
}
