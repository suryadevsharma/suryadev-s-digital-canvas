import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Phone, Code2 } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-primary font-mono text-sm mb-4">05. What's Next?</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          I'm currently looking for opportunities where I can contribute to building impactful software. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <a
          href="mailto:suryadevsharma11@gmail.com"
          className="inline-block border border-primary text-primary px-8 py-3 rounded font-mono text-sm hover:bg-primary/10 transition-colors mb-12"
        >
          Say Hello
        </a>

        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com/suryadevsharma" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/suryadevsharma/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:suryadevsharma11@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
          <a href="tel:+919120708359" className="text-muted-foreground hover:text-primary transition-colors">
            <Phone size={20} />
          </a>
          <a href="https://leetcode.com/u/suryadevsharma11/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Code2 size={20} />
          </a>
        </div>
      </motion.div>

      <div className="text-center mt-20 text-muted-foreground text-xs font-mono">
        <p>Designed & Built by Suryadev Sharma</p>
      </div>
    </section>
  );
};

export default ContactSection;
