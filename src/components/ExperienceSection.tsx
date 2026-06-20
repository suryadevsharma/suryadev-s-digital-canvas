import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-12">
          <span className="text-primary font-mono text-lg">03.</span>
          Experience
          <span className="h-px bg-border flex-1 ml-4" />
        </h2>

        <div className="border-l-2 border-border pl-8 relative">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />

          <div>
            <h3 className="text-xl font-semibold">
              Summer Intern – <span className="text-primary">Generative AI</span>
            </h3>
            <p className="text-muted-foreground font-mono text-sm mt-1">
              Smart Internz | Remote · June 2025 – August 2025
            </p>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              {[
                "Built AI-powered chatbot applications using Gemini APIs and Python.",
                "Processed prompt-response datasets to improve model outputs.",
                "Integrated APIs and deployed applications on Render for real-time usage.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 shrink-0">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
