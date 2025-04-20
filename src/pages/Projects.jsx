import { useEffect } from "react";
import { useState } from "react";
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

const Projects = () => {
  useEffect(() => {
    document.title = "My Projects";
  }, []);

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => {
      const newIndex =
        newDirection === 1
          ? Math.min(prev + 1, projects.length - 1)
          : Math.max(prev - 1, 0);
      return newIndex;
    });
  };

  const variants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 100 : -100,
      scale: 0.95,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -100 : 100,
      scale: 0.95,
    }),
  };

  const project = projects[index];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gray-100">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-blue-600 tracking-wide">
        Projects I’ve Built
      </h2>

      <div className="relative w-full max-w-2xl min-h-[300px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="p-6 rounded-xl shadow-lg bg-white text-center"
          >
            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex justify-center gap-2 flex-wrap text-sm text-blue-500 font-medium mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 bg-blue-50 rounded-full border border-blue-200"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-6 mt-4 text-2xl text-blue-600">
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

        <div className="absolute inset-y-0 left-0 flex items-center">
          {index > 0 && (
            <button
              onClick={() => paginate(-1)}
              className="text-2xl p-2 text-blue-500 hover:text-blue-800"
              title="Previous"
            >
              <FaChevronLeft />
            </button>
          )}
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center">
          {index < projects.length - 1 && (
            <button
              onClick={() => paginate(1)}
              className="text-2xl p-2 text-blue-500 hover:text-blue-800"
              title="Next"
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
