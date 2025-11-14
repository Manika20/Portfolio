import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Snapshots from "./components/Snapshots";
import Education from "./components/Education";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
         <Experience />
        <Projects />
       
        <Skills />
         <Education /> 
        <Snapshots />

        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
