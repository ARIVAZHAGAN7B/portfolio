import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import "@/assets/css/animate.css";
import { FlipWords } from "@/components/ui/flip-words";

// Grid Background
const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="absolute inset-0">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill="none" stroke="white" strokeWidth="0.5" className="opacity-40 animate-gridPulse" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  </div>
);

export default function Hero() {
  const words = [
    "AI Product Developer",
    "AI Platform Engineer",
    "Full-Stack Developer (Web and Mobile)",
    "Machine Learning Engineer",
    "Cloud Engineer",
    "Cloud Developer",
    "Devops Engineer",
    "Mlops Engineer",
    "YouTuber",
  ];

  const [heroPadding, setHeroPadding] = useState("0");
  const [code] = useState(`
const profile = {
    name: 'Arivazhagan B',
    title: 'AI Product Developer | AI Platform Engineer | Full-Stack Developer',
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    yearsOfExperience: 1, 
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5 &&
            this.yearsOfExperience >= 3
        );
    }
};
  `);

  useEffect(() => {
    Prism.highlightAll();

    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse { 0%,100%{opacity:0.1;}50%{opacity:0.3;} }
      @keyframes dotPulse { 0%,100%{opacity:0.2;transform:scale(0.8);}50%{opacity:0.5;transform:scale(1.2);}}
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

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  const skills = [
    'Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'Shell Scripting',
    'HTML5', 'CSS3', 'SASS', 'Tailwind CSS', 'React', 'Redux', 'Next.js',
    'Framer Motion', 'GSAP',
    'Node.js', 'Express.js', 'FastAPI', 'Flask', 'GraphQL', 'Socket.io',
    'TensorFlow', 'PyTorch', 'Hugging Face', 'ONNX', 'Scikit-learn',
    'Streamlit', 'Gradio', 'LangChain', 'LlamaIndex',
    'Docker', 'Kubernetes', 'Nginx', 'PM2', 'Terraform',
    'GitHub Actions', 'Octopus Deploy', 'TeamCity', 'AWS', 'GCP', 'Azure',
    'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'Redis Vector',
    'Jest', 'React Testing Library', 'Supertest', 'Thunder Client', 'Postman',
    'Trello', 'Notion', 'Git Bash', 'VS Code'
  ];

  return (
    <main className="bg-[#020617] text-white min-h-screen">
      <section
        className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding"
        style={{ paddingTop: heroPadding }}
      >
        <GridBackground />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors number={10} />
        </div>

        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28">
          {/* Left column */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate__animated animate__fadeInLeft relative">
            {/* Welcome badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6 sm:mb-8 animate__animated animate__fadeInDown animate__delay-1s">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-gray-300 text-xs sm:text-sm font-medium">
                Welcome to my universe
              </span>
            </div>

            {/* Name */}
            <div className="relative mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <SparklesText text="Hello" />{" "}
                <span className="relative inline-block">
                  I&apos;m
                  <span className="typing-effect gradient-text"> Arivazhagan B</span>
                </span>
              </h1>
            </div>

            {/* Role badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
              <i className="fas fa-rocket text-blue-400 animate-bounce text-sm sm:text-base"></i>
              <span>
                <FlipWords className="text-lg sm:text-xl text-blue-400 font-medium" words={words} />
              </span>
            </div>

            {/* Description */}
            <div className="relative mb-8 sm:mb-12 max-w-xl">
              <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed">
              Founder of Codexcoders, AI Product Developer, and Full-Stack Developer with a passion for building innovative web and AI solutions. I love turning ideas into reality using cutting-edge technologies.
              </p>
            </div>


          </div>

          {/* Right column - Code window */}
          <div className="w-full lg:w-1/2 animate__animated animate__fadeInDown animate__delay-0.1s">
            <div className="gradient-border">
              <div className="code-window bg-[#091121]">
                <div className="window-header">
                  <div className="window-dot bg-red-500"></div>
                  <div className="window-dot bg-yellow-500"></div>
                  <div className="window-dot bg-green-500"></div>
                  <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                    <i className="fas fa-code"></i>
                    developer.js
                  </span>
                </div>
                <pre className="language-javascript">
                  <code className="language-javascript">{code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
        <span className="text-gray-400 text-sm flex items-center gap-2">
          <i className="fas fa-mouse text-blue-400"></i>
          <ArrowDownwardIcon fontSize="large" className="text-blue-400" />
        </span>
        <i className="fas fa-chevron-down text-blue-400 text-xl"></i>
      </div>

      <PortfolioPage />
    </main>
  );
}
