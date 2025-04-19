import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    document.title = "My Projects";
  }, []);

  return (
    <div>
      <p>Samson's projects</p>
    </div>
  );
};

export default Projects;
