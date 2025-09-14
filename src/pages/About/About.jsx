import { motion, useMotionValue, useTransform } from "framer-motion";
import Codexcoders from "@/assets/images/codexcodersblue.png";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Mouse-based parallax for profile image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, window.innerHeight], [10, -10]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-10, 10]);

  return (
    <section id="about" className="py-20 md:py-32 bg-[#04081A] text-white relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-transparent blur-3xl"
        animate={{ x: [0, 20, -20, 0], y: [0, 10, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      <div className="mx-auto max-w-6xl px-6 lg:px-12 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Innovator, Developer, <span className="text-blue-400">Engineer</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Image */}
          <motion.div
            className="relative group cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            onMouseMove={(e) => {
              mouseX.set(e.clientX);
              mouseY.set(e.clientY);
            }}
            style={{ rotateX, rotateY }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <img
                alt="Arivazhagan"
                className="rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
              animate={{ y: [0, -10, 10, 0], x: [0, 5, -5, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <motion.p variants={fadeInUp} className="leading-relaxed text-lg">
              Hello! I'm <span className="font-bold text-blue-400">Arivazhagan</span>,  
              🎯 A passionate Full-Stack Developer with <b>2+ years in MERN and DevOps</b>.
            </motion.p>

            {/* Achievements */}
            <motion.ul
              className="space-y-3 text-white/90"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
            >
              {[
                "🤖 1+ year AI/ML experience with TensorFlow & CNNs",
                "🚀 Built 10+ real-world projects with 90%+ accuracy in AI",
                "🛠️ Skilled in CI/CD pipelines & scalable systems",
                "🌐 Creator of OlovaJS UI Framework",
              ].map((item, index) => (
                <motion.li key={index} variants={fadeInUp}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.p variants={fadeInUp} className="leading-relaxed">
              My focus is on making web development <b>faster, easier, and more accessible</b>.  
              I'm also expanding into backend development to deliver seamless, robust applications.
            </motion.p>

            {/* Quote Card */}
            <motion.div
              className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg cursor-pointer"
              variants={fadeInUp}
              whileHover={{ scale: 1.03, rotate: 1 }}
            >
              <blockquote className="italic text-white/90">
                “I'm a lifelong learner and innovator, contributing to the developer community 
                with tools that deliver real value. With OlovaJS, I'm pushing the boundaries 
                of JavaScript frameworks to empower developers worldwide.”
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <img src={Codexcoders} alt="Codexcoders Logo" className="h-10 w-auto" />
                <cite className="text-sm text-white font-medium">
                  — Arivazhagan B, Creator of Codexcoders
                </cite>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
