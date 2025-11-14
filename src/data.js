// =========================
// SITE META
// =========================
export const siteMeta = {
  name: "Manika Goyal",
  title: "Software Engineer | Full-Stack Developer",
  email: "goyalmanika20@gmail.com",
  github: "https://github.com/Manika20",
  linkedin: "https://www.linkedin.com/in/manika-goyal-49899b229/",
  resume: "https://drive.google.com/file/d/1BIiiQ7oNgq2lQywbTxbLzNFMEA2NrUqO/view?usp=sharing"
};

// =========================
// HERO SECTION
// =========================
export const hero = {
  heading: "Hi, I'm Manika 👋",
  subheading:
    "Software Engineer skilled in building scalable full-stack applications, cloud-first systems, and high-performance backend services. I love solving complex engineering problems and bringing ideas to life through clean, maintainable code.",
  ctaText: "View my work"
};

// =========================
// ABOUT SECTION (Highly Polished)
// =========================
export const about = {
  paragraph: `
I'm a Software Engineer with hands-on experience in full-stack development, cloud engineering, 
and scalable backend systems. I’ve contributed to high-impact projects at OSTTRA (S&P Global) 
and Adobe — building cloud-based inventory systems, workflow automation platforms, and 
Gen-AI powered internal tools. 

I enjoy architecting systems end-to-end, optimizing performance, and writing clean, reliable code 
that solves real business problems. With a strong foundation in data structures, algorithms, 
distributed systems, and backend engineering, I aim to build impactful, production-ready products 
that scale.`,
  
  bullets: [
    "Experienced in designing scalable full-stack systems (React, Node.js, Spring Boot, Express).",
    "Strong backend background with REST APIs, database design (Postgres/MongoDB), and cloud services.",
    "Skilled in automation, workflow engines, infrastructure-aware engineering, and DevOps fundamentals."
  ]
};

// =========================
// PROJECTS (FAANG-style descriptions)
// =========================
export const projects = [
  {
    id: 1,
    title: "SocialHub — Full-Stack Social Platform",
    tech: "React, Node.js, Express, MongoDB, Passport.js, Socket.io",
    description: `
A production-grade social networking platform with secure authentication, 
real-time messaging, post creation, likes, comments, and friend request workflow. 
Built a scalable Node.js backend with optimized MongoDB queries and implemented 
role-based access, session handling, and responsive modern UI with React.`,
    live: "https://socialhub-dwox.onrender.com/",
    repo: "https://github.com/Manika20/SocialHub"
  },

  {
    id: 2,
    title: "Page Replacement Algorithm Visualizer",
    tech: "Node.js, C++, Algorithms, Data Structures",
    description: `
Developed an interactive visualization engine that simulates FIFO, LRU, LFU, MRU, 
and Optimal page replacement algorithms with step-by-step animation. 
Implemented the core logic in C++ for accuracy and performance, exposed via Node.js, 
and built a clean UI for students to analyze fault rates, frame states, and algorithm behavior.`,
    live: "https://pagereplacement-eqya.onrender.com/",
    repo: "https://github.com/Manika20/PageReplacement"
  },

  {
    id: 3,
    title: "MusicVerse — Modern Music Showcase Website",
    tech: "HTML, CSS, Responsive UI",
    description: `
A minimal, responsive, mobile-friendly music discovery experience with clean UI, 
featured playlists, artist sections, and smooth navigation. Designed with Flexbox 
and intuitive UX principles to ensure consistency across screen sizes.`,
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
    date: "Jan 2023 – Present",
    entries: [
      "Designed and developed backend microservices using Spring Boot, Postgres, and REST APIs to support onboarding and connectivity workflows.",
      "Built cloud-based Asset Inventory System using AWS Lambda and Python for automated tracking, visibility, and reporting across infrastructure.",
      "Developed frontend components in React for internal workflow portals, improving usability and reducing manual overhead for engineering teams.",
      "Collaborated across teams to optimize API performance, streamline data flows, and deliver reliable full-stack features in an agile environment."
    ]
  },

  {
    company: "Adobe",
    title: "Technical Consultant (CXM) — Intern",
    date: "Jun 2024 – Aug 2024",
    entries: [
      "Automated end-to-end onboarding processes, reducing manual efforts by over 70% and improving operational efficiency across teams.",
      "Developed a Gen-AI based query answering platform enabling employees to instantly retrieve Adobe-verified documentation using natural language search.",
      "Integrated efficient workflow rules, optimized queries, and built components to enhance system reliability and ease of use."
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
      list: ["Git", "Docker (Basics)", "AWS Lambda", "Flask", "REST APIs", "Linux"]
    }
  ]
};
export const snapshots = [
  {
    id: 1,
     src: "/src/assets/snapshots/osttra1.jpg",
    label: "OSTTRA – Software Engineering Work"
   
  },
  {
    id: 2,
    src: "/src/assets/snapshots/adobe1.jpg",
    label: "Adobe Internship – CXM Team"
  },
  {
    id: 3,
    src: "/src/assets/snapshots/event1.jpg",
    label: "Volunteering – Plant plantation drive by Adobe"
  }
];

