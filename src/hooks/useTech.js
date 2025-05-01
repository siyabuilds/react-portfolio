import { useState, useEffect } from "react";
import { projects } from "../data/projects";

const useTech = () => {
  const [techStack, setTechStack] = useState([]);

  useEffect(() => {
    const techSet = new Set();

    projects.forEach((project) => {
      project.tech.forEach((tech) => techSet.add(tech));
    });
    setTechStack(Array.from(techSet));
  }, []);

  return techStack;
};

export default useTech;
