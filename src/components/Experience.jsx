import React from "react";
import { experience } from "../data";
import { motion } from "framer-motion";

export default function Experience(){
  return (
    <section id="experience" className="section container">
      <h2>Experience</h2>
      <div style={{display:"grid",gap:18}}>
        {experience.map((exp, idx) => (
          <motion.div key={idx} className="card" initial={{opacity:0}} animate={{opacity:1}} transition={{delay: idx*0.08}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{fontWeight:700}}>{exp.company}</div>
              <div style={{color:"var(--muted)"}}>{exp.date}</div>
            </div>
            <div style={{marginTop:8,color:"var(--muted)"}}>{exp.title}</div>
            <ul style={{marginTop:10}}>
              {exp.entries.map((e,i)=> <li key={i} style={{color:"var(--muted)",marginBottom:6}}>{e}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
