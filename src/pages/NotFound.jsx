import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found – NovaTech</title>
      </Helmet>

      <motion.section
        className="flex flex-col items-center justify-center min-h-screen text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-5xl font-bold mb-4 text-brand">404</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-brand text-white px-5 py-3 rounded-lg hover:bg-brand-dark transition-colors"
        >
          Back to home
        </Link>
      </motion.section>
    </>
  );
}
