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
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        {first.label}
      </Link>
      <Link
        to={second.path}
        className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
      >
        {second.label}
      </Link>
    </div>
  );
};

export default CTAButtons;
