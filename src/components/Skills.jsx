import React from "react";
import { skills } from "../data";

export default function Skills(){
  return (
    <section id="skills" className="section container">
      <h2>Skills</h2>
      <div style={{display:"flex",gap:18,flexWrap:"wrap"}}>
        {skills.categories.map((c,idx)=>(
          <div key={idx} className="card" style={{minWidth:220}}>
            <div style={{fontWeight:700, marginBottom:8}}>{c.name}</div>
            <div style={{color:"var(--muted)"}}>{c.list.join(", ")}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
