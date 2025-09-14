import { useEffect } from "react";
import "./assets/css/index.css";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Education/Education";
import Contact from "./pages/Contact/Contact";

export default function App() {
  useEffect(() => {
    const scrollSpeed = 2; // pixels per frame
    let animationFrame;

    const scrollStep = () => {
      window.scrollBy(0, scrollSpeed);

      // Stop scrolling when bottom is reached
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        cancelAnimationFrame(animationFrame); // stop animation
        return;
      }

      animationFrame = requestAnimationFrame(scrollStep);
    };

    // Start scrolling after 3 seconds
    const startTimeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(scrollStep);
    }, 3000);

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

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
