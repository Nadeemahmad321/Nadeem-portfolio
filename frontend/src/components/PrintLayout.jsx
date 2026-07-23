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
            <strong>Airbnb website</strong>
            <span>Mern Stack</span>
          </div>
          <ul className="resume-bullets">
            <li><strong>About project</strong> Developed an Airbnb web app using MERN stack with features like booking, favorites, and host functionalities for adding, editing, and deleting homes.</li>
          </ul>
        </div>

        <div className="resume-item">
          <div className="resume-row">
            <strong>Personal portfolio website</strong>
            <span>JavaScript</span>
          </div>
          <ul className="resume-bullets">
            <li><strong>About project</strong> Designed a dynamic and responsive portfolio website to showcase personal details, projects, and resume, ensuring accessibility across all devices.</li>
          </ul>
        </div>

        <div className="resume-item">
          <div className="resume-row">
            <strong>Job finder website</strong>
            <span>ReactJS</span>
          </div>
          <ul className="resume-bullets">
            <li><strong>About project</strong> Developed a job finder website using React Router for smooth navigation across Home, Jobs, Career, and Contact sections, enhancing the user experience.</li>
          </ul>
        </div>

        <div className="resume-item">
          <div className="resume-row">
            <strong>Barber shop website</strong>
            <span>JavaScript</span>
          </div>
          <ul className="resume-bullets">
            <li><strong>About project</strong> Created a responsive website for a barber shop, presenting services like haircuts, dry shampoo, and beard trimming, along with detailed staff profiles to improve customer engagement.</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h3>INTERNSHIP</h3>
        <div className="resume-hr"></div>
        
        <div className="resume-item">
          <div className="resume-row">
            <strong>Oasis Infobyte</strong>
            <span>1-12-2023 – 1-1-2024</span>
          </div>
          <div className="resume-desc">Web Development and Designing</div>
          <ul className="resume-bullets">
            <li>During my web developer internship at Oasis Infobyte, I gained hands-on experience in designing and implementing responsive web applications using HTML, CSS, and JavaScript. I worked on various projects, collaborating with cross-functional teams to enhance user interfaces, improve site performance, and ensure mobile compatibility.</li>
          </ul>
        </div>

        <div className="resume-item">
          <div className="resume-row">
            <strong>Code Soft</strong>
            <span>19-7-2024 – 19-8-2024</span>
          </div>
          <div className="resume-desc">Web Development</div>
          <ul className="resume-bullets">
            <li>During my one-month web development internship at Code Soft, I learned a variety of skills and successfully completed several projects, including a calculator, a landing page, and a portfolio webpage, which enhanced my practical experience in web development.</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h3>ACHIEVEMENTS</h3>
        <div className="resume-hr"></div>
        <ul className="resume-bullets">
          <li>I have solved over 400 questions on GeeksforGeeks, LeetCode, and CodeStudio, enhancing my problem-solving skills and coding proficiency through diverse and challenging exercises on these platforms.</li>
          <li>Star Performer of AICTE Oasis Infobyte Internship – for exceptional dedication and outstanding contribution during tenure.</li>
        </ul>
      </div>

      <div className="resume-section">
        <h3>CERTIFICATIONS</h3>
        <div className="resume-hr"></div>
        <ul className="resume-bullets" style={{ marginBottom: 0 }}>
          <li>Fundamental of ‘C++’ Programming (E & ICT Academy, IIT Kanpur)</li>
          <li>Fundamental of Python Programming (YBI Foundation, Scaler)</li>
        </ul>
      </div>
    </div>
  )
}
