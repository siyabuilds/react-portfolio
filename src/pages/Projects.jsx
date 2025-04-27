import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Banks",
    description:
      "A fully tested CLI-based banking system built with modern JavaScript (ES6).",
    tech: ["React", "Tailwind", "LocalStorage"],
    repo: "https://github.com/markuptitan/banks_umuzi",
    live: "https://github.com/markuptitan/banks_umuzi",
  },
  {
    title: "Password Generator",
    description: "Secure, customizable password generator.",
    tech: ["Next.js", "API Routes", "Tailwind", "ShadCN UI"],
    repo: "https://github.com/markuptitan/nextjs-password-generator",
    live: "https://password-generator.markuptitan.site/",
  },
  {
    title: "Word Unscrambler",
    description: "API-assisted tool for unscrambling English words.",
    tech: ["Next.js", "API Routes", "Tailwind"],
    repo: "https://github.com/markuptitan/word-unscrambler",
    live: "https://word-unscrambler.markuptitan.site",
  },
];

const variants = {
  enter: {
    opacity: 0,
    scale: 0.95,
  },
  center: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
  },
};

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    document.title = "My Projects";
  }, []);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) =>
      newDirection === 1
        ? Math.min(prev + 1, projects.length - 1)
        : Math.max(prev - 1, 0)
    );
  };

  const project = projects[index];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-12 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-extrabold text-[var(--primary)] mb-10 tracking-wide">
        Projects I’ve Built
      </h2>

      <div className="relative w-full max-w-2xl">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="bg-[var(--background)] border border-[var(--primary)]/20 rounded-2xl p-8 text-center hover:shadow-[0_0_12px_3px_var(--primary)] transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-3 text-[var(--foreground)]">
              {project.title}
            </h3>
            <p className="text-[var(--foreground)]/70 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full border border-[var(--primary)] text-sm text-[var(--primary)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-center gap-8 text-[var(--primary)] text-2xl">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                title="View Repo"
              >
                <FaGithub />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
              >
                <FiExternalLink />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Left Button */}
        {index > 0 && (
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl text-[var(--primary)] hover:text-[var(--hover-bg)] p-2"
            title="Previous"
          >
            <FaChevronLeft />
          </button>
        )}

        {/* Right Button */}
        {index < projects.length - 1 && (
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl text-[var(--primary)] hover:text-[var(--hover-bg)] p-2"
            title="Next"
          >
            <FaChevronRight />
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
