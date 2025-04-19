import { useState } from "react";
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

  return (
    <nav className="w-full px-4 py-4 shadow-md bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Samson
        </h1>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-gray-800 dark:text-white focus:outline-none"
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
                      ? "bg-blue-600 text-white shadow"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
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
          } sm:hidden fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out z-50`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-800 dark:text-white"
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
          <ul className="flex flex-col items-center gap-6">
            {navItems.map(({ label, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `text-lg px-6 py-3 text-gray-800 dark:text-white font-medium transition-all ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md rounded-md"
                        : "hover:bg-gray-200 dark:hover:bg-gray-800"
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
