import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  const [clicks, setClicks] = useState(0);
  const navigate = useNavigate();

  const handleSecretClick = () => {
    const next = clicks + 1;
    if (next >= 5) {
      navigate("/styleguide");
    } else {
      setClicks(next);
      setTimeout(() => setClicks(0), 3000);
    }
  };

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-6 py-10 text-sm text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div
          onClick={handleSecretClick}
          className="font-semibold text-gray-900 dark:text-white cursor-pointer relative"
        >
          © {year} NovaTech Solutions
          <span className="absolute -bottom-5 left-0 text-[10px] text-gray-400 opacity-60">
            click x5 to unlock
          </span>
        </div>
        <nav className="flex gap-6">
          <a href="/privacy" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms</a>
          <a href="mailto:hello@novatech.com" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
