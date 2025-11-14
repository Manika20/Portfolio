import React from "react";

export default function Education() {
  return (
    <section id="education" className="section container">
      <h2>Education</h2>

      <div className="edu-card">
        <div className="edu-header">
          <div className="edu-degree">B.Tech – Computer Science (AIML)</div>
          <div className="edu-year">2021 – 2025</div>
        </div>

        <div className="edu-college">Maharaja Agrasen Institute of Technology, Delhi</div>

        <ul className="edu-list">
          <li>CGPA: <strong>9.4/10</strong> (Department Topper)</li>
          <li>Specialization in Artificial Intelligence & Machine Learning</li>
          <li>Coursework: DSA, DBMS, OS, CN, ML, Web Development</li>
          <li>Cleared SIH Internal Hackathon Round (2023)</li>
        </ul>
      </div>
    </section>
  );
}
