import React from "react";
import { Link } from "react-scroll";
import { siteMeta } from "../data";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container inner">
        <div className="brand">{siteMeta.name}</div>

        <nav className="nav-links">
          <Link to="hero" smooth duration={400} className="nav-link">
            Home
          </Link>

          <Link to="about" smooth duration={400} className="nav-link">
            About
          </Link>
 <Link to="experience" smooth duration={400} className="nav-link">
            Experience
          </Link>
          <Link to="projects" smooth duration={400} className="nav-link">
            Projects
          </Link>

         
          <Link to="skills" smooth duration={400} className="nav-link">
  Skills
</Link>
<Link to="education" smooth duration={400} className="nav-link">
  Education
</Link>


          
         
<Link to="snapshots" smooth duration={400} className="nav-link">
  Snapshots
</Link>

          <Link to="contact" smooth duration={400} className="nav-link">
            Contact
          </Link>

          <a className="btn" href={siteMeta.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>

      </div>
    </header>
  );
}
