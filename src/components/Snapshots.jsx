import React from "react";
import { motion } from "framer-motion";
import { snapshots } from "../data";

export default function Snapshots() {
  return (
    <section id="snapshots" className="section container">
      <h2 style={{ marginBottom: 24 }}>Professional Snapshots</h2>

      <div className="masonry-grid">
        {snapshots.map((item) => (
          <motion.div
            key={item.id}
            className="masonry-item"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src={item.src} alt={item.label} className="snapshot-img" />
            <p className="snapshot-label">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
