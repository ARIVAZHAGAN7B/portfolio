import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";

import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";

export default function App() {

  return (
    <>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
    </>
  );
}
