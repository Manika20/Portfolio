import React from "react";
import { motion } from "framer-motion";
import { hero, siteMeta } from "../data";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="hero" className="section container hero">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>{hero.heading}</h1>
        <p>{hero.subheading}</p>

        <div style={{ display: "flex", gap: 12 }}>
          <a className="btn" href={siteMeta.resume} target="_blank" rel="noreferrer">
            Download Resume
          </a>
          <a className="btn" href="#projects">
            {hero.ctaText}
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="card" style={{ textAlign: "center" }}>
          <img
            src={profile}
            alt="profile"
            style={{
              width: 160,
              height: 160,
              borderRadius: "999px",
              objectFit: "cover",
              marginBottom: 12,
            }}
          />

          <div style={{ fontWeight: 700 }}>{siteMeta.name}</div>
          <div style={{ color: "var(--muted)", fontSize: 13 }}>
            Associate Software Engineer
          </div>

          <div style={{ marginTop: 12 }}>
            <a className="btn" href={`mailto:${siteMeta.email}`}>
              Email
            </a>
            <a className="btn" style={{ marginLeft: 8 }} href={siteMeta.github} target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
