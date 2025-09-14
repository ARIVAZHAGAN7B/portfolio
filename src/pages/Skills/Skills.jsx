import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, Reorder } from "framer-motion";

const SkillCard = ({ title, skills, index }) => {
  const [items, setItems] = useState(skills);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Glow Border */}

      <Card className="relative bg-gray-900/40 backdrop-blur-md border border-gray-700 rounded-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
        <CardContent className="p-6 relative z-10">
          
          <h3 className="text-xl text-white font-bold mb-4">{title}</h3>

          {/* Reorderable skills */}
          <Reorder.Group
            axis="x"
            values={items}
            onReorder={setItems}
            className="flex flex-wrap gap-3"
          >
            {items.map((skill, idx) => (
              <Reorder.Item
                key={skill.name}
                value={skill}
                whileDrag={{ scale: 1.15, zIndex: 50 }}
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Badge className="flex items-center gap-2 bg-gray-800/50 text-gray-100 border-gray-600 py-2 px-3 cursor-grab hover:bg-gray-700 active:cursor-grabbing">
                  <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                  {skill.name}
                </Badge>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Skills = () => {
    const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      { name: "Shell Scripting", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
    ],
  },
  {
    title: "Frontend & Styling",
    skills: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Sass/SCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "Material UI", icon: "https://raw.githubusercontent.com/mui/material-ui/master/docs/public/static/logo.png" },
      { name: "Framer Motion", icon: "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png" },
      { name: "GSAP", icon: "https://greensock.com/uploads/monthly_2020_05/gsap-logo.png.3f8a5d44ee71a609ccbcab843e1cda39.png" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "FastAPI", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg" },
      { name: "REST APIs", icon: "https://img.icons8.com/external-flat-juicy-fish/60/000000/external-api-api-flat-flat-juicy-fish.png" },
      { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
      { name: "Socket.IO", icon: "https://socket.io/images/logo.svg" },
      { name: "Axios", icon: "https://axios-http.com/assets/logo.svg" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Firebase Firestore", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "Pinecone", icon: "https://avatars.githubusercontent.com/u/78746364?s=200&v=4" },
      { name: "Milvus", icon: "https://milvus.io/static/favicons/favicon-96x96.png" },
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "Scikit-learn", icon: "https://avatars.githubusercontent.com/u/365630?v=4" },
      { name: "Matplotlib", icon: "https://matplotlib.org/_static/logo2.svg" },
      { name: "Seaborn", icon: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
      { name: "LangChain", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
      { name: "LlamaIndex", icon: "https://avatars.githubusercontent.com/u/127446610?s=200&v=4" },
      { name: "MLflow", icon: "https://mlflow.org/docs/latest/_static/MLflow-logo-final-black.png" },
      { name: "Kubeflow", icon: "https://www.kubeflow.org/images/logo.png" },
      { name: "BentoML", icon: "https://bentoml.org/images/bento.svg" },
      { name: "Weights & Biases", icon: "https://wandb.ai/favicon.ico" },
      { name: "Gradio", icon: "https://avatars.githubusercontent.com/u/86145616?s=200&v=4" },
      { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-logo-secondary-colormark-darktext.svg" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "ArgoCD", icon: "https://argo-cd.readthedocs.io/en/stable/assets/argo.png" },
      { name: "FluxCD", icon: "https://fluxcd.io/img/favicon.png" },
      { name: "GitHub Actions", icon: "https://avatars.githubusercontent.com/u/44036562?s=200&v=4" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "TeamCity", icon: "https://www.jetbrains.com/company/brand/img/jetbrains-logo.png" },
      { name: "Octopus Deploy", icon: "https://avatars.githubusercontent.com/u/1299384?s=200&v=4" },
      { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
      { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
      { name: "ELK Stack", icon: "https://seeklogo.com/images/E/elastic-logo-4C2D0E6CE9-seeklogo.com.png" },
      { name: "Splunk", icon: "https://www.splunk.com/content/dam/splunk2/images/brand/splunk-logo.svg" },
      { name: "SonarQube", icon: "https://cdn.worldvectorlogo.com/logos/sonarqube.svg" },
      { name: "Snyk", icon: "https://cdn.worldvectorlogo.com/logos/snyk-1.svg" },
    ],
  },
  {
    title: "Tools & Productivity",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Git Bash", icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
      { name: "JIRA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "Trello", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
      { name: "Notion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" },
      { name: "Lucidchart", icon: "https://cdn.worldvectorlogo.com/logos/lucidchart-1.svg" },
      { name: "Draw.io", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Diagrams.net_Logo.svg" },
      { name: "Cloudcraft", icon: "https://cloudcraft.co/favicon.ico" },
      { name: "Postman", icon: "https://www.svgrepo.com/show/354202/postman-icon.svg" },
      { name: "Thunder Client", icon: "https://github.com/rangav/thunder-client-support/raw/master/images/thunder-client-icon.png" },
      { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
      { name: "React Testing Library", icon: "https://testing-library.com/img/octopus-128x128.png" },
      { name: "Supertest", icon: "https://avatars.githubusercontent.com/u/9349743?s=200&v=4" },
      { name: "NPM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
      { name: "Yarn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" },
      { name: "Webpack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
      { name: "Babel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" },
    ],
  },
  {
    title: "Core CS Concepts",
    skills: [
      { name: "DSA", icon: "https://cdn-icons-png.flaticon.com/512/2721/2721292.png" },
      { name: "OOP", icon: "https://cdn-icons-png.flaticon.com/512/2721/2721292.png" },
      { name: "Operating Systems", icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
      { name: "DBMS", icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
      { name: "System Design", icon: "https://cdn-icons-png.flaticon.com/512/1048/1048943.png" },
      { name: "SDLC", icon: "https://cdn-icons-png.flaticon.com/512/270/270798.png" },
      { name: "Agile", icon: "https://cdn-icons-png.flaticon.com/512/906/906324.png" },
    ],
  },
];

  return (
    <section className="min-h-screen relative overflow-hidden py-20 bg-[#020617]">
      <div className="container mx-auto px-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
        >
          Skills
        </motion.h2>

<div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
  {skillCategories.map((category, index) => (
    <div key={index} className="mb-8 break-inside-avoid">
      <SkillCard
        index={index}
        title={category.title}
        skills={category.skills}
      />
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default Skills;
