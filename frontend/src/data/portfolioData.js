export const projects = [
  {
    title: "HHHJobs",
    subtitle: "Recruitment Mobile App",
    desc: "Architected a streamlined mobile recruitment application optimized for fast queries. Features live multi-parameter job filters, application status trackers, and secure dashboard metrics for recruiters.",
    tech: ["React Native", "Node.js", "Express", "SQL Schema Design"],
    link: "https://hhh-jobs.com/",
    category: "mobile",
    challenge: "Building a recruiter dashboard that processes real-time applicant tracking metrics with minimal query delay.",
    solution: "Optimized SQL indexing for job filter lookups, reducing query fetch time by 30%.",
    architecture: ["React Native UI", "Express Auth Middleware", "Node.js Controller", "PostgreSQL database"]
  },
  {
    title: "IndianTradeMart",
    subtitle: "B2B Marketplace Mobile App",
    desc: "Developed a B2B matching mobile application serving Indian manufacturers and global trade organizations. Implemented highly performant vendor dashboards and optimized indexing for category searches.",
    tech: ["React Native", "Express.js", "Node.js", "SQL Databases"],
    link: "https://play.google.com/apps/testing/com.indiantrademart",
    category: "mobile",
    challenge: "Scaling B2B vendor search matching across highly diverse manufacturer product catalog indices.",
    solution: "Designed efficient SQL queries and text-search catalog index patterns for quick search responses.",
    architecture: ["React Native App", "Node API Server", "SQL Database Cluster"]
  },
  {
    title: "Eimager",
    subtitle: "Background Screening Mobile App",
    desc: "Built a cross-platform React Native mobile application for enterprise screening. Features digital identity checks, qualification reviews, criminal record queries, and automated billing through Razorpay.",
    tech: ["React Native", "TypeScript", "Node.js", "SQL Backend"],
    link: "https://play.google.com/apps/testing/com.eimagerproject",
    category: "mobile",
    challenge: "Integrating secure multi-step verification APIs with zero lag and handling payment callbacks reliably.",
    solution: "Designed a state-managed Razorpay callback verification system to automatically trigger screening results.",
    architecture: ["React Native Client", "Express.js Backend", "Razorpay Gateway Integration", "SQL database"]
  },
  {
    title: "NutriFit",
    subtitle: "Smart Recipe & Calorie Planner",
    desc: "Designed and built a responsive web application for Indian food search, calorie calculations, and daily meal planning. Features weight-based nutrition tracking, TDEE calculator, and A4 PDF export.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    link: "https://nutrifitxnr.netlify.app",
    category: "web",
    challenge: "Managing weight-based TDEE calorie states and layout print renders dynamically across different client browsers.",
    solution: "Created custom print stylesheets and pure JavaScript calculation algorithms for accurate calculations.",
    architecture: ["Web HTML5 Front", "CSS3 Grid System", "JavaScript Meal Engine", "A4 print layout module"]
  },
  {
    title: "Personal Portfolio",
    subtitle: "Interactive Developer Portfolio",
    desc: "A minimal, high-performance developer portfolio website featuring a dynamic mouse-following glow spotlight, custom accent switcher, command palette navigation, and fully print-ready resume layout.",
    tech: ["React.js", "Vite", "Vanilla CSS", "Intersection Observer"],
    link: "https://nadeemahmadxr.netlify.app",
    category: "web",
    challenge: "Creating smooth, lag-free cursor mouse-spotlight effects at 60fps without heavy libraries.",
    solution: "Used native CSS variable bindings driven by mousemove event listeners to update spotlight positioning.",
    architecture: ["React Components", "Vite Bundler", "Custom CSS Customizer Panel", "EmailJS Gateway"]
  },
  {
    title: "Grocify",
    subtitle: "Full-Stack Grocery Commerce App",
    desc: "A mobile grocery commerce application built with React Native, powered by a Node.js + Express + MongoDB backend. Implemented secure OTP authentication, wishlist, order management, and full admin panels.",
    tech: ["React Native", "TypeScript", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/Nadeemahmad321/Grocify",
    category: "mobile",
    challenge: "Handling secure OTP authentication, cart synchronizations, and admin updates smoothly across mobile platforms.",
    solution: "Configured Express-JWT middlewares, Mongoose database models, and React Native Redux style hooks.",
    architecture: ["React Native Frontend", "Node & Express API Server", "MongoDB order schemas"]
  }
]

export const skills = [
  { name: "React Native (Android & iOS)", category: "Mobile Architecture" },
  { name: "Node.js & Express.js", category: "Backend Services" },
  { name: "SQL & Relational Databases", category: "Data Systems" },
  { name: "React.js & Core Web (HTML5/CSS3)", category: "Web Interfaces" },
  { name: "Java & Object Oriented Design", category: "Core Development" },
  { name: "C++ & Data Structures", category: "Algorithms" }
]

export const experience = [
  {
    role: "Trainee Application Developer (React Native)",
    company: "Ultimate iTech Pvt. Ltd.",
    duration: "26-03-2026 – Present",
    desc: [
      "Currently developing React Native applications, contributing to projects such as Eimager and Indian Trade Mart.",
      "Working on responsive UI development, REST API integration, bug fixing, and performance optimization.",
      "Delivering scalable, user-friendly mobile applications and maintaining smooth interface rendering."
    ]
  },
  {
    role: "Web Development Intern",
    company: "Oasis Infobyte",
    duration: "1-12-2023 – 1-1-2024",
    desc: [
      "Worked on developing responsive web applications using React.js, HTML, CSS, and JavaScript.",
      "Contributed to UI development, reusable component creation, and performance optimization.",
      "Collaborated to improve user experience across different screen sizes and devices."
    ]
  }
]

export const education = [
  {
    institution: "Mangalmay institute of engineering and technology — Greater Noida",
    degree: "B.tech CSE",
    duration: "2021 – 2025"
  },
  {
    institution: "Gopeshwar college hathua",
    degree: "Intermediate",
    duration: "2017 – 2019"
  },
  {
    institution: "Dr. Rajedra prasad high school",
    degree: "High School",
    duration: "2016 – 2017"
  }
]

export const services = [
  {
    title: "Mobile App Development",
    desc: "Designing and building high-performance, cross-platform Android & iOS applications using React Native. Focused on smooth rendering, offline-first architectures, and clean native UI integrations.",
    metric: "React Native specialist"
  },
  {
    title: "API Architecture & Design",
    desc: "Creating scalable RESTful backend services using Node.js & Express.js. Experienced in designing robust route patterns, auth middlewares, and connecting modules to secure databases.",
    metric: "Node.js & Express backend"
  },
  {
    title: "Database Schema Design",
    desc: "Structuring clean relational databases using SQL (MySQL) and flexible document catalogs with MongoDB. Experienced in indexing, queries optimization, and database normalization.",
    metric: "SQL & MongoDB databases"
  },
  {
    title: "Performance Tuning",
    desc: "Optimizing application bundle sizes, reducing mobile rendering lags, and refactoring API response structures to ensure fast load times and a highly responsive user experience.",
    metric: "60fps & SEO optimization"
  }
]

export const testimonials = [
  {
    quote: "Nadeem is a highly skilled React Native developer. He delivered the Eimager background verification app with zero performance lag, scaling backend integration cleanly. Extremely professional and delivery-focused.",
    name: "Tech Lead",
    role: "Ultimate iTech Pvt. Ltd."
  },
  {
    quote: "Working with Nadeem was seamless. He restructured our B2B directory APIs on IndianTradeMart, which optimized page load speeds significantly and simplified the mobile interface rendering.",
    name: "Project Manager",
    role: "B2B Marketplace Partner"
  },
  {
    quote: "Nadeem demonstrated outstanding problem-solving skills during his internship. He built responsive widgets and optimized CSS styling that boosted our platform speed by 15%. Highly recommended!",
    name: "Mentor",
    role: "Oasis Infobyte Internship Team"
  }
]

