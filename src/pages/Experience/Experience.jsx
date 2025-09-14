import { motion } from "framer-motion";
import React from "react";
import { Network } from "lucide-react";

const ExperienceCard = ({ title, company, period, description, icon: Icon }) => (
  <motion.div
    className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {/* Glass morphism */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />
    
    {/* Animated gradient border */}
    <motion.div
      className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500"
      animate={{ rotate: [0, 5, -5, 0] }}
      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
    />

    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      {/* Icon */}
      <motion.div
        className="relative mb-6"
        whileHover={{ scale: 1.2, rotate: 15 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl animate-pulse" />
        <Icon className="w-12 h-12 text-cyan-400 relative z-10" />
      </motion.div>

      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-blue-400">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Network,
      title: "Freelance Developer",
      company: "Fiverr",
      period: "2024(June) - Present",
      description: "Developed powerful websites for clients globally.",
    },
  ];

  return (
    <section className="min-h-screen relative bg-[#04081A] py-32 overflow-hidden">
      {/* Animated floating particles */}
      <motion.div
        className="absolute inset-0"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center space-y-8 mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
            Professional Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
            "Transforming ideas into digital reality, one project at a time"
          </p>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
        </div>

        {/* Floating background blurs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"
          animate={{ x: [0, 50, -50, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{ x: [0, -50, 50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
};

export default ExperienceSection;
