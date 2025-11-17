// =========================
// SITE META
// =========================
export const siteMeta = {
  name: "Manika Goyal",
  title: "Software Engineer | Full-Stack Developer | Cloud & AI Engineer",
  email: "goyalmanika20@gmail.com",
  github: "https://github.com/Manika20",
  linkedin: "https://www.linkedin.com/in/manika-goyal-49899b229/",
  resume: "https://drive.google.com/file/d/1MvYDy7ola1nCzjJI6utWcnAj_c75g9SS/view?usp=sharing"
};


// =========================
// HERO SECTION
// =========================
export const hero = {
  heading: "Hi, I'm Manika 👋",
  subheading:
    "Software Engineer experienced in building scalable full-stack applications, cloud-native systems, and Gen-AI powered platforms. I enjoy solving complex engineering problems and converting ideas into production-ready, high-impact solutions.",
  ctaText: "View my work"
};


// =========================
// ABOUT SECTION (Highly Polished)
// =========================
export const about = {
  paragraph: `
I'm a Software Engineer with experience delivering production-grade systems at OSTTRA (S&P Global) 
and Adobe. I’ve built end-to-end platforms including onboarding portals, cloud asset inventory systems, 
and a Gen-AI chatbot using search-augmented intelligence. 

I enjoy designing clean architectures, crafting efficient backend services, and building intuitive 
front-end experiences. I have strong fundamentals in algorithms, distributed systems, and databases — 
and I love working on systems that automate workflows, reduce manual effort, and scale reliably.

I am also a University Topper (twice) with a CGPA of 9.4/10.
`,
  
  bullets: [
    "Full-stack development experience with React, Node.js, Express, Spring Boot, and REST APIs.",
    "Cloud engineering using AWS Lambda, GCP services, automation pipelines, and microservices.",
    "Strong background in DSA, system design, DBMS, OS, computer networks, and ML fundamentals."
  ]
};


// =========================
// PROJECTS (FAANG-style descriptions)
// =========================
export const projects = [
  {
    id: 1,
    title: "SocialHub — Full-Stack Social Media Platform",
    tech: "React, Node.js, Express, MongoDB, Passport.js, Socket.io",
    description: `
A full-scale MERN social platform with authentication, posts, likes, comments, friends module, 
and real-time chat. Implemented secure auth with Passport.js (session + token), optimized MongoDB 
queries, and built a clean responsive UI with React and SCSS. Designed scalable backend APIs and 
websocket-based messaging.`,
    live: "https://socialhub-dwox.onrender.com/",
    repo: "https://github.com/Manika20/SocialHub"
  },

  {
    id: 2,
    title: "Cache Replacement Algorithm Simulator",
    tech: "C++, Node.js, Algorithms, OS Concepts",
    description: `
Interactive simulator for FIFO, LRU, MRU, LFU, and Optimal page replacement policies, built using 
C++ for performance-accurate logic and a Node.js wrapper for UI communication. Includes real-time 
visualization of cache frames, hit/miss tracking, and customizable inputs for teaching OS concepts.`,
    live: "https://pagereplacement-eqya.onrender.com/",
    repo: "https://github.com/Manika20/PageReplacement"
  },

  {
    id: 3,
    title: "MusicVerse — Modern Music Showcase Website",
    tech: "HTML, CSS, Responsive UI",
    description: `
A minimal, mobile-responsive music discovery UI featuring artists, playlists, and clean navigation. 
Designed with Flexbox and modern UI patterns for a consistent experience across devices.`,
    live: "https://music-site-d9be5.web.app/",
    repo: "https://github.com/Manika20"
  }
];


// =========================
// EXPERIENCE (Strong, quantified, recruiter-ready)
// =========================
export const experience = [
  {
    company: "Osttra (S&P Global)",
    title: "Associate Software Engineer",
    date: "Apr 2025 – Present",
    entries: [
      "Built a full-stack Network Onboarding Portal using Spring Boot, React, and PostgreSQL, digitizing customer setup flows and reducing onboarding delays.",
      "Implemented Azure AD SSO and role-based dashboards, improving authentication reliability and secure access control.",
      "Automated Jira ticket creation, lifecycle updates, and email notifications, removing manual follow-ups and speeding workflows.",
    ]
  },

  {
    company: "Osttra (S&P Global)",
    title: "Associate Software Engineer — Asset Inventory System",
    date: "Jan 2025 – Apr 2025",
    entries: [
      "Engineered a multi-cloud Asset Inventory System using AWS and GCP, enabling real-time visibility into infra resources.",
      "Automated cloud ingestion pipelines using AWS Lambda and Python, reducing manual audits and improving monitoring accuracy.",
      "Integrated asset tracking with Jira for smooth lifecycle updates from provisioning to retirement."
    ]
  },

  {
    company: "Adobe",
    title: "Automation Engineer Intern — Gen-AI Chatbot",
    date: "Jun 2024 – Aug 2024",
    entries: [
      "Built a Search-Augmented Generation (SAG) chatbot that answered Adobe-verified queries using real documentation only.",
      "Designed a real-time fetch pipeline pulling data from adobe.com to prevent hallucinations and keep LLM responses accurate.",
      "Developed a topic classification engine using TF-IDF + K-Means, deployed on a VM via Flask API."
    ]
  }
];


// =========================
// SKILLS (Clean, polished categories)
// =========================
export const skills = {
  categories: [
    {
      name: "Programming Languages",
      list: ["C++", "C", "Python", "JavaScript", "Java"]
    },
    {
      name: "Web & Backend",
      list: ["React", "Node.js", "Express", "Spring Boot", "MongoDB", "PostgreSQL", "SQL"]
    },
    {
      name: "Cloud, DevOps & Tools",
      list: ["AWS Lambda", "GCP", "Docker", "GitHub Workflows", "Flask", "Linux", "REST APIs"]
    }
  ]
};

export const snapshots = [
  { id: 1, src: "/snapshots/osttra1.jpg", label: "OSTTRA – Software Engineering Work" },
  { id: 2, src: "/snapshots/adobe1.jpg", label: "Adobe Internship – CXM Team" },
  { id: 3, src: "/snapshots/event1.jpg", label: "Volunteering – Adobe Plantation Drive" }
];

