import React from "react";
import { about } from "../data";
import { motion } from "framer-motion";

export default function About(){
  return (
    <section id="about" className="section container">
      <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.4}}>
        <h2>About</h2>
        <p style={{color:"var(--muted)",marginBottom:12}}>{about.paragraph}</p>
        <ul>
          {about.bullets.map((b,i)=>(
            <li key={i} style={{color:"var(--muted)",marginBottom:6}}>{b}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
