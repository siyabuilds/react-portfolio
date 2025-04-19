import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Samson's Portfolio";
  }, []);

  return (
    <div>
      <p>Samson's portfolio</p>
    </div>
  );
};

export default Home;
