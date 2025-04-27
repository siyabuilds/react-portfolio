import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  const handleLinkClick = () => {
    if (window.innerWidth < 640) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="w-full px-4 py-4 shadow-md bg-[var(--background)] fixed z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-[var(--foreground)]">Samson</h1>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-[var(--foreground)] focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Nav*/}
        <ul className="hidden sm:flex gap-8 sm:gap-10">
          {navItems.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `text-xl px-4 py-2 rounded-md font-medium transition-all ${
                    isActive
                      ? "bg-[var(--primary)] shadow"
                      : "text-[var(--foreground)] hover:bg-[var(--hover-bg)]"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Nav*/}
        <div
          className={`${
            isOpen
              ? "transform translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          } sm:hidden fixed top-0 left-0 w-full h-full bg-[var(--background)] shadow-lg transition-all duration-300 ease-in-out z-50`}
        >
          <div className="flex justify-end p-4 z-50">
            <button
              onClick={() => setIsOpen(false)}
              className="text-[var(--foreground)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col items-center gap-6 z-50">
            {navItems.map(({ label, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `text-lg px-6 py-3 text-[var(--foreground)] font-medium transition-all ${
                      isActive
                        ? "bg-[var(--primary)] shadow-md rounded-md"
                        : "hover:bg-[var(--hover-bg)]"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
