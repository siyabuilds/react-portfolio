import { FaGithub } from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitch";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900  text-gray-600 text-sm flex items-center justify-center py-2 px-4 shadow-sm z-50">
      <span className="mr-2">© {year} Samson Siyabonga Lukhele</span>
      <a
        href="https://github.com/markuptitan/react-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 text-gray-400 hover:text-blue-700 transition-colors"
        aria-label="GitHub Repo"
      >
        <FaGithub size={18} />
      </a>
      <ThemeSwitch />
    </footer>
  );
};

export default Footer;
