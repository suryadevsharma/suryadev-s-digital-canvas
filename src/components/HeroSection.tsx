import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        {/* Left: Text Info */}
        <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm mb-4"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-2 tracking-tight text-foreground"
          >
            Suryadev Sharma.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6"
          >
            I build things for the web.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground max-w-xl text-base sm:text-lg leading-relaxed mb-10"
          >
            Backend Engineer skilled in Python, FastAPI, Django, and PostgreSQL. HackWithInfy national finalist with <span className="text-primary font-semibold font-mono text-base">400+</span> DSA problems solved. Passionate about building robust, scalable AI-powered and full-stack systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center md:justify-start gap-6"
          >
            <a
              href="#projects"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-sm px-8 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all duration-300"
            >
              View My Work
            </a>
            <div className="flex items-center gap-4">
              <a href="https://github.com/suryadevsharma" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/suryadevsharma/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:suryadevsharma11@gmail.com" className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: Personal Photo Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative shrink-0"
        >
          {/* Back glows and frames for depth and visibility */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-blue-400 rounded-3xl opacity-20 blur-lg pointer-events-none" />
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary rounded-tl-2xl pointer-events-none opacity-60" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-primary rounded-br-2xl pointer-events-none opacity-60" />
          
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-border shadow-xl bg-card">
            <img
              src="/admin.jpg"
              alt="Suryadev Sharma"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=350&auto=format&fit=crop&q=80";
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

