import { useMemo } from "react";
import { Link } from "react-router-dom";

const routes = [
  { label: "Projects", path: "/projects" },
  { label: "Contact Me", path: "/contact" },
  { label: "About Me", path: "/about" },
];

const CTAButtons = () => {
  const [first, second] = useMemo(() => {
    const shuffled = [...routes].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }, []);

  return (
    <div className="mt-6 flex gap-4">
      <Link
        to={first.path}
        className="bg-[var(--primary)] text-[var(--background)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--hover-bg)] hover:text-[var(--foreground)] transition-all duration-300"
      >
        {first.label}
      </Link>
      <Link
        to={second.path}
        className="border-2 border-[var(--primary)] text-[var(--primary)] px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[var(--hover-bg)] hover:border-[var(--hover-bg)] hover:text-[var(--foreground)]"
      >
        {second.label}
      </Link>
    </div>
  );
};

export default CTAButtons;
