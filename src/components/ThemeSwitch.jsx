import { Sun, Moon, Ghost } from "lucide-react";
import { useTheme } from "./../hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";

const themeIcons = {
  light: Sun,
  dark: Moon,
  dracula: Ghost,
};

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  const Icon = themeIcons[theme] ? themeIcons[theme] : Sun;

  if (!Icon) return null;

  return (
    <button
      onClick={toggleTheme}
      className="ml-2 p-1 rounded-full border border-primary hover:bg-hover-light dark:hover:bg-hover-dark transition-colors"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25 }}
        >
          <Icon className="w-6 h-6 text-primary" />
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default ThemeSwitch;
