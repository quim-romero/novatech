import { Link, NavLink } from "react-router-dom";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import useDarkMode from "../hooks/useDarkMode";

export default function Header() {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const [isDark, setIsDark] = useDarkMode();

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-brand">NovaTech</Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-brand"
                  : "hover:text-gray-900 dark:hover:text-white transition-colors"
              }
            >
              {label}
            </NavLink>
          ))}

          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
