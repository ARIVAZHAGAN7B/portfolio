import React, { useState } from "react";
import {
  Star,
  Award,
  Calendar,
  BookOpen,
  Trophy,
} from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Bachelor of Engineering (B.E. in CSE)",
      school: "Bannari Amman Institute of Technology",
      mascot: "📘",
      year: "2023-2027",
      achievements: ["GPA: 7.8 / 10.0", "Subject: Science and Engineering"],
      skills: ["Mathematics"],
      description:
        "Focused on core science subjects with emphasis on practical laboratory work and scientific research methodologies.",
    },
  ];

  // Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0, rotateX: -10 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(20,184,166,0.15), rgba(59,130,246,0.15))",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Educational Journey
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            Discover how academic excellence shapes innovative thinking and
            professional growth.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => {
            // Motion values for tilt
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            const rotateX = useTransform(y, [-100, 100], [15, -15]);
            const rotateY = useTransform(x, [-100, 100], [-15, 15]);

            const handleMouseMove = (e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              x.set(e.clientX - rect.left - rect.width / 2);
              y.set(e.clientY - rect.top - rect.height / 2);
            };

            const handleMouseLeave = () => {
              x.set(0);
              y.set(0);
            };

            return (
              <motion.div
  key={index}
  variants={cardVariants}
  onMouseEnter={() => setHoveredIndex(index)}
  onMouseLeave={() => setHoveredIndex(null)}
  className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
    hoveredIndex === index
      ? "border-teal-500 scale-[1.02]"
      : "border-blue-400/20"
  }`}
>
  {/* Glow effect */}
  <motion.div
    className="absolute inset-0 rounded-xl pointer-events-none"
    animate={{
      opacity: hoveredIndex === index ? 0.3 : 0,
      scale: hoveredIndex === index ? 1.05 : 1,
    }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    style={{
      background:
        "radial-gradient(circle at 50% 50%, rgba(45,212,191,0.25), transparent 70%)",
    }}
  />


                {/* Content */}
                <motion.div
                  className="space-y-6 relative z-10"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div className="space-y-2" variants={itemVariants}>
                    <div className="flex items-center gap-3">
                      <motion.span
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="text-3xl"
                      >
                        {edu.mascot}
                      </motion.span>
                      <h3 className="text-2xl font-bold text-white">
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-300 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-teal-500" />
                      {edu.school}
                    </p>
                    <p className="text-gray-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </p>
                  </motion.div>

                  <motion.p
                    className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3"
                    variants={itemVariants}
                  >
                    {edu.description}
                  </motion.p>

                  <motion.div className="space-y-3" variants={itemVariants}>
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      Key Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          variants={itemVariants}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                        >
                          <Award className="w-4 h-4" />
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={itemVariants}
                  >
                    {edu.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1, backgroundColor: "#38bdf81a" }}
                        className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
