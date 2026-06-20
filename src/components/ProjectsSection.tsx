import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Krishi Sankalp (कृषि संकल्प)",
    description:
      "An advanced agricultural intelligence platform providing real-time mandi prices, logistics cost estimates, FPO search directories, weather forecasts, price alerts, and machine learning models for crop recommendation and pest diagnosis.",
    tech: ["React (Vite)", "FastAPI", "PostgreSQL", "TensorFlow", "Tailwind CSS"],
    live: "https://krishi-sankalp-frontend.onrender.com",
    github: "https://github.com/suryadevsharma/krishi-sankalp",
  },
  {
    title: "Interactive Wall Calendar",
    description:
      "A responsive, modern, and interactive wall calendar component with a dual-column layout, date range selection, and persistent notes system.",
    tech: ["Next.js", "Tailwind CSS", "date-fns"],
    live: "https://calendar-component-pi.vercel.app/",
    github: "https://github.com/suryadevsharma/calendar-component",
  },
  {
    title: "DocMind",
    description:
      "A production-ready RAG Document Q&A application for uploading PDF/DOCX files and chatting with their contents using Google Gemini. Features real-time streaming, JWT auth, and vector search.",
    tech: ["FastAPI", "React", "Google Gemini", "ChromaDB", "MySQL", "Tailwind CSS"],
    live: "https://docmind-2bze.vercel.app",
    github: "https://github.com/suryadevsharma/docmind",
  },
  {
    title: "Navi-Guide – Online Guide Booking",
    description:
      "Full-stack web app for discovering, booking, and managing tour guides. Features user authentication, role-based access, and responsive React frontend with RESTful Django backend.",
    tech: ["Django", "React.js", "MySQL", "Tailwind CSS"],
    live: "https://guide-hub-plus.vercel.app/",
    github: "https://github.com/suryadevsharma/guide-hub-plus",
  },
  {
    title: "IntelliGuard – AI Fire & Smoke Detection",
    description:
      "Real-time fire and smoke detection system using YOLO-based deep learning and computer vision. Features REST APIs via FastAPI and an interactive Streamlit dashboard for live monitoring.",
    tech: ["Python", "YOLO", "FastAPI", "OpenCV", "Streamlit"],
    live: "https://huggingface.co/spaces/suryadevsharma11/intelliguard-ai",
    github: "https://github.com/suryadevsharma/PyroSense-AI-Main",
  },
  {
    title: "AI Chatbot",
    description:
      "An AI-powered chatbot application built with modern web technologies, capable of intelligent conversations and real-time responses.",
    tech: ["Python", "AI/ML", "Web"],
    live: "https://ai-chatbot-duov.onrender.com/",
    github: "https://github.com/suryadevsharma/ai-chatbot",
  },
  {
    title: "House Price Prediction Model",
    description:
      "Machine learning model for predicting house prices based on various features. Built with Python and data science libraries.",
    tech: ["Python", "ML", "Data Science"],
    github: "https://github.com/suryadevsharma/House-Prediction-Model",
  },
  {
    title: "HubSpot DLT Integration Service",
    description:
      "A production-ready data extraction service that pulls Deals data from HubSpot, pipelines it through DLT (Data Load Tool), and stores it in PostgreSQL, offering FastAPI REST endpoints for tracking.",
    tech: ["FastAPI", "DLT", "PostgreSQL", "SQLAlchemy", "Docker"],
    github: "https://github.com/suryadevsharma/hubspot-dlt-integration",
  },
  {
    title: "ServiceHive GenAI Agent",
    description:
      "A production-ready Generative AI agent system combining a FastAPI backend, Streamlit frontend, LangChain tool-calling agents (web search, calculator, ChromaDB RAG pipeline), and local vector store retrieval.",
    tech: ["FastAPI", "Streamlit", "LangChain", "ChromaDB", "Llama3"],
    github: "https://github.com/suryadevsharma/servicehive-genai-agent",
  },
  {
    title: "Team Task Manager",
    description:
      "A full-stack, responsive team task and project management web application. Features dashboards, project workspaces, task assignment, and CRUD operations.",
    tech: ["Node.js", "Express", "SQLite", "React", "CSS"],
    github: "https://github.com/suryadevsharma/Team-Task-Manager",
  },
  {
    title: "Fire & Smoke Detection",
    description:
      "Core software-based project used for detecting smog and fire and alerting nearby emergency centers.",
    tech: ["Python", "OpenCV", "YOLO"],
    live: "https://fire-smoke-detection.vercel.app",
    github: "https://github.com/suryadevsharma/Fire_Smoke_Detection",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-12">
          <span className="text-primary font-mono text-lg">04.</span>
          Projects
          <span className="h-px bg-border flex-1 ml-4" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-primary text-3xl font-mono opacity-50">
                  {"{ }"}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-subtle">
                    {t}
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

export default ProjectsSection;
