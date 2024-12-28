import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

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
        </nav>
      </div>
    </header>
  );
}
