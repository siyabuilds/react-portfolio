import { FaGithub } from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitch";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[var(--background)] text-[var(--foreground)] text-sm flex items-center justify-between py-2 px-4 shadow-inner z-50">
      <span className="text-[var(--primary)] font-light">
        © {year} Samson Siyabonga Lukhele
      </span>
      <div className="flex items-center">
        <a
          href="https://github.com/siyabuilds/react-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
          aria-label="GitHub Repo"
        >
          <FaGithub size={18} />
        </a>
        <ThemeSwitch />
      </div>
    </footer>
  );
};

export default Footer;
