import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiJasmine,
  SiExpress,
} from "react-icons/si";
import { FaLinux } from "react-icons/fa";

const techGroups = {
  Frontend: [
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiJavascript />, name: "JavaScript" },
  ],
  Backend: [
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
  ],
  Testing: [{ icon: <SiJasmine />, name: "Jasmine" }],
  Tools: [
    { icon: <FaDocker />, name: "Docker" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaLinux />, name: "Linux" },
  ],
};

const quotes = [
  "I don't just write code — I craft experiences.",
  "Code is my canvas, and creativity is my syntax.",
  "Every bug fixed is a lesson learned.",
  "I build solutions, not just software.",
  "Coding is thinking made visible.",
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

const About = () => {
  useEffect(() => {
    document.title = "About Me";
  }, []);
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-8  text-gray-800 flex flex-col items-center"
    >
      <motion.h2
        className="text-4xl font-extrabold text-blue-600 mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-3xl text-center text-lg leading-relaxed mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I’m <span className="font-semibold">Samson Siyabonga Lukhele</span>,
        also known as <span className="italic text-blue-600">MarkupTitan</span>.
        I'm an aspiring full-stack web developer passionate about solving
        problems through clean, efficient, and scalable solutions. I specialize
        in JavaScript technologies, from React and Next.js on the front-end, to
        Node.js and Express on the back. Always learning, always building —
        driven by curiosity.
      </motion.p>

      <motion.p
        className="text-md text-gray-600 italic text-center max-w-xl mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        “{randomQuote}”
      </motion.p>

      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">
        {Object.entries(techGroups).map(([group, items], index) => (
          <motion.div
            key={group}
            className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl p-6 text-center hover:scale-105"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-4">{group}</h3>
            <div className="flex justify-center flex-wrap gap-6 text-4xl text-blue-600">
              {items.map(({ icon, name }) => (
                <motion.div
                  key={name}
                  title={name}
                  whileHover={{ scale: 1.2 }}
                  className="hover:text-blue-800 transition duration-300"
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
