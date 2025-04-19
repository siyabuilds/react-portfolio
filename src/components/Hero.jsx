import { useEffect, useRef } from "react";
import Typed from "typed.js";
import CTAButtons from "./CTAButtons";

const Hero = () => {
  const typedRef = useRef();

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Web Developer",
        "JavaScript Engineer",
        "Software Developer",
        "Learner",
      ],
      typeSpeed: 75,
      backSpeed: 60,
      loop: false,
      smartBackspace: true,
      showCursor: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <img
        src="https://github.com/markuptitan.png"
        alt="Samson"
        className="w-64 h-64 rounded-full border-4 border-blue-600 mb-4 shadow-lg"
      />
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900">
        Hi, I am Samson.
        <br />
        <span className="text-blue-600 font-light">["</span>
        <span
          ref={typedRef}
          className="text-blue-600 text-2xl sm:text-3xl md:text-4xl font-mono"
        />
        <span className="text-blue-600 font-light">"]</span>.
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mt-2">
        I build sleek, functional apps using React, Node.js, and curiosity.
      </p>
      <CTAButtons />
    </section>
  );
};

export default Hero;
