import React from "react";
import { siteMeta } from "../data";

export default function Contact(){
  return (
    <section id="contact" className="section container">
      <h2>Contact</h2>
      <div className="card" style={{display:"flex",flexDirection:"column",gap:12}}>
        <div style={{color:"var(--muted)"}}>I'm available for full-time roles and contract work. Let's chat!</div>
        <div style={{display:"flex",gap:8}}>
          <a className="btn" href={`mailto:${siteMeta.email}`}>Email</a>
          <a className="btn" href={siteMeta.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
