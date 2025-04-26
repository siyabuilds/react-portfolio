import { useEffect, useRef } from "react";
import Typed from "typed.js";
import CTAButtons from "./CTAButtons";

const Hero = () => {
  const typedRef = useRef(null);

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
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 pb-16 bg-[var(--background)] text-[var(--foreground)]">
      <img
        src="https://github.com/markuptitan.png"
        alt="Samson"
        className="w-64 h-64 rounded-full border-2 border-[var(--primary)] mb-4 shadow-lg transition duration-500 ease-in-out hover:shadow-[0_0_12px_3px_var(--primary)]"
        aria-label="Samson's profile picture"
      />
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
        Hi, I am Samson.
        <br />
        <span className="text-[var(--primary)] font-light">["</span>
        <span
          ref={typedRef}
          className="text-[var(--primary)] text-2xl sm:text-3xl md:text-4xl font-mono"
          aria-live="polite"
        />
        <span className="text-[var(--primary)] font-light">"]</span>.
      </h1>
      <p className="text-lg text-[var(--foreground)] max-w-xl mt-2">
        I build sleek, functional apps using React, Node.js, and curiosity.
      </p>
      <CTAButtons />
    </section>
  );
};

export default Hero;
