import React, { useState, useEffect } from "react";
import { projects } from "../data/projects";
import FilterDropdown from "./../components/FilterDropDown";
import ProjectCard from "./../components/ProjectCard";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Load saved filter from localStorage on mount
  useEffect(() => {
    const lastFilter = localStorage.getItem("lastFilter");
    if (lastFilter) setFilter(lastFilter);
  }, []);

  // Update filtered projects whenever filter changes
  useEffect(() => {
    localStorage.setItem("lastFilter", filter);

    if (filter === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.tech.includes(filter)
      );
      setFilteredProjects(filtered);
    }
  }, [filter]);

  useEffect(() => {
    document.title = "My Projects";
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <section className="min-h-screen px-4 py-8 text-[var(--foreground)]">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>

      {/* Filter Dropdown */}
      <div className="mb-6 flex justify-center">
        <FilterDropdown
          onFilterChange={handleFilterChange}
          activeFilter={filter}
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No projects match this filter.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
