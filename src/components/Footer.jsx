export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-6 py-10 text-sm text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-semibold text-gray-900 dark:text-white">
          © {year} NovaTech Solutions
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
