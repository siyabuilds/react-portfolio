import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useTech from "../hooks/useTech";

const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -5 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, scale: 0.95, y: -5, transition: { duration: 0.15 } },
};

const FilterDropdown = ({ onFilterChange, activeFilter }) => {
  const [selectedTech, setSelectedTech] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const techStack = useTech();

  useEffect(() => {
    const lastFilter = localStorage.getItem("lastFilter") || "All";
    setSelectedTech(lastFilter);
  }, []);

  const handleFilterChange = (tech) => {
    setSelectedTech(tech);
    localStorage.setItem("lastFilter", tech);
    onFilterChange(tech);
    setIsOpen(false);
  };

  return (
    <div className="relative w-64">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full p-3 rounded-md border-2 shadow-md bg-[var(--background)] text-[var(--foreground)] border-[var(--primary)] transition hover:shadow-lg"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Filter by Tech Stack:{" "}
        <span className="text-[var(--primary)]">{selectedTech}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="dropdown"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className="absolute left-0 mt-2 w-full rounded-md border-2 border-[var(--primary)] shadow-md bg-[var(--background)] z-10"
          >
            <ul>
              <li
                onClick={() => handleFilterChange("All")}
                className={`p-2 cursor-pointer hover:bg-[var(--hover-bg)] ${
                  activeFilter === "All" ? "font-bold" : ""
                }`}
              >
                All
              </li>
              {techStack.map((tech) => (
                <li
                  key={tech}
                  onClick={() => handleFilterChange(tech)}
                  className={`p-2 cursor-pointer hover:bg-[var(--hover-bg)] ${
                    activeFilter === tech ? "font-bold" : ""
                  }`}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterDropdown;
