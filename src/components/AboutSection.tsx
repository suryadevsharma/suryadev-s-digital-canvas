import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-8">
          <span className="text-primary font-mono text-lg">01.</span>
          About Me
          <span className="h-px bg-border flex-1 ml-4" />
        </h2>

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm a <span className="text-foreground">B.Tech Computer Science</span> student at United College of Engineering and Research, Prayagraj (CGPA: 7.7/10), graduating in 2026.
          </p>
          <p>
            I enjoy building software that lives at the intersection of <span className="text-foreground">AI and full-stack development</span>. My experience spans from creating real-time fire detection systems with YOLO and FastAPI, to full-stack booking platforms with Django and React.
          </p>
          <p>
            I recently completed a <span className="text-foreground">Generative AI internship</span> at Smart Internz where I built AI applications using Google AI Studio and Gemini APIs.
          </p>
          <p>Here are some technologies I've been working with:</p>

          <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
            {["Python", "Django & FastAPI", "React.js", "JavaScript / TypeScript", "MySQL", "Git & GitHub"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="text-primary">▹</span> {t}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
