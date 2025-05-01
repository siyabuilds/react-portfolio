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
        "Umuzi Recruit",
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
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 pb-16 text-[var(--foreground)]">
      <div className="profile-ring relative w-64 h-64 mx-auto mb-6">
        <img
          src="https://github.com/markuptitan.png"
          alt="Samson"
          className="w-full h-full rounded-full border-2 border-[var(--primary)] relative z-10"
        />
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
        Hi, I am Samson.
        <br />
        <span className="text-[var(--primary)] font-light">["</span>
        <span
          ref={typedRef}
          className="text-[var(--primary)] text-2xl sm:text-3xl md:text-4xl ubuntu-mono-regular"
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
