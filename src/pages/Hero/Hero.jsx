import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import "@/assets/css/animate.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import { motion, useMotionValue, useTransform } from "framer-motion";

// Parallax Grid Background
const GridBackground = ({ mouseX, mouseY }) => {
  const rotateX = useTransform(mouseY, [0, window.innerHeight], [10, -10]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-10, 10]);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none opacity-20"
      style={{ rotateX, rotateY }}
    >
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="absolute inset-0">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="none" stroke="white" strokeWidth="0.5" className="opacity-40 animate-gridPulse" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </motion.div>
  );
};

export default function Hero() {
  const words = [
    "Full-Stack Developer (Web and Mobile)",
    "Machine Learning Engineer",
    "Cloud Engineer",
    "Cloud Developer",
    "DevOps Engineer",
    "MLOps Engineer",
    "YouTuber",
  ];

  const [heroPadding, setHeroPadding] = useState("0");
  const [code] = useState(`
// JavaScript Profile
const profile = {
  name: 'Arivazhagan B',
  title: "Full-Stack Developer | Machine Learning Engineer | Cloud Engineer",
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  yearsOfExperience: 1, 
  hireable: function() {
    return this.hardWorker && this.problemSolver && this.skills.length >= 5 && this.yearsOfExperience >= 3;
  }
};
  `);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    Prism.highlightAll();

    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse { 0%,100%{opacity:0.1;}50%{opacity:0.3;} }
      @keyframes dotPulse { 0%,100%{opacity:0.2;transform:scale(0.8);}50%{opacity:0.5;transform:scale(1.2);} }
    `;
    document.head.appendChild(style);

    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;
      setHeroPadding(isTargetResolution ? "12rem" : "0");
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    // Track mouse movement for parallax
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -120, rotate: -5 },
    visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 120, rotate: 5 },
    visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <main className="bg-[#020617] text-white min-h-screen relative overflow-hidden">
      <section
        className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0"
        style={{ paddingTop: heroPadding }}
      >
        <GridBackground mouseX={mouseX} mouseY={mouseY} />

        <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors number={15} />
        </motion.div>

        <motion.div
          className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Column */}
          <motion.div className="w-full lg:w-1/2 mb-12 lg:mb-0" variants={fadeInLeft}>
            <motion.div
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6 sm:mb-8"
              variants={fadeInUp}
              whileHover={{ scale: 1.07, rotate: 2 }}
            >
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-gray-300 text-xs sm:text-sm font-medium">Welcome to my universe</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 sm:mb-8"
              variants={fadeInUp}
            >
              <SparklesText text="Hello" />{" "}
              <span className="relative inline-block">
                I&apos;m
                <span className="typing-effect gradient-text"> Arivazhagan B</span>
              </span>
            </motion.h1>

            <motion.div
              className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-sm"
              variants={fadeInUp}
              whileHover={{ scale: 1.08, rotate: 3 }}
            >
              <i className="fas fa-rocket text-blue-400 animate-bounce text-sm sm:text-base"></i>
              <span>
                <FlipWords className="text-lg sm:text-xl text-blue-400 font-medium" words={words} />
              </span>
            </motion.div>

            <motion.p className="text-base sm:text-xl text-gray-300/90 leading-relaxed max-w-xl" variants={fadeInUp}>
              Founder of Codexcoders, AI Product Developer, and Full-Stack Developer with a passion for building innovative web and AI solutions.
            </motion.p>
          </motion.div>

          {/* Right Column - Code Window */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={fadeInRight}
            style={{
              rotateX: useTransform(mouseY, [0, window.innerHeight], [10, -10]),
              rotateY: useTransform(mouseX, [0, window.innerWidth], [-10, 10]),
            }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div className="gradient-border" variants={fadeInUp}>
              <div className="code-window bg-[#091121]">
                <div className="window-header">
                  <div className="window-dot bg-red-500"></div>
                  <div className="window-dot bg-yellow-500"></div>
                  <div className="window-dot bg-green-500"></div>
                  <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                    <i className="fas fa-code"></i> developer.js
                  </span>
                </div>
                <pre className="language-javascript">
                  <code className="language-javascript">{code}</code>
                </pre>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <i className="fas fa-chevron-down text-blue-400 text-xl"></i>
        </motion.div>
      </section>

      <PortfolioPage />
    </main>
  );
}
