import { useEffect } from "react";
import Hero from "../components/Hero";

const Home = () => {
  useEffect(() => {
    document.title = "Samson's Portfolio";
  }, []);

  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
