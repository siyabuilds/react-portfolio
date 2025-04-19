import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About Samson";
  }, []);

  return (
    <div>
      <p>About Samson</p>
    </div>
  );
};

export default About;
