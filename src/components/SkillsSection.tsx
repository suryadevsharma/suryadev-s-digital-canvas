import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "C++", "JavaScript", "Java"],
  },
  {
    title: "Data & ML",
    skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "YOLOv8", "OpenCV"],
  },
  {
    title: "Backend Development",
    skills: ["Django", "FastAPI", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Streamlit", "Render", "Vercel", "Docker"],
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "CN", "OS"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-12">
          <span className="text-primary font-mono text-lg">02.</span>
          Skills
          <span className="h-px bg-border flex-1 ml-4" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors glow-border"
            >
              <h3 className="text-primary font-mono text-sm mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary text-secondary-foreground text-xs font-mono px-3 py-1.5 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
