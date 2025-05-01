import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectCard = ({ project }) => {
  const { title, description, tech, github, liveDemo, image } = project;

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[var(--background)] text-[var(--foreground)] border border-[var(--primary)] rounded-2xl p-4 shadow-md hover:scale-105 transition duration-300"
    >
      <div className="mb-4">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      </div>
      <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((techItem) => (
          <span
            key={techItem}
            className="px-4 py-2 rounded-full border text-sm text-[var(--primary)] border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--foreground)] transition duration-200"
          >
            {techItem}
          </span>
        ))}
      </div>

      {/* Icons for GitHub and Live Demo */}
      <div className="flex gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[var(--primary)] hover:text-[var(--foreground)] transition duration-200"
          >
            <FaGithub />
            <span className="text-sm">View code</span>
          </a>
        )}
        {liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[var(--primary)] hover:text-[var(--foreground)] transition duration-200"
          >
            <FaExternalLinkAlt />
            <span className="text-sm">Visit Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
