import React from "react";
import { siteMeta } from "../data";

export default function Footer(){
  return (
    <footer>
      <div className="container" style={{display:"flex",flexDirection:"column",gap:8,alignItems:"center"}}>
        <div style={{color:"var(--muted)"}}>© {new Date().getFullYear()} {siteMeta.name} — Built with React</div>
        <div style={{color:"var(--muted)"}}>
          <a style={{color:"var(--muted)", textDecoration:"none"}} href={siteMeta.github} target="_blank" rel="noreferrer">GitHub</a>{" • "}
          <a style={{color:"var(--muted)", textDecoration:"none"}} href={siteMeta.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
