import React from "react";
import { projects } from "../data";
import { motion } from "framer-motion";

export default function Projects(){
  return (
    <section id="projects" className="section container">
      <h2>Selected Projects</h2>
      <div className="grid">
        {projects.map(p => (
          <motion.div key={p.id} className="card" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.4}}>
            <div className="card-title">{p.title}</div>
            <div className="card-sub">{p.tech}</div>
            <p style={{color:"var(--muted)"}}>{p.description}</p>
            <div style={{marginTop:12, display:"flex", gap:8}}>
              {p.live && <a className="btn" href={p.live} target="_blank" rel="noreferrer">Live</a>}
              {p.repo && <a className="btn" href={p.repo} target="_blank" rel="noreferrer">Code</a>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
